import { useRef, useState } from "react";
import { ScrollView as TaroScrollView, Text, View, Input } from "@tarojs/components";
import { ChevronLeft, History, Send } from "lucide-react";

import { navigateBackOrTo, navigateTo } from "@/utils/navigation";

import {
  AvatarBubble,
  BudgetResultCard,
  ChipScroll,
} from "./components/chat-widgets";
import { formatChatText } from "./format-chat-text";
import {
  AI_REPLIES,
  BUDGET_KEYWORD_RE,
  BUDGET_RE,
  CHIPS,
  INITIAL_MESSAGES,
} from "./data";
import type { Message } from "./data";

import "./index.scss";

export default function AiChatPage() {
  const messageIdSeq = useRef<number>(INITIAL_MESSAGES.reduce((max, msg) => Math.max(max, msg.id), 0));
  const nextMessageId = (): number => {
    messageIdSeq.current += 1;
    return messageIdSeq.current;
  };

  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const defaultChip = CHIPS.find((c) => c.activeDefault)?.key ?? CHIPS[0].key;
  const [chipActive, setChipActive] = useState(defaultChip);

  const scrollIntoViewAnchor = `chat-floor-${messages.length}-${loading ? 1 : 0}`;

  const sendMessage = (text: string) => {
    if (!text.trim() || loading) return;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const userMsg: Message = {
      id: nextMessageId(),
      role: "user",
      text: text.trim(),
      time: timeStr,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const isBudgetMessage = BUDGET_RE.test(text) || BUDGET_KEYWORD_RE.test(text);

    setTimeout(() => {
      const now2 = new Date();
      const t2 = `${String(now2.getHours()).padStart(2, "0")}:${String(now2.getMinutes()).padStart(2, "0")}`;

      if (isBudgetMessage) {
        const bundleMsg: Message = {
          id: nextMessageId(),
          role: "ai",
          text: "",
          time: t2,
          type: "budget-result-card",
        };
        setMessages((prev) => [...prev, bundleMsg]);
      } else {
        const matchedKey = Object.keys(AI_REPLIES).find((k) => text.includes(k));
        const replyText = matchedKey
          ? AI_REPLIES[matchedKey]
          : `感谢你的提问！🎧\n\n关于「${text.trim()}」，我正在为你分析最新的 Rave 资讯和音乐趋势。\n\n你可以尝试更具体的描述，比如加上城市名称或音乐风格，我能给出更精准的推荐！`;

        const aiMsg: Message = {
          id: nextMessageId(),
          role: "ai",
          text: replyText,
          time: t2,
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
      setLoading(false);
    }, 1600);
  };

  const runChip = (chip: (typeof CHIPS)[number]) => {
    setChipActive(chip.key);

    if (chip.navigate === "eventList") {
      navigateTo("eventList");
      return;
    }

    if (chip.send) {
      sendMessage(chip.send);
      return;
    }

    sendMessage(chip.label);
  };

  const canSend = input.trim().length > 0 && !loading;

  return (
    <View className="chat-page">
      <View className="chat-header">
        <View className="chat-header__btn" onClick={() => navigateBackOrTo("welcome")}>
          <ChevronLeft size={34} strokeWidth={2.2} color="#333644" />
        </View>
        <Text className="chat-header__title">RavePulse AI 助手</Text>
        <View className="chat-header__btn">
          <History size={30} strokeWidth={2} color="#8a8f9e" />
        </View>
      </View>

      <TaroScrollView
        scrollY
        enhanced
        showScrollbar={false}
        scrollWithAnimation
        scrollIntoView={scrollIntoViewAnchor}
        className="chat-scroll"
      >
        <View className="chat-list">
          {messages.map((msg) => {
            const isUser = msg.role === "user";

            const mainContent =
              !isUser && msg.type === "budget-result-card" ? (
                <BudgetResultCard onNavigate={() => navigateTo("budgetResult")} />
              ) : (
                <View className={`chat-bubble ${msg.role === "ai" ? "chat-bubble--ai" : "chat-bubble--user"}`}>
                  <View className="chat-bubble__lines">{formatChatText(msg.text)}</View>
                </View>
              );

            const bubbleCol = (
              <View className={`chat-row__main ${isUser ? "chat-row__main--user" : ""}`}>
                {mainContent}
                <Text className="chat-time">{msg.time}</Text>
              </View>
            );

            return (
              <View key={msg.id} className={`chat-row ${isUser ? "chat-row--user" : ""}`}>
                {!isUser ? <AvatarBubble role="ai" /> : null}
                {bubbleCol}
                {isUser ? <AvatarBubble role="user" /> : null}
              </View>
            );
          })}

          {loading ? (
            <View className="chat-row">
              <AvatarBubble role="ai" />
              <View style={{ flex: 1, display: "flex", justifyContent: "flex-start", paddingBottom: "4rpx" }}>
                <View className="chat-typing">
                  <View className="dot-bounce-dot dot-delay-1" />
                  <View className="dot-bounce-dot dot-delay-2" />
                  <View className="dot-bounce-dot dot-delay-3" />
                </View>
              </View>
            </View>
          ) : null}

          <View id={scrollIntoViewAnchor} className="chat-floor" />
        </View>
      </TaroScrollView>

      <View className="chat-footer">
        <ChipScroll className="chat-chips-scroll">
          <View className="chat-chips-row">
            {CHIPS.map((chip) => (
              <View
                key={chip.key}
                className={`chat-chip ${chip.key === chipActive ? "chat-chip--active" : ""}`}
                onClick={() => runChip(chip)}
              >
                <Text className="chat-chip__text">{chip.label}</Text>
              </View>
            ))}
          </View>
        </ChipScroll>

        <View className="chat-input-shell">
          <Input
            className="chat-input"
            placeholder="输入预算金额，如：3000元"
            placeholderStyle="color: #999999; font-size: 26rpx;"
            maxlength={280}
            value={input}
            confirmType="send"
            onInput={(e) => setInput(e.detail.value)}
            onConfirm={() => sendMessage(input)}
          />
          <View className={`chat-send ${canSend ? "" : "chat-send--muted"}`} onClick={() => canSend && sendMessage(input)}>
            <Send size={30} color="#ffffff" strokeWidth={2} />
          </View>
        </View>
      </View>
    </View>
  );
}

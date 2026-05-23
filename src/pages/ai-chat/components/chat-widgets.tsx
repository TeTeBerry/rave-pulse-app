import type { ReactNode } from "react";
import { ScrollView as TaroScrollView, Text, View } from "@tarojs/components";

import { Bot, FolderOpen, MapPin, Sparkles, User } from "lucide-react";

import { BUDGET_PLANS } from "../data";

export function ChipScroll(props: { className?: string; children: ReactNode }) {
  const { className, children } = props;
  return (
    <TaroScrollView
      scrollX
      scrollWithAnimation
      enhanced
      showScrollbar={false}
      className={className}
      style={{ width: "100%" }}
    >
      {children}
    </TaroScrollView>
  );
}

export function BudgetResultCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <View className="chat-card chat-card--budget">
      <View className="chat-card__body">
        <View className="chat-card__head">
          <View className="chat-card__badge">
            <Sparkles size={30} strokeWidth={2} color="#ffffff" />
          </View>
          <View className="chat-card__head-text">
            <View className="chat-card__title-row">
              <Text className="chat-card__title-plain">已为你匹配 </Text>
              <Text className="chat-card__title-strong">3</Text>
              <Text className="chat-card__title-plain"> 个方案</Text>
            </View>
            <Text className="chat-card__sub">按预算智能推荐</Text>
          </View>
        </View>

        <View className="chat-card__plans">
          {BUDGET_PLANS.map((item) => (
            <View key={item.label} className="chat-card__plan-row">
              <View className="chat-card__plan-left">
                <View className="chat-card__bullet" style={{ backgroundColor: item.dot }} />
                <Text className="chat-card__plan-label">{item.label}</Text>
              </View>
              <Text className="chat-card__plan-price" style={{ color: item.priceFg }}>
                {item.price}
              </Text>
            </View>
          ))}
        </View>

        <View className="chat-card__loc">
          <MapPin size={26} strokeWidth={2} color="#8a8f9e" />
          <Text className="chat-card__loc-text">上海 · 杭州 · 北京</Text>
        </View>

        <View className="chat-card__cta" onClick={onNavigate}>
          <FolderOpen size={32} strokeWidth={2} color="#ffffff" />
          <Text className="chat-card__cta-text">查看完整预算方案</Text>
          <Text className="chat-card__cta-chev">›</Text>
        </View>
      </View>
    </View>
  );
}

export function AvatarBubble({ role }: { role: "ai" | "user" }) {
  const isAi = role === "ai";
  return (
    <View className={`chat-avatar ${isAi ? "chat-avatar--ai" : "chat-avatar--user"}`}>
      {isAi ? <Bot color="#ffffff" size={22} strokeWidth={2} /> : <User color="#ffffff" size={22} strokeWidth={2} />}
    </View>
  );
}

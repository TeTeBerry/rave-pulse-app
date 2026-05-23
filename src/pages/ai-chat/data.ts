export interface Message {
  id: number;
  role: "ai" | "user";
  text: string;
  time: string;
  type?: "text" | "budget-result-card";
}

export interface QuickChipModel {
  key: string;
  label: string;
  send?: string;
  navigate?: "eventList";
  activeDefault?: boolean;
}

export const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "ai",
    text:
      "嗨！我是 RavePulse AI 助手 🎵\n\n我可以帮你：\n• 查找附近的派对活动\n• 生成专属歌单推荐\n• 制定出行预算规划\n• 解答音乐节相关问题\n\n告诉我你的城市和喜好，让我们开始吧！",
    time: "09:00",
  },
  {
    id: 2,
    role: "user",
    text: "我在上海，喜欢 House 和 Techno，这周末有什么好玩的派对吗？",
    time: "09:01",
  },
  {
    id: 3,
    role: "ai",
    text:
      "🔍 已为你搜索上海本周末 House & Techno 派对：\n\n**周六 6/14**\n• Shelter — After Hours Vol.12\n  House / Techno · 22:00 开始 · 票价 ¥80\n\n• OIL Club — Bass Garden\n  Techno · 23:00 开始 · 票价 ¥120\n\n**周日 6/15**\n• TAG — Sunday Sessions\n  Deep House · 21:00 开始 · 免费入场\n\n你想了解哪个活动的详情，或者需要我帮你规划当晚预算？",
    time: "09:01",
  },
];

export const CHIPS: QuickChipModel[] = [
  { key: "party", label: "查派对", navigate: "eventList" },
  { key: "playlist", label: "生成歌单", send: "生成歌单" },
  { key: "plan", label: "预算规划", send: "预算规划" },
  { key: "budget2k", label: "💰 预算 2000 元", activeDefault: true, send: "预算2000元，帮我规划" },
];

export const BUDGET_RE = /(\d[\d,，]*)\s*(元|块|¥|rmb)/i;
export const BUDGET_KEYWORD_RE = /预算|花费|多少钱|价格|费用|cost|budget/i;

export const AI_REPLIES: Record<string, string> = {
  查派对:
    "🗺️ 请告诉我你的城市和偏好的音乐风格，我来为你精准匹配最近的派对活动！\n\n例如：「北京，喜欢 Drum & Bass，本周五」",
  生成歌单:
    "🎶 好的！请告诉我你的心情或场景，我来为你生成专属歌单：\n\n• 预热暖身 — 舒缓 Deep House\n• 高峰时段 — 推荐 Peak Time Techno\n• 收场降温 — Melodic Techno / Downtempo\n\n想要哪种风格？",
  预算规划:
    "💰 来帮你规划派对预算！\n\n请告诉我你这次出行的**总预算**是多少？\n\n例如：「2000元」或「5000块以内」",
};

export const BUDGET_PLANS = [
  { label: "性价比穷游", price: "¥1,360", dot: "#c8b6ff", priceFg: "#a894e8" },
  { label: "舒适品质出行", price: "¥3,060", dot: "#bde0fe", priceFg: "#5aaee8" },
  { label: "高端 VIP 全包", price: "¥8,800", dot: "#f9a8d4", priceFg: "#e879a9" },
] as const;

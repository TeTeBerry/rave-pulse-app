import type { Accent, PlanCardModel } from "./types";

export const MOCK_PLANS: PlanCardModel[] = [
  {
    id: 1,
    title: "性价比穷游方案",
    tags: [
      { text: "适合学生", color: "purple" },
      { text: "低预算", color: "purple" },
    ],
    festival: "Ultra Shanghai 电音节",
    city: "上海",
    date: "2025年8月15日 — 8月17日",
    costs: [
      { label: "门票", amount: "¥ 580" },
      { label: "交通", amount: "¥ 240" },
      { label: "住宿", amount: "¥ 360" },
      { label: "餐饮", amount: "¥ 180" },
    ],
    total: "¥ 1,360",
    itinerary: [
      { time: "Day 1", desc: "高铁出发，抵达上海，入住青旅，周边探店" },
      { time: "Day 2", desc: "全天电音节主舞台 + 副舞台，夜间 Afterparty" },
      { time: "Day 3", desc: "城市打卡，下午返程" },
    ],
    accent: "purple",
  },
  {
    id: 2,
    title: "舒适品质方案",
    tags: [
      { text: "亲子出行", color: "blue" },
      { text: "中度预算", color: "blue" },
    ],
    festival: "Tomorrowland Asia 亚洲站",
    city: "杭州",
    date: "2025年9月5日 — 9月7日",
    costs: [
      { label: "门票", amount: "¥ 1,200" },
      { label: "交通", amount: "¥ 480" },
      { label: "住宿", amount: "¥ 960" },
      { label: "餐饮", amount: "¥ 420" },
    ],
    total: "¥ 3,060",
    itinerary: [
      { time: "Day 1", desc: "高铁出发，四星酒店入住，周边景区游览" },
      { time: "Day 2", desc: "电音节 VIP 区观演，家庭互动区体验" },
      { time: "Day 3", desc: "西湖早游，午后返程" },
    ],
    accent: "blue",
  },
  {
    id: 3,
    title: "高端 VIP 方案",
    tags: [
      { text: "高端体验", color: "pink" },
      { text: "全包出行", color: "pink" },
    ],
    festival: "EDC China 电音嘉年华",
    city: "北京",
    date: "2025年10月3日 — 10月5日",
    costs: [
      { label: "门票", amount: "¥ 3,800" },
      { label: "交通", amount: "¥ 1,200" },
      { label: "住宿", amount: "¥ 2,800" },
      { label: "餐饮", amount: "¥ 1,000" },
    ],
    total: "¥ 8,800",
    itinerary: [
      { time: "Day 1", desc: "私人接送机，五星酒店入住，专属迎宾礼包" },
      { time: "Day 2", desc: "全天 VIP 专区观演，专属休息室 + 餐饮服务" },
      { time: "Day 3", desc: "私人导览北京名胜，商务舱返程" },
    ],
    accent: "pink",
  },
];

export const ICON_HEX: Record<Accent, string> = {
  purple: "#8b5cf6",
  blue: "#2563eb",
  pink: "#db2777",
};

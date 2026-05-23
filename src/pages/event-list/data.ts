export type GenreSlug = "house" | "techno" | "trance" | "bass";

export const FILTERS = ["全部", "House", "Techno", "Trance", "Bass"] as const;

export type FilterTag = (typeof FILTERS)[number];

export interface EventItem {
  id: number;
  title: string;
  city: string;
  date: string;
  genre: string;
  slug: GenreSlug;
  time: string;
  venue: string;
  ticketLabel: string;
  price: number;
}

export const GLYPH: Record<GenreSlug, string> = {
  house: "◎",
  techno: "▣",
  trance: "✺",
  bass: "〰",
};

export const GENRE_ICON_HEX: Record<GenreSlug, string> = {
  house: "#b09cff",
  techno: "#60a5fa",
  trance: "#fdba74",
  bass: "#4fd1c5",
};

export const GENRE_PRICE_FG: Record<GenreSlug, string> = {
  house: "#9c8cff",
  techno: "#a3d1f5",
  trance: "#e8954a",
  bass: "#41c4b6",
};

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "深夜 House 狂想曲",
    city: "上海",
    date: "2025.08.02",
    genre: "House",
    slug: "house",
    time: "22:00 – 04:00",
    venue: "Shelter · 黄浦区复兴中路",
    ticketLabel: "早鸟票",
    price: 88,
  },
  {
    id: 2,
    title: "TECHNO VOID 工业浪潮",
    city: "北京",
    date: "2025.08.05",
    genre: "Techno",
    slug: "techno",
    time: "23:00 – 06:00",
    venue: "Lantern · 朝阳区工人体育场北路",
    ticketLabel: "标准票",
    price: 120,
  },
  {
    id: 3,
    title: "Trance Journey 出发之夜",
    city: "广州",
    date: "2025.08.09",
    genre: "Trance",
    slug: "trance",
    time: "21:30 – 05:00",
    venue: "Cue · 天河区珠江新城",
    ticketLabel: "早鸟票",
    price: 98,
  },
  {
    id: 4,
    title: "BASSWEIGHT 低频震感",
    city: "成都",
    date: "2025.08.12",
    genre: "Bass",
    slug: "bass",
    time: "22:00 – 05:00",
    venue: "TAG · 武侯区人民南路",
    ticketLabel: "标准票",
    price: 150,
  },
  {
    id: 5,
    title: "Open Format 全场混线",
    city: "上海",
    date: "2025.08.16",
    genre: "House",
    slug: "house",
    time: "22:00 – 04:00",
    venue: "M50 创意园 · 普陀区莫干山路",
    ticketLabel: "早鸟票",
    price: 68,
  },
  {
    id: 6,
    title: "Techno Rave Festival",
    city: "深圳",
    date: "2025.08.20",
    genre: "Techno",
    slug: "techno",
    time: "20:00 – 08:00",
    venue: "B10 当代艺术中心 · 南山区",
    ticketLabel: "VIP 套票",
    price: 398,
  },
  {
    id: 7,
    title: "Psytrance 迷幻星际夜",
    city: "杭州",
    date: "2025.08.23",
    genre: "Trance",
    slug: "trance",
    time: "21:00 – 06:00",
    venue: "MAO Livehouse · 西湖区",
    ticketLabel: "标准票",
    price: 138,
  },
  {
    id: 8,
    title: "Bass Drop 极限低频",
    city: "武汉",
    date: "2025.08.28",
    genre: "Bass",
    slug: "bass",
    time: "22:30 – 05:00",
    venue: "VOX · 武昌区中山路",
    ticketLabel: "早鸟票",
    price: 108,
  },
];

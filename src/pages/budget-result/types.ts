export type Accent = "purple" | "blue" | "pink";

export interface CostItem {
  label: string;
  amount: string;
}

export interface ItineraryStep {
  time: string;
  desc: string;
}

export interface PlanCardModel {
  id: number;
  title: string;
  tags: { text: string; color: Accent }[];
  festival: string;
  city: string;
  date: string;
  costs: CostItem[];
  total: string;
  itinerary: ItineraryStep[];
  accent: Accent;
}

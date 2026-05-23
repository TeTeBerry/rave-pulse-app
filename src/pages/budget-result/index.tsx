import { View } from "@tarojs/components";

import { BudgetCarousel } from "./components/budget-carousel";
import { BudgetHero } from "./components/budget-hero";
import { MOCK_PLANS } from "./data";

import "./index.scss";

export default function BudgetResultPage() {
  return (
    <View className="budget-page">
      <BudgetHero />
      <BudgetCarousel plans={MOCK_PLANS} />
    </View>
  );
}

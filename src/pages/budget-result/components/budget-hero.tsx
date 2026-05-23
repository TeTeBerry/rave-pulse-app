import { ChevronLeft, Star } from "lucide-react";
import { Text, View } from "@tarojs/components";

import { navigateBackOrTo } from "@/utils/navigation";

export function BudgetHero() {
  return (
    <View className="budget-hero">
      <View className="budget-hero__back" onClick={() => navigateBackOrTo("aiChat")}>
        <ChevronLeft size={36} strokeWidth={2} color="#6b7280" />
      </View>

      <View className="budget-hero__badge-wrap">
        <View className="budget-hero__badge">
          <Star size={42} fill="#ffffff" color="#ffffff" strokeWidth={1.5} stroke="#ffffff" />
        </View>
      </View>
      <Text className="budget-hero__title">已为你匹配专属电音节方案</Text>
      <Text className="budget-hero__subtitle">按你的预算与曲风偏好智能推荐</Text>
    </View>
  );
}

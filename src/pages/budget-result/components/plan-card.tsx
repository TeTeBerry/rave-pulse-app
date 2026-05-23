import type { ReactNode } from "react";
import {
  Building2,
  Calendar,
  Car,
  Clock,
  MapPinned,
  Receipt,
  Sparkles,
  Ticket,
  UtensilsCrossed,
} from "lucide-react";
import { Text, View } from "@tarojs/components";

import { ICON_HEX } from "../data";
import type { ItineraryStep, PlanCardModel } from "../types";

function CostRow({ icon, label, amount }: { icon: ReactNode; label: string; amount: string }) {
  return (
    <View className="budget-cost-row">
      <View className="budget-cost-row__left">
        <View className="budget-cost-row__icon">{icon}</View>
        <Text className="budget-cost-row__label">{label}</Text>
      </View>
      <Text className="budget-cost-row__amount">{amount}</Text>
    </View>
  );
}

function ItineraryRow({ step, isLast }: { step: ItineraryStep; isLast: boolean }) {
  return (
    <View className="budget-itinerary__step">
      <View className="budget-itinerary__rail">
        <View className="budget-itinerary__dot" />
        <View className={`budget-itinerary__line ${isLast ? "budget-itinerary__line--hidden" : ""}`} />
      </View>
      <View className="budget-itinerary__main">
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", gap: "4rpx" }}>
          <Text className="budget-itinerary__day">{step.time}</Text>
          <Text className="budget-itinerary__desc">· {step.desc}</Text>
        </View>
      </View>
    </View>
  );
}

export function PlanCardItem({ plan }: { plan: PlanCardModel }) {
  const hx = ICON_HEX[plan.accent];

  const costIcons = [
    <Ticket key="t" size={30} strokeWidth={2} color={hx} />,
    <Car key="c" size={30} strokeWidth={2} color={hx} />,
    <Building2 key="b" size={30} strokeWidth={2} color={hx} />,
    <UtensilsCrossed key="u" size={28} strokeWidth={2} color={hx} />,
  ];

  return (
    <View className={`budget-card budget-card--${plan.accent}`}>
      <View className="budget-card__glow" />
      <View className="budget-card__body">
        <View className="budget-card__title-row">
          <Text className="budget-card__title">{plan.title}</Text>
          <View className="budget-tags">
            {plan.tags.map((t) => (
              <View key={t.text} className="budget-tag">
                <Text className="budget-tag__text">{t.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="budget-meta">
          <View className="budget-meta__row">
            <View className="budget-meta__icon">
              <Sparkles size={28} strokeWidth={2} color={hx} />
            </View>
            <Text className="budget-meta__text--strong">{plan.festival}</Text>
          </View>
          <View className="budget-meta__row">
            <View className="budget-meta__icon">
              <MapPinned size={28} strokeWidth={2} color="#9ca3af" />
            </View>
            <Text className="budget-meta__text">{plan.city}</Text>
          </View>
          <View className="budget-meta__row">
            <View className="budget-meta__icon">
              <Calendar size={28} strokeWidth={2} color="#9ca3af" />
            </View>
            <Text className="budget-meta__text">{plan.date}</Text>
          </View>
        </View>

        <View className="budget-hr" />

        <View className="budget-section-label">
          <Receipt size={26} strokeWidth={2} color="#9ca3af" />
          <Text className="budget-section-label__text">费用明细</Text>
        </View>

        {plan.costs.map((c, i) => (
          <CostRow key={c.label} icon={costIcons[i]} label={c.label} amount={c.amount} />
        ))}

        <View className="budget-total">
          <View className="budget-total__left">
            <Receipt size={30} strokeWidth={2} color={hx} />
            <Text className="budget-total__caption">合计总价</Text>
          </View>
          <Text className="budget-total__price">{plan.total}</Text>
        </View>

        <View className="budget-hr" />

        <View className="budget-section-label">
          <Clock size={26} strokeWidth={2} color="#9ca3af" />
          <Text className="budget-section-label__text">行程概览</Text>
        </View>

        <View className="budget-itinerary">
          {plan.itinerary.map((step, idx) => (
            <ItineraryRow key={step.time} step={step} isLast={idx === plan.itinerary.length - 1} />
          ))}
        </View>
      </View>
    </View>
  );
}

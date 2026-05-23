import { useRef, useState } from "react";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import type { PlanCardModel } from "../types";

import { ICON_HEX } from "../data";

import { PlanCardItem } from "./plan-card";

/** Taro TouchEvent 与 typings 不一致，统一取首个触点 X */
function getTouchClientX(e: unknown): number {
  const ev = e as { touches?: Array<{ clientX: number }> };
  return ev.touches?.[0]?.clientX ?? 0;
}

interface BudgetCarouselProps {
  plans: PlanCardModel[];
}

export function BudgetCarousel({ plans }: BudgetCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartX = useRef(0);
  const dragDX = useRef(0);
  const dragThreshold = 50;
  const total = plans.length;

  const goTo = (index: number) => {
    if (isTransitioning) return;
    const next = Math.max(0, Math.min(total - 1, index));
    if (next === current) return;
    setIsTransitioning(true);
    setCurrent(next);
    setTimeout(() => setIsTransitioning(false), 380);
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  const currentPlan = plans[current];
  const hx = ICON_HEX[currentPlan.accent];

  const handleBookmark = () => {
    void Taro.showToast({ title: "方案已收藏 ✨", icon: "none" });
  };
  const handleViewFull = () => {
    void Taro.showToast({ title: "正在加载完整行程 🎵", icon: "none" });
  };

  return (
    <>
      <View className={`budget-carousel budget-carousel--accent-${currentPlan.accent}`}>
        <View className="budget-carousel__nav-row">
          <Text className="budget-carousel__nav-muted">
            方案 {current + 1} / {total}
          </Text>
          <Text className="budget-carousel__nav-accent">{currentPlan.title}</Text>
        </View>

        <View
          className="budget-carousel__viewport"
          onTouchStart={(e) => {
            touchStartX.current = getTouchClientX(e);
            dragDX.current = 0;
          }}
          onTouchMove={(e) => {
            dragDX.current = getTouchClientX(e) - touchStartX.current;
          }}
          onTouchEnd={() => {
            if (dragDX.current < -dragThreshold) goNext();
            else if (dragDX.current > dragThreshold) goPrev();
            dragDX.current = 0;
          }}
          onTouchCancel={() => {
            dragDX.current = 0;
          }}
        >
          <View
            className="budget-carousel__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {plans.map((plan) => (
              <View key={plan.id} className="budget-carousel__slide">
                <PlanCardItem plan={plan} />
              </View>
            ))}
          </View>

          <View
            className={`budget-carousel__arrow budget-carousel__arrow--prev ${current === 0 ? "budget-carousel__arrow--disabled" : ""}`}
            onClick={goPrev}
          >
            <ChevronLeft size={34} strokeWidth={2} color={hx} />
          </View>
          <View
            className={`budget-carousel__arrow budget-carousel__arrow--next ${
              current === total - 1 ? "budget-carousel__arrow--disabled" : ""
            }`}
            onClick={goNext}
          >
            <ChevronRight size={34} strokeWidth={2} color={hx} />
          </View>
        </View>

        <View className="budget-carousel__dots">
          {plans.map((plan, idx) => (
            <View
              key={plan.id}
              className={`budget-carousel__dot ${idx === current ? "budget-carousel__dot--on" : "budget-carousel__dot--off"}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </View>
      </View>

      <View className="budget-footer">
        <View className="budget-footer__row">
          <View className="budget-footer__bookmark" onClick={handleBookmark}>
            <Bookmark size={30} strokeWidth={2} color="#374151" />
            <Text className="budget-footer__bookmark-text">收藏方案</Text>
          </View>
          <View className="budget-footer__cta" onClick={handleViewFull}>
            <Heart size={30} strokeWidth={2} color="#ffffff" fill="rgba(255,255,255,0.18)" />
            <Text className="budget-footer__cta-text">查看完整行程</Text>
          </View>
        </View>
      </View>
    </>
  );
}

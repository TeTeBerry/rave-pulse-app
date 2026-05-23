import { useState } from "react";
import { ScrollView, Text, View } from "@tarojs/components";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import Taro from "@tarojs/taro";

import { navigateBackOrTo } from "@/utils/navigation";

import { EventCard } from "./components/event-card";
import type { FilterTag } from "./data";
import { FILTERS, MOCK_EVENTS } from "./data";

import "./index.scss";

export default function EventListPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("全部");

  const filtered =
    activeFilter === "全部" ? MOCK_EVENTS : MOCK_EVENTS.filter((e) => e.genre === activeFilter);

  return (
    <View className="ev-page">
      <View className="ev-header-bar">
        <View className="ev-nav">
          <View className="ev-nav__btn" onClick={() => navigateBackOrTo("welcome")}>
            <ChevronLeft size={38} strokeWidth={2} color="#374151" />
          </View>
          <Text className="ev-nav__title">同城电音活动</Text>
          <View
            className="ev-nav__btn"
            onClick={() => void Taro.showToast({ title: "筛选即将到来", icon: "none" })}
          >
            <SlidersHorizontal size={30} strokeWidth={2} color="#374151" />
          </View>
        </View>

        <ScrollView scrollX enhanced showScrollbar={false} className="ev-filter-scroll">
          <View className="ev-filter-inner">
            {FILTERS.map((tag) => {
              const active = activeFilter === tag;
              return (
                <View
                  key={tag}
                  className={`ev-chip ${active ? "ev-chip--active" : "ev-chip--inactive"}`}
                  onClick={() => setActiveFilter(tag)}
                >
                  <Text className="ev-chip__text">{tag}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <ScrollView scrollY enhanced showScrollbar={false} className="ev-list-scroll">
        <View className="ev-list-inner">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

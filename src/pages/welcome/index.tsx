import { MapPin, Music, Wallet } from "lucide-react";
import { Text, View } from "@tarojs/components";

import { navigateTo } from "@/utils/navigation";

import { FeatureCard, WaveBackground } from "./components/welcome-widgets";

import "./index.scss";

const isH5 = process.env.TARO_ENV === "h5";

export default function WelcomePage() {
  const titleClass = isH5 ? "welcome-page__title--gradient" : "welcome-page__title--flat";

  return (
    <View data-cmp="WelcomePage" className="welcome-page">
      <View className="welcome-page__top-spacer" />

      <View className="welcome-page__header">
        <Text className={`welcome-page__title ${titleClass}`}>RavePulse</Text>
        <Text className="welcome-page__subtitle">预算选电音节 · AI 智能规划行程</Text>
      </View>

      <View className="welcome-page__divider" />

      <View className="welcome-page__wave-wrap">
        <WaveBackground />
      </View>

      <View className="welcome-cards">
        <FeatureCard
          icon={<Music size={22} color="#C8B6FF" strokeWidth={1.5} />}
          line1="曲风科普"
          line2="智能歌单"
          onClick={() => navigateTo("playlistDetail")}
        />
        <FeatureCard
          icon={<MapPin size={22} color="#A8CBFF" strokeWidth={1.5} />}
          line1="同城派对"
          line2="活动查询"
          onClick={() => navigateTo("eventList")}
        />
        <FeatureCard icon={<Wallet size={22} color="#BDE0FE" strokeWidth={1.5} />} line1="预算匹配" line2="行程规划" />
      </View>

      <View className="welcome-info">
        <View className="welcome-chip">
          <Text className="welcome-chip__strong">AI POWERED</Text>
          <View className="welcome-chip__sep" />
          <Text className="welcome-chip__muted">智能匹配 · 精准推荐</Text>
        </View>
        <Text className="welcome-copy">{`告诉我你的预算和音乐偏好，\n我来帮你找到最适合的电音节体验`}</Text>
      </View>

      <View className="welcome-page__growth" />

      <View className="welcome-dots">
        <View className="welcome-dots__dot welcome-dots__dot--left" />
        <View className="welcome-dots__pill" />
        <View className="welcome-dots__dot welcome-dots__dot--right" />
      </View>

      <View className="welcome-footer">
        <View data-cmp="WelcomeCta" className="welcome-cta rp-btn-shimmer" onClick={() => navigateTo("aiChat")}>
          <Text className="welcome-cta__label">开始 AI 对话</Text>
        </View>
      </View>
    </View>
  );
}

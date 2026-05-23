import type { ReactNode } from "react";
import { Text, View } from "@tarojs/components";

export function WaveBackground() {
  return (
    <View data-cmp="WaveBackground" className="welcome-wave-root">
      <svg
        viewBox="0 0 390 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="welcome-wave-root__svg welcome-wave-root__svg--layers1 wave-anim-1"
        preserveAspectRatio="none"
        style={{ opacity: 0.18 }}
      >
        <path
          d="M0 60 C40 30, 80 90, 130 60 C180 30, 220 90, 270 60 C320 30, 360 75, 390 60 L390 120 L0 120 Z"
          fill="url(#waveGrad1)"
        />
        <defs>
          <linearGradient id="waveGrad1" x1="0" y1="0" x2="390" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8B6FF" />
            <stop offset="100%" stopColor="#BDE0FE" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 390 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="welcome-wave-root__svg welcome-wave-root__svg--layers2 wave-anim-2"
        preserveAspectRatio="none"
        style={{ opacity: 0.12 }}
      >
        <path
          d="M0 75 C50 45, 100 95, 160 65 C220 35, 265 85, 320 55 C350 38, 375 72, 390 55 L390 120 L0 120 Z"
          fill="url(#waveGrad2)"
        />
        <defs>
          <linearGradient id="waveGrad2" x1="0" y1="0" x2="390" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BDE0FE" />
            <stop offset="100%" stopColor="#C8B6FF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 390 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="welcome-wave-root__svg welcome-wave-root__svg--layers3 wave-anim-3"
        preserveAspectRatio="xMidYMid meet"
        style={{ opacity: 0.1 }}
      >
        {[8, 22, 36, 50, 64, 78, 92, 106, 120, 134, 148, 162, 176, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316, 330, 344, 358, 372].map((x, i) => {
          const heights = [18, 32, 24, 40, 28, 36, 20, 44, 30, 38, 22, 42, 26, 46, 32, 36, 24, 40, 20, 34, 28, 44, 22, 38, 30, 26, 18];
          const h = heights[i] ?? 24;
          return <rect key={x} x={x} y={(80 - h) / 2} width="6" height={h} rx="3" fill="url(#barGrad)" />;
        })}
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8B6FF" />
            <stop offset="100%" stopColor="#BDE0FE" />
          </linearGradient>
        </defs>
      </svg>
    </View>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  line1: string;
  line2: string;
  onClick?: () => void;
}

export function FeatureCard({ icon = null, line1 = "", line2 = "", onClick }: FeatureCardProps) {
  return (
    <View
      data-cmp="FeatureCard"
      className="welcome-feature rp-feature-card shadow-custom rp-card-shadow"
      onClick={onClick}
    >
      <View className="welcome-feature__icon-ring">{icon}</View>
      <View className="welcome-feature__text-block">
        <Text className="welcome-feature__line1">{line1}</Text>
        <Text className="welcome-feature__line2">{line2}</Text>
      </View>
    </View>
  );
}

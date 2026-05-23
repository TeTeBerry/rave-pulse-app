import { Music, Play } from "lucide-react";
import { Text, View } from "@tarojs/components";

import type { TrackItem } from "../data";
import { WAVE_HEIGHTS_RPX, WAV_ANIM_CLASS } from "../data";

function CoverWaves() {
  return (
    <View className="pl-waves">
      {WAVE_HEIGHTS_RPX.map((h, i) => (
        <View
          key={i}
          className={`pl-wave-bar ${WAV_ANIM_CLASS[i % 3]}`}
          style={{ height: `${h * 2}rpx` }}
        />
      ))}
    </View>
  );
}

export function PlaylistHeroCover() {
  return (
    <View className="pl-cover-wrap">
      <View className="pl-cover-ring pl-cover-ring--outer" />
      <View className="pl-cover-ring pl-cover-ring--inner" />
      <View className="pl-cover-glow">
        <Music strokeWidth={1.85} size={112} className="pl-cover-icon" />
      </View>
      <CoverWaves />
    </View>
  );
}

export function GenrePill({ label, variant }: { label: string; variant: "primary" | "muted" | "bpm" | "meta" }) {
  return (
    <View className={`pl-pill pl-pill--${variant}`}>
      <Text className="pl-pill__text">{label}</Text>
    </View>
  );
}

export function TrackRow({
  track,
  active,
  onPlay,
}: {
  track: TrackItem;
  active: boolean;
  onPlay?: () => void;
}) {
  return (
    <View className={`pl-track ${active ? "pl-track--active" : ""}`} onClick={onPlay}>
      <Text className="pl-track__index">{String(track.id).padStart(2, "0")}</Text>
      <View className="pl-track__body">
        <Text className="pl-track__name" numberOfLines={1}>
          {track.title}
        </Text>
        <Text className="pl-track__sub" numberOfLines={1}>
          {track.artist} · {track.genre}
        </Text>
      </View>
      <View className="pl-track__right">
        <Text className="pl-track__time">{track.duration}</Text>
        <View className="pl-track__play">
          <Play className="pl-track__play-icon" size={26} strokeWidth={2} fill={active ? "#fff" : "none"} />
        </View>
      </View>
    </View>
  );
}

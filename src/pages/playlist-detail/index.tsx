import { useState } from "react";
import { ScrollView, Text, View } from "@tarojs/components";
import { ChevronLeft, Heart, Music, Pause, Play, Share2, SkipBack, SkipForward } from "lucide-react";
import Taro from "@tarojs/taro";

import { navigateBackOrTo } from "@/utils/navigation";

import { GenrePill, PlaylistHeroCover, TrackRow } from "./components/playlist-parts";
import { MOCK_TRACKS, PLAYLIST_META } from "./data";

import "./index.scss";

export default function PlaylistDetailPage() {
  const [activeTrack, setActiveTrack] = useState(1);
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const current = MOCK_TRACKS.find((t) => t.id === activeTrack) ?? MOCK_TRACKS[0];

  const prevTrack = () => setActiveTrack((v) => (v <= 1 ? MOCK_TRACKS.length : v - 1));
  const nextTrack = () => setActiveTrack((v) => (v >= MOCK_TRACKS.length ? 1 : v + 1));

  const onShare = () => void Taro.showToast({ title: "分享功能即将上线", icon: "none" });

  return (
    <View className="pl-page">
      <View className="pl-nav">
        <View className="pl-nav__btn" onClick={() => navigateBackOrTo("welcome")}>
          <ChevronLeft strokeWidth={2} size={38} color="#374151" />
        </View>
        <Text className="pl-nav__title">AI 定制电音歌单</Text>
        <View className="pl-nav__actions">
          <View className="pl-nav__btn" onClick={() => setLiked((v) => !v)}>
            <Heart strokeWidth={2} size={30} fill={liked ? "#a855f7" : "none"} color={liked ? "#9333ea" : "#9ca3af"} />
          </View>
          <View className="pl-nav__btn" onClick={onShare}>
            <Share2 strokeWidth={2} size={29} color="#6b7280" />
          </View>
        </View>
      </View>

      <ScrollView scrollY enhanced showScrollbar={false} className="pl-scroll">
        <View className="pl-scroll-inner">
          <View className="pl-hero">
            <PlaylistHeroCover />

            <View className="pl-hero-text">
              <Text className="pl-hero-title">{PLAYLIST_META.name}</Text>

              <View className="pl-tag-rows">
                <View className="pl-tag-row">
                  <GenrePill label={PLAYLIST_META.genre} variant="primary" />
                  {PLAYLIST_META.subGenres.map((g) => (
                    <GenrePill key={g} label={g} variant="muted" />
                  ))}
                </View>
                <View className="pl-tag-row">
                  <GenrePill
                    label={`${PLAYLIST_META.bpmMin}–${PLAYLIST_META.bpmMax} BPM`}
                    variant="bpm"
                  />
                  <GenrePill label={`${MOCK_TRACKS.length} 首曲目`} variant="meta" />
                </View>
              </View>

              <Text className="pl-meta-line">{`适合场景 · ${PLAYLIST_META.scene}`}</Text>
              <Text className="pl-desc">{PLAYLIST_META.desc}</Text>
            </View>
          </View>

          <View className="pl-sheet">
            <View className="pl-sheet-head">
              <Text className="pl-sheet-head__title">全部曲目</Text>
              <Text className="pl-sheet-head__badge">AI 精选</Text>
            </View>

            {MOCK_TRACKS.map((track, index) => (
              <View key={track.id}>
                <TrackRow
                  track={track}
                  active={activeTrack === track.id}
                  onPlay={() => setActiveTrack(track.id)}
                />
                {index < MOCK_TRACKS.length - 1 ? <View className="pl-track-split" /> : null}
              </View>
            ))}

            <View className="pl-sheet-foot">
              <View className="pl-sheet-foot__line pl-sheet-foot__line--left" />
              <Text className="pl-sheet-foot__hint">由 RavePulse AI 根据你的偏好智能生成</Text>
              <View className="pl-sheet-foot__line pl-sheet-foot__line--right" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="pl-player">
        <View className="pl-player__left">
          <View className={`pl-mini-cover ${playing ? "spin-mini-cover" : ""}`}>
            <Music strokeWidth={1.35} size={44} className="pl-mini-cover__music" />
          </View>
          <View className="pl-player-info">
            <Text className="pl-player-info__title" numberOfLines={1}>
              {current.title}
            </Text>
            <Text className="pl-player-info__artist" numberOfLines={1}>
              {current.artist}
            </Text>
          </View>
        </View>
        <View className="pl-player-ctrl">
          <View className="pl-player-ctrl__icon" onClick={prevTrack}>
            <SkipBack size={42} strokeWidth={1.75} color="#c8b6ff" />
          </View>
          <View className="pl-player-ctrl__play" onClick={() => setPlaying((v) => !v)}>
            {playing ? (
              <Pause size={38} strokeWidth={2} fill="none" color="#f5f3ff" />
            ) : (
              <Play size={46} strokeWidth={2} fill="none" color="#f5f3ff" className="pl-player-ctrl__play-icon" />
            )}
          </View>
          <View className="pl-player-ctrl__icon" onClick={nextTrack}>
            <SkipForward size={42} strokeWidth={1.75} color="#c8b6ff" />
          </View>
        </View>
      </View>
    </View>
  );
}

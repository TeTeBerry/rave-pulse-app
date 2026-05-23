import { Clock, MapPinned, Music, Ticket } from "lucide-react";
import { Text, View } from "@tarojs/components";

import type { EventItem, GenreSlug } from "../data";
import { GENRE_ICON_HEX, GENRE_PRICE_FG, GLYPH } from "../data";

function EventCoverArt({ slug }: { slug: GenreSlug }) {
  return (
    <View className="event-cover">
      <Text className="event-cover__glyph">{GLYPH[slug]}</Text>
      <View className="event-cover__dot" />
    </View>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const iconColor = GENRE_ICON_HEX[event.slug];

  return (
    <View className={`event-card event-card--${event.slug}`}>
      <EventCoverArt slug={event.slug} />
      <View className="event-body">
        <Text className="event-body__title" numberOfLines={2}>
          {event.title}
        </Text>
        <Text className="event-body__meta">
          {event.city} · {event.date}
        </Text>
        <View className="event-genre">
          <View className="event-genre__pill">
            <Music size={22} strokeWidth={2} color={iconColor} />
            <Text className="event-genre__text">{event.genre}</Text>
          </View>
        </View>

        <View className="event-hr" />

        <View className="event-extra">
          <View className="event-extra__row">
            <View className="event-extra__icon-box">
              <Clock size={24} strokeWidth={2} color="#9ca3af" />
            </View>
            <Text className="event-extra__text">{event.time}</Text>
          </View>
          <View className="event-extra__row">
            <View className="event-extra__icon-box">
              <MapPinned size={24} strokeWidth={2} color="#9ca3af" />
            </View>
            <Text className="event-extra__text" numberOfLines={2}>
              {event.venue}
            </Text>
          </View>
        </View>

        <View className="event-hr" />

        <View className="event-pricing">
          <View className="event-pricing__left">
            <View className="event-pricing__icon-wrap">
              <Ticket size={26} strokeWidth={2} color={GENRE_PRICE_FG[event.slug]} />
            </View>
            <View className="event-pricing__pill">
              <Text className="event-pricing__pill-text">{event.ticketLabel}</Text>
            </View>
          </View>
          <Text className="event-pricing__price">¥{event.price}</Text>
        </View>
      </View>
    </View>
  );
}

export interface PlaylistMeta {
  name: string;
  genre: string;
  subGenres: string[];
  bpmMin: number;
  bpmMax: number;
  scene: string;
  desc: string;
}

export interface TrackItem {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
}

export const PLAYLIST_META: PlaylistMeta = {
  name: `深夜电波 · 沉浸之旅`,
  genre: `Melodic Techno`,
  subGenres: [`Deep House`, `Progressive`],
  bpmMin: 128,
  bpmMax: 138,
  scene: `夜场派对 · 独自沉浸 · 灯光秀配乐`,
  desc: `精选深夜氛围向电子乐，层层递进的旋律线条与律动感十足的 Kick 鼓点相互交织，带你进入一段沉浸式的声音旅程。`,
};

export const MOCK_TRACKS: TrackItem[] = [
  { id: 1, title: `Resonance Field`, artist: `Anyma`, genre: `Melodic Techno`, duration: `6:24` },
  { id: 2, title: `Eternity`, artist: `Tale Of Us`, genre: `Melodic Techno`, duration: `7:12` },
  { id: 3, title: `Solaris`, artist: `Massano`, genre: `Progressive House`, duration: `5:48` },
  { id: 4, title: `Drift Away`, artist: `Innellea`, genre: `Organic House`, duration: `6:03` },
  { id: 5, title: `Glass Horizon`, artist: `WhoMadeWho`, genre: `Melodic House`, duration: `5:31` },
  { id: 6, title: `Oblivion`, artist: `Stephan Bodzin`, genre: `Techno`, duration: `8:17` },
  { id: 7, title: `Cascades`, artist: `Recondite`, genre: `Deep Techno`, duration: `6:55` },
  { id: 8, title: `Silver Screen`, artist: `Moderat`, genre: `Electronic`, duration: `5:19` },
  { id: 9, title: `Northern Lights`, artist: `Hraach`, genre: `Atmospheric`, duration: `7:04` },
  { id: 10, title: `Velvet Underground`, artist: `Solomun`, genre: `Deep House`, duration: `6:38` },
  { id: 11, title: `Parallax`, artist: `ARTBAT`, genre: `Progressive Techno`, duration: `7:22` },
  { id: 12, title: `Morphism`, artist: `Camelphat`, genre: `Tech House`, duration: `5:57` },
];

export const WAVE_HEIGHTS_RPX = [
  10, 20, 32, 24, 40, 30, 44, 36, 26, 42, 18, 38, 28, 46, 22, 34, 48, 30, 24, 40, 16,
];

export const WAV_ANIM_CLASS = [`cover-bar-anim-1`, `cover-bar-anim-2`, `cover-bar-anim-3`];

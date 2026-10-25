export type SourceId = "x" | "youtube" | "instagram" | "web";

export type FolderId = "design" | "recipes" | "threads" | "watch";

export type SavedCard = {
  id: string;
  folderId: FolderId;
  source: SourceId;
  title: string;
  folder: string;
  tags: string[];
  time: string;
  badge?: "duplicate" | "pinned";
};

export type Folder = {
  id: FolderId;
  label: string;
  count: number;
  emoji: string;
  idleClass: string;
};

export const sources: Record<SourceId, { label: string; chipClass: string }> = {
  x: { label: "𝕏 · x.com", chipClass: "bg-sand text-sand-ink" },
  youtube: { label: "▶ · YouTube", chipClass: "bg-peach text-peach-ink" },
  instagram: { label: "📸 · Instagram", chipClass: "bg-lavender text-lavender-ink" },
  web: { label: "🌐 · Web", chipClass: "bg-sky text-sky-ink" },
};

export const folders: Folder[] = [
  {
    id: "design",
    label: "Design Inspo",
    count: 18,
    emoji: "📌",
    idleClass: "bg-sand text-sand-ink",
  },
  {
    id: "recipes",
    label: "Recipes",
    count: 12,
    emoji: "🍳",
    idleClass: "bg-sage text-sage-ink",
  },
  {
    id: "threads",
    label: "X Threads",
    count: 29,
    emoji: "🧵",
    idleClass: "bg-sky text-sky-ink",
  },
  {
    id: "watch",
    label: "Watch Later",
    count: 9,
    emoji: "🎬",
    idleClass: "bg-peach text-peach-ink",
  },
];

export const savedCards: SavedCard[] = [
  {
    id: "editorial-clutter",
    folderId: "design",
    source: "x",
    title: "How warm editorial interfaces calm digital clutter",
    folder: "Design Inspo",
    tags: ["ui", "typography"],
    time: "2m ago",
    badge: "duplicate",
  },
  {
    id: "sqlite-kotlin",
    folderId: "design",
    source: "youtube",
    title: "Building Local-First Android Apps with SQLite & Kotlin",
    folder: "Design Inspo",
    tags: ["android", "dev"],
    time: "1h ago",
    badge: "pinned",
  },
  {
    id: "miso-noodles",
    folderId: "recipes",
    source: "instagram",
    title: "Brown butter miso noodles for slow Sundays",
    folder: "Recipes",
    tags: ["noodles", "weeknight"],
    time: "Yesterday",
    badge: "pinned",
  },
  {
    id: "sourdough",
    folderId: "recipes",
    source: "web",
    title: "A calmer sourdough — ratios, folds, and when to wait",
    folder: "Recipes",
    tags: ["baking", "sourdough"],
    time: "3d ago",
    badge: "duplicate",
  },
  {
    id: "local-first-thread",
    folderId: "threads",
    source: "x",
    title: "Local-first is a product decision, not a database",
    folder: "X Threads",
    tags: ["localfirst", "android"],
    time: "12m ago",
    badge: "duplicate",
  },
  {
    id: "stopped-saving",
    folderId: "threads",
    source: "x",
    title: "I stopped saving posts into chat apps. A thread.",
    folder: "X Threads",
    tags: ["threads", "reading"],
    time: "2d ago",
    badge: "pinned",
  },
  {
    id: "fts5",
    folderId: "watch",
    source: "youtube",
    title: "SQLite FTS5: search that still works on a plane",
    folder: "Watch Later",
    tags: ["sqlite", "search"],
    time: "4h ago",
    badge: "pinned",
  },
  {
    id: "editorial-ui",
    folderId: "watch",
    source: "web",
    title: "Editorial UI, studied slowly",
    folder: "Watch Later",
    tags: ["design", "ui"],
    time: "Last week",
    badge: "duplicate",
  },
];

export function cardsForFolder(folderId: FolderId) {
  return savedCards.filter((card) => card.folderId === folderId);
}

export function folderById(folderId: FolderId) {
  const folder = folders.find((item) => item.id === folderId);
  if (!folder) {
    throw new Error(`Unknown folder: ${folderId}`);
  }
  return folder;
}

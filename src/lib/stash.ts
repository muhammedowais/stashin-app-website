export type TabId = "all" | "notes" | "links" | "tasks";

export type PreviewKind = Exclude<TabId, "all">;

export type PreviewItem = {
  id: string;
  kind: PreviewKind;
  title: string;
};

export const previewTabs: { id: TabId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "notes", label: "Notes" },
  { id: "links", label: "Links" },
  { id: "tasks", label: "Tasks" },
];

export const previewItems: PreviewItem[] = [
  { id: "next-app", kind: "notes", title: "Ideas for my next app" },
  { id: "design", kind: "links", title: "Design inspiration" },
  { id: "workout", kind: "tasks", title: "Workout plan" },
];

export function itemsForTab(tab: TabId) {
  if (tab === "all") return previewItems;
  return previewItems.filter((item) => item.kind === tab);
}

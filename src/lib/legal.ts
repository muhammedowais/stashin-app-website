export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "subhead"; text: string }
  | { type: "callout"; title: string; text: string; tone: "peach" | "sage" | "sand" | "lavender" | "sky" };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export function legalPlainText(sections: LegalSection[]) {
  return sections
    .map((section) => {
      const parts = [section.heading];
      for (const block of section.blocks) {
        if (block.type === "p" || block.type === "subhead") {
          parts.push(block.text);
        } else if (block.type === "ul") {
          parts.push(block.items.join("\n"));
        } else {
          parts.push(block.title, block.text);
        }
      }
      return parts.join("\n");
    })
    .join("\n\n");
}

const linkPattern = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

export type RichPart =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export function parseRichText(text: string): RichPart[] {
  const parts: RichPart[] = [];
  let last = 0;
  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > last) {
      parts.push({ type: "text", value: text.slice(last, index) });
    }
    const label = match[1];
    const href = match[2];
    if (label && href) {
      parts.push({ type: "link", label, href });
    }
    last = index + match[0].length;
  }
  if (last < text.length) {
    parts.push({ type: "text", value: text.slice(last) });
  }
  return parts;
}

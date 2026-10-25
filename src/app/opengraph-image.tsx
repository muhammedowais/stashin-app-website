import { ImageResponse } from "next/og";

export const alt = "Stashin — A quiet, private place for everything you save.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF6F0",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="10" fill="#1E1B18" />
            <path fill="#FAF6F0" d="M16 11h16c1.2 0 2 1 2 2.2V37l-10-6-10 6V13.2c0-1.2.8-2.2 2-2.2z" />
          </svg>
          <div style={{ fontSize: 42, color: "#1E1B18", fontFamily: "Georgia, serif" }}>Stashin</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              color: "#1E1B18",
              fontFamily: "Georgia, serif",
              letterSpacing: "-1px",
            }}
          >
            A quiet, private place for
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              color: "#C86D51",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            everything you save.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5C544B" }}>
          100% on-device · Zero tracking · No account · stashin.app
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const alt = "Horti Guru: season-long crop advice for ginger, turmeric, arecanut, banana and pepper growers in Karnataka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// One share image for every page: wordmark, the promise, and the season bar.
export default function OpengraphImage() {
  const segments = [2, 1, 2, 4, 3];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#FBFAF8", color: "#121A26" }}>
        <div style={{ display: "flex", fontSize: 44 }}>
          <span>Horti</span>
          <span style={{ fontWeight: 700 }}>Guru</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 960 }}>
            Season-long crop advice for ginger, turmeric, arecanut, banana and pepper growers
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 48 }}>
            {segments.map((m, i) => (
              <div key={i} style={{ flexGrow: m, flexBasis: 0, height: 18, borderRadius: 3, background: i === 3 ? "#D98E04" : "#1C3557" }} />
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#5A6472" }}>WhatsApp advisory from ₹10,000 per acre. Karnataka.</div>
        </div>
      </div>
    ),
    size,
  );
}

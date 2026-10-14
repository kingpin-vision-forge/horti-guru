import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/** The logo referenced by Organization structured data. */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBFAF8", color: "#121A26", fontSize: 96 }}>
        <span>Horti</span>
        <span style={{ fontWeight: 700 }}>Guru</span>
      </div>
    ),
    { width: 600, height: 600 },
  );
}

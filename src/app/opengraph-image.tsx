import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#100f0c",
        color: "#f3f1ea",
      }}
    >
      <div
        style={{
          fontSize: 20,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#9b95f7",
          fontFamily: "monospace",
        }}
      >
        Double-entry bookkeeping, built for Sri Lanka
      </div>
      <div style={{ display: "flex", fontSize: 108, fontWeight: 700, marginTop: 24 }}>
        <span>Ledgerly</span>
        <span style={{ color: "#9b95f7" }}>.</span>
        <span>lk</span>
      </div>
      <div style={{ fontSize: 28, color: "#b6b0a0", marginTop: 24, maxWidth: 820 }}>
        A general ledger with documents that post into it — not an invoicing app with reports bolted
        on.
      </div>
    </div>,
    { ...size },
  );
}

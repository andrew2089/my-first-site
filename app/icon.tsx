import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4F46E5",
          borderRadius: 8,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8 19L14 11L18 15L24 7"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="21" cy="20" r="2.5" fill="white" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

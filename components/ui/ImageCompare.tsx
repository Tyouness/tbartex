"use client";

import { useCallback, useRef, useState } from "react";

interface Props {
  srcBefore: string;
  srcAfter: string;
  labelBefore?: string;
  labelAfter?: string;
  height?: number;
}

export default function ImageCompare({
  srcBefore,
  srcAfter,
  labelBefore,
  labelAfter,
  height = 460,
}: Props) {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const applyPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPct(Math.min(97, Math.max(3, ((clientX - left) / width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        touchAction: "none",
      }}
      onMouseDown={(e) => {
        dragging.current = true;
        applyPos(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) applyPos(e.clientX);
      }}
      onMouseUp={() => {
        dragging.current = false;
      }}
      onMouseLeave={() => {
        dragging.current = false;
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        applyPos(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        e.preventDefault();
        applyPos(e.touches[0].clientX);
      }}
    >
      {/* Right panel: After image (base layer, always fully visible) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={srcAfter}
        alt={labelAfter ?? "Image après"}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Left panel: Before image clipped to the left of the slider */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - pct}% 0 0)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={srcBefore}
          alt={labelBefore ?? "Image avant"}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Divider line + handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pct}%`,
          transform: "translateX(-50%)",
          width: 2,
          background: "rgba(255,255,255,0.48)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.64)",
          }}
        >
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
            <path
              d="M7 6H0M15 6H22M6 2L0 6L6 10M16 2L22 6L16 10"
              stroke="#0c0c0f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Label before */}
      {labelBefore && (
        <span
          style={{
            position: "absolute",
            left: 14,
            bottom: 14,
            zIndex: 2,
            pointerEvents: "none",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f2f2f6",
            background: "rgba(5,5,7,0.68)",
            border: "1px solid #3b3b44",
            padding: "7px 11px",
          }}
        >
          {labelBefore}
        </span>
      )}

      {/* Label after */}
      {labelAfter && (
        <span
          style={{
            position: "absolute",
            right: 14,
            bottom: 14,
            zIndex: 2,
            pointerEvents: "none",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f2f2f6",
            background: "rgba(5,5,7,0.68)",
            border: "1px solid #3b3b44",
            padding: "7px 11px",
          }}
        >
          {labelAfter}
        </span>
      )}
    </div>
  );
}

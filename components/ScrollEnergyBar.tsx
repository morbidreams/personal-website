"use client";

import { useEffect, useRef, useState } from "react";

const HUE_STOPS = [
  { frac: 1.0, hue: 120 }, // green
  { frac: 0.66, hue: 66 }, // yellow-green
  { frac: 0.33, hue: 39.5 }, // orange
  { frac: 0.0, hue: 20 }, // red
];

function hueForFraction(frac: number) {
  const clamped = Math.min(1, Math.max(0, frac));

  for (let i = 0; i < HUE_STOPS.length - 1; i++) {
    const a = HUE_STOPS[i];
    const b = HUE_STOPS[i + 1];

    if (clamped <= a.frac && clamped >= b.frac) {
      const span = a.frac - b.frac;
      const t = (a.frac - clamped) / span;

      return a.hue + (b.hue - a.hue) * t;
    }
  }

  return HUE_STOPS[HUE_STOPS.length - 1].hue;
}

export function ScrollEnergyBar() {
  const [remaining, setRemaining] = useState(1);
  const ticking = useRef(false);

  useEffect(() => {
    const updateFromScroll = () => {
      const doc = document.documentElement;

      const scrollTop = doc.scrollTop || document.body.scrollTop;

      const scrollHeight = doc.scrollHeight - doc.clientHeight;

      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      setRemaining(1 - Math.min(1, Math.max(0, progress)));

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateFromScroll);
      }
    };

    updateFromScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const hue = hueForFraction(remaining);

  return (
    <div
      aria-hidden="true"
      className="
        fixed
        right-2
        bottom-12
        z-50
        pointer-events-none
        select-none
        hidden
        sm:block
      "
      style={{
        height: "220px",
        aspectRatio: "141 / 836",
      }}
    >
      <div className="relative h-full w-full">
        {/* Empty background track */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: "26%",
            right: "24%",
            top: "17%",
            bottom: "2%",
            background: "rgba(255,215,130,0.75)",
          }}
        />

        {/* Animated energy fill */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: "26%",
            right: "24%",
            top: "17%",
            bottom: "2%",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: `${remaining * 100}%`,
              background: `hsl(${hue}, 95%, 45%)`,
              transition:
                "height 150ms ease-out, background-color 150ms ease-out",
            }}
          />
        </div>

        {/* Static frame */}
        <img
          src="/energy-bar-frame.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
          style={{
            imageRendering: "pixelated",
          }}
        />
      </div>
    </div>
  );
}

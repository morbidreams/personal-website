import * as React from "react";

import { cn } from "@/lib/utils";

function PaperTextureSvg() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute", pointerEvents: "none" }}
      aria-hidden="true"
    >
      <defs>
        <filter id="paper-texture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="5"
            result="noise"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor="#fff"
            surfaceScale="2"
            result="texture"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feBlend in="texture" in2="SourceGraphic" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}

function generateWobblyPath(seed: number): string {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const points: string[] = [];
  const segs = 14;
  const w = 3;

  const wobble = () => (rand() < 0.15 ? rand() * w + 3 : rand() * w).toFixed(1);

  // Top: L to R (y wobbles near 0)
  for (let i = 0; i <= segs; i++) {
    const x = ((i / segs) * 100).toFixed(2);
    const y = i === 0 || i === segs ? "0" : wobble();
    points.push(`${x}% ${y}px`);
  }
  // Right: T to B (x wobbles near 100%)
  for (let i = 1; i <= segs; i++) {
    const x = i === segs ? "100%" : `calc(100% - ${wobble()}px)`;
    const y = ((i / segs) * 100).toFixed(2);
    points.push(`${x} ${y}%`);
  }
  // Bottom: R to L (y wobbles near 100%)
  for (let i = 1; i <= segs; i++) {
    const x = (100 - (i / segs) * 100).toFixed(2);
    const y = i === segs ? "100%" : `calc(100% - ${wobble()}px)`;
    points.push(`${x}% ${y}`);
  }
  // Left: B to T (x wobbles near 0)
  for (let i = 1; i < segs; i++) {
    const x = wobble();
    const y = (100 - (i / segs) * 100).toFixed(2);
    points.push(`${x}px ${y}%`);
  }

  return `polygon(${points.join(", ")})`;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, children, ...props }, ref) => {
  const seedRef = React.useRef(Math.floor(Math.random() * 100000));
  const clipPath = React.useMemo(() => generateWobblyPath(seedRef.current), []);

  return (
    <>
      <PaperTextureSvg />
      <div
        ref={ref}
        className={cn("relative text-card-foreground", className)}
        style={style}
        {...props}
      >
        {/* Paper background — wobbly torn edges, paper texture, cast shadow */}
        <div
          className="absolute inset-0"
          style={{
            filter:
              "drop-shadow(0 2px 3px rgba(0,0,0,0.14)) drop-shadow(0 6px 10px rgba(0,0,0,0.10)) drop-shadow(0 14px 24px rgba(0,0,0,0.06))",
          }}
        >
          <div
            aria-hidden="true"
            className="h-full w-full"
            style={{
              clipPath,
              backgroundColor: "var(--card, #ffffff)",
              filter: "url(#paper-texture)",
            }}
          />
        </div>

        {/* Dog-ear: top-right — folded down with depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: 0,
            right: 0,
            width: 42,
            height: 42,
            zIndex: 3,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            background:
              "linear-gradient(225deg, #f5f1e8 0%, #e5dfd3 50%, #d5cec0 100%)",
            filter: "drop-shadow(-3px 4px 5px rgba(0,0,0,0.22))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: 0,
            right: 0,
            width: 42,
            height: 42,
            zIndex: 4,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            background:
              "linear-gradient(225deg, transparent 47%, rgba(0,0,0,0.12) 50%, transparent 53%)",
          }}
        />

        {/* Dog-ear: bottom-left — folded down with depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            bottom: 0,
            left: 0,
            width: 36,
            height: 36,
            zIndex: 3,
            clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            background:
              "linear-gradient(45deg, #f5f1e8 0%, #e5dfd3 50%, #d5cec0 100%)",
            filter: "drop-shadow(3px -4px 5px rgba(0,0,0,0.22))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            bottom: 0,
            left: 0,
            width: 36,
            height: 36,
            zIndex: 4,
            clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            background:
              "linear-gradient(45deg, transparent 47%, rgba(0,0,0,0.12) 50%, transparent 53%)",
          }}
        />

        {/* Content — crisp, above paper, unaffected by filters */}
        <div className="relative" style={{ zIndex: 5 }}>
          {children}
        </div>
      </div>
    </>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

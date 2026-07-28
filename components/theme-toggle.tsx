"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { PxlKitIcon } from "@pxlkit/core";
import { Sun } from "@pxlkit/weather";
import { Moon } from "@pxlkit/weather";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <a className="border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none">
        <PxlKitIcon icon={Sun} size={48} />
        <span className="sr-only">Toggle theme</span>
      </a>
    );
  }

  return (
    <a
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
    >
      {theme === "dark" ? (
        <PxlKitIcon icon={Moon} size={48} />
      ) : (
        <PxlKitIcon icon={Sun} size={48} />
      )}
      <span className="sr-only">Toggle theme</span>
    </a>
  );
}

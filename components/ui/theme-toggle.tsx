"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      className="fixed right-4 top-4 z-[101]"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
      {resolvedTheme === "dark" ? (
        <Sun />
      ) : (
        <Moon className="text-black hover:text-[var(--primary)]" />
      )}
    </Button>
  );
}

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler";
import { buttonVariants } from "@/components/animate-ui/components/buttons/icon";
import styles from "./switch.module.scss";

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps["onImmediateChange"];
    direction?: ThemeTogglerPrimitiveProps["direction"];
  };

function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark"],
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const direction = resolvedTheme === "dark" ? "rtl" : "ltr";

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}>
      {({ effective, resolved, toggleTheme }) => (
        <button
          type="button"
          data-mode={resolved}
          className={styles.switch}
          onClick={(e) => {
            onClick?.(e);
            toggleTheme(getNextTheme(effective, modes));
          }}>
          {resolved === "light" ? (
            <Moon data-mode={resolved} size={12} />
          ) : (
            <Sun data-mode={resolved} size={12} />
          )}
        </button>
      )}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };

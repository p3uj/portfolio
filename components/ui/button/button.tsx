import { cn } from "@/lib/utils";
import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  height?: "default" | "tall";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "default",
  size = "medium",
  height = "tall",
  className = "",
  ...props
}: ButtonProps) {
  const base = `${styles.base}`;

  const variants = {
    default: `${styles.default}`,
    outline: `${styles.outline}`,
    ghost: `${styles.ghost}`,
  };

  const sizes = {
    small: {
      default: styles.smDefault,
      tall: styles.smTall,
    },
    medium: {
      default: styles.mdDefault,
      tall: styles.mdTall,
    },
    large: {
      default: styles.lgDefault,
      tall: styles.lgTall,
    },
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size][height], className)}
      {...props}
    >
      {children}
    </button>
  );
}

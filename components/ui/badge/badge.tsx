import { cn } from "@/lib/utils";
import styles from "./badge.module.scss";

interface BadgeProps {
  name: string;
  className?: string;
}

export default function Badge({ name, className = "" }: BadgeProps) {
  return (
    <div className={cn(styles.badge, styles[name], className)}>
      <span>{name}</span>
    </div>
  );
}

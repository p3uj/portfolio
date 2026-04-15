import { cn } from "@/lib/utils";
import styles from "./badge.module.scss";

interface BadgeProps {
  name: string;
}

export default function Badge({ name }: BadgeProps) {
  return <div className={cn(styles.badge, styles[name])}>{name}</div>;
}

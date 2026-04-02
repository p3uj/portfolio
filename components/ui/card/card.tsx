import { cn } from "@/lib/utils";
import styles from "./card.module.scss";

type CardProps = {
  className?: string;
} & React.ComponentProps<"div">;

function Card({ className = "", ...props }: CardProps) {
  return <div className={cn(styles.card, className)} {...props} />;
}

export { Card };

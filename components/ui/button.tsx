import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base = `${styles.base}`;

  const variants = {
    default: `${styles.default}`,
    outline: `${styles.outline}`,
    ghost: `${styles.ghost}`,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

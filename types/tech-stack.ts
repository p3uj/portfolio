export const TECH_STACK_TYPES = [
  "frontend",
  "backend",
  "database",
  "tool",
] as const;
export type TechStackType = (typeof TECH_STACK_TYPES)[number];

export interface TechStack {
  id: number;
  name: string;
  type: TechStackType;
}

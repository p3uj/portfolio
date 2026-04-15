export type NavBarTab = "home" | "about" | "project" | "contact";

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

export interface Project {
  id: number;
  tech_stack_id: TechStack["id"][];
  project_name: string;
  description: string;
}

export interface ProjectFeature {
  id: number;
  project_id: Project["id"];
  image_id?: ProjectImage["id"];
  description: string;
}

export interface ProjectImage {
  id: number;
  project_id: Project["id"];
  image_path: string;
  is_cover: boolean;
}

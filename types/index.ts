import { contactSchema } from "@/lib/schema/contact";
import z from "zod";

export const NAVBAR_LIST = [
  { id: 1, name: "home", section: "home" },
  { id: 2, name: "about", section: "about" },
  { id: 3, name: "project", section: "project" },
  { id: 4, name: "tech stack", section: "tech-stack" },
  { id: 5, name: "contact", section: "contact" },
] as const;
export type NavBarList = (typeof NAVBAR_LIST)[number];

export interface NavBar {
  id: number;
  name: NavBarList["name"];
  section: NavBarList["section"];
}

export const TECH_STACK_TYPES = [
  "frontend",
  "backend",
  "database",
  "tools",
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
  name: string;
  description: string;
}

export interface ProjectFeature {
  id: number;
  project_id: Project["id"];
  image_id?: ProjectImage["id"];
  name: string;
  description: string;
}

export interface ProjectImage {
  id: number;
  project_id: Project["id"];
  image_path: string;
  is_cover: boolean;
}

export const ROLES = [
  "full stack web developer",
  "mobile developer",
  "UI/UX designer",
] as const;
export type RolesType = (typeof ROLES)[number];

export type ContactPayload = z.infer<typeof contactSchema>;

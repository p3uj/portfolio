import { contactSchema } from "@/lib/schema/contact";
import z from "zod";

export const NAVBAR_LIST = [
  { id: 1, name: "home", section: "home" },
  { id: 2, name: "about", section: "about" },
  { id: 3, name: "project", section: "project" },
  { id: 4, name: "skills", section: "skills" },
  { id: 5, name: "contact", section: "contact" },
] as const;
export type NavBarList = (typeof NAVBAR_LIST)[number];

export interface NavBar {
  id: number;
  name: NavBarList["name"];
  section: NavBarList["section"];
}

export const SKILL_CATEGORY = [
  "frontend",
  "backend",
  "database",
  "mobile",
  "tools & deployment",
] as const;
export type SkillCategory = (typeof SKILL_CATEGORY)[number];

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
}

export const PROJECT_TYPE = ["web", "mobile", "UI/UX"] as const;
export type ProjectType = (typeof PROJECT_TYPE)[number];

export const PROJECT_TAB = ["all", ...PROJECT_TYPE] as const;
export type ProjectTab = (typeof PROJECT_TAB)[number];

export const LINK_TYPE = ["watch demo", "live demo", "github"] as const;
export type LinkType = (typeof LINK_TYPE)[number];

export interface Project {
  id: number;
  skill_id: Skill["id"][];
  name: string;
  description: string;
  type: ProjectType;

  watch_demo_link?: string;
  live_demo_link?: string;
  github_link?: string;
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

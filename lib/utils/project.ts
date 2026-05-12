import {
  PROJECT_FEATURE_MOCK,
  PROJECT_IMAGES_MOCK,
  PROJECT_MOCK,
} from "@/data/mock/project-mock";
import { SKILLS_MOCK } from "@/data/mock/skills-mock";

function GetImage(
  id: number | null = null,
  project_id: number | null = null,
  is_cover: boolean = false,
) {
  if (is_cover === true) {
    // Overview Image
    return PROJECT_IMAGES_MOCK.find(
      (image) => image.project_id === project_id && image.is_cover === is_cover,
    );
  } else {
    // Feature Image
    return PROJECT_IMAGES_MOCK.find((image) => image.id === id);
  }
}

function GetProject(project_id: number) {
  const project = PROJECT_MOCK.find((project) => project.id === project_id);
  const image = GetImage(null, project_id, true)?.image_path;
  const skill = GetSkill(project?.skill_id);
  const feature = GetFeature(project_id);

  if (!project) return null;

  const { skill_id, ...cleanedProject } = project;

  return {
    ...cleanedProject,
    cover: image,
    skill,
    feature,
  };
}

function GetProjectWithFeature(project_id: number) {
  const project = PROJECT_MOCK.find((project) => project.id === project_id);
  const image = GetImage(null, project_id, true)?.image_path;
  const skill = GetSkill(project?.skill_id);
  const feature = GetFeature(project_id);

  if (!project) return null;

  const { skill_id, ...cleanedProject } = project;

  return [
    {
      type: "project",
      ...cleanedProject,
      image_path: image,
      skill: skill,
    },
    ...feature.map((feature) => ({
      type: "feature",
      ...feature,
      skill: skill,
    })),
  ];
}

function GetSkill(skill_id: number[] = []) {
  return SKILLS_MOCK.filter((skill) => skill_id.includes(skill.id));
}

function GetFeature(project_id: number) {
  const features = PROJECT_FEATURE_MOCK.filter(
    (feature) => feature.project_id === project_id,
  ).map((feature) => ({
    ...feature,
    image_path: GetImage(feature.image_id)?.image_path,
  }));

  return features;
}

export { GetImage, GetProject, GetProjectWithFeature };

import { PROJECT_IMAGES_MOCK, PROJECT_MOCK } from "@/data/mock/project-mock";
import { TECH_STACK_MOCK } from "@/data/mock/tech-stack.mock";

function GetImage(project_id: number, is_cover: boolean) {
  return PROJECT_IMAGES_MOCK.find(
    (image) => image.project_id === project_id && image.is_cover === is_cover,
  )?.image_path;
}

function GetProject(project_id: number) {
  const project = PROJECT_MOCK.find((project) => project.id === project_id);
  const image = GetImage(project_id, true);
  const tech_stack = GetTechStack(project?.tech_stack_id);

  if (!project) return null;

  const { tech_stack_id, ...cleanedProject } = project;

  return {
    ...cleanedProject,
    cover: image,
    tech_stack,
  };
}

function GetTechStack(tech_stack_id: number[] = []) {
  return TECH_STACK_MOCK.filter((tech) => tech_stack_id.includes(tech.id));
}

export { GetImage, GetProject };

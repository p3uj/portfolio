import { Project, ProjectFeature, ProjectImage } from "@/types";

export const PROJECT_MOCK: Project[] = [
  {
    id: 1,
    tech_stack_id: [1, 2, 3, 4, 5, 6],
    name: "Project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore, doloribus facilis cumque nostrum rerum rem at nesciunt nisi dolorem fuga sit accusantium ad quidem, aut impedit temporibus debitis quod!",
  },
  {
    id: 2,
    tech_stack_id: [1, 2, 3, 4, 5, 6],
    name: "Project 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore, doloribus facilis cumque nostrum rerum rem at nesciunt nisi dolorem fuga sit accusantium ad quidem, aut impedit temporibus debitis quod!",
  },
  {
    id: 3,
    tech_stack_id: [1, 2, 3, 4, 5, 6],
    name: "Project 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore, doloribus facilis cumque nostrum rerum rem at nesciunt nisi dolorem fuga sit accusantium ad quidem, aut impedit temporibus debitis quod!",
  },
];

export const PROJECT_FEATURE_MOCK: ProjectFeature[] = [
  {
    id: 1,
    project_id: 1,
    image_id: 2,
    name: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus eaque autem non nam aut ducimus tempore mollitia dolorum culpa, magnam earum explicabo ullam repudiandae rerum debitis adipisci sapiente nesciunt?",
  },
  {
    id: 2,
    project_id: 1,
    image_id: 3,
    name: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero esse id itaque officiis repellat suscipit. Architecto, possimus ullam magnam illum velit autem beatae repudiandae, voluptatum, quo quasi incidunt labore?",
  },
  {
    id: 3,
    project_id: 2,
    image_id: 5,
    name: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus eaque autem non nam aut ducimus tempore mollitia dolorum culpa, magnam earum explicabo ullam repudiandae rerum debitis adipisci sapiente nesciunt?",
  },
  {
    id: 4,
    project_id: 2,
    image_id: 6,
    name: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero esse id itaque officiis repellat suscipit. Architecto, possimus ullam magnam illum velit autem beatae repudiandae, voluptatum, quo quasi incidunt labore?",
  },
  {
    id: 5,
    project_id: 3,
    image_id: 8,
    name: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus eaque autem non nam aut ducimus tempore mollitia dolorum culpa, magnam earum explicabo ullam repudiandae rerum debitis adipisci sapiente nesciunt?",
  },
  {
    id: 6,
    project_id: 3,
    image_id: 9,
    name: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero esse id itaque officiis repellat suscipit. Architecto, possimus ullam magnam illum velit autem beatae repudiandae, voluptatum, quo quasi incidunt labore?",
  },
];

export const PROJECT_IMAGES_MOCK: ProjectImage[] = [
  {
    id: 1,
    project_id: 1,
    image_path: "/images/projects/project1/Image1.png",
    is_cover: true,
  },
  {
    id: 2,
    project_id: 1,
    image_path: "/images/projects/project1/Image2.png",
    is_cover: false,
  },
  {
    id: 3,
    project_id: 1,
    image_path: "/images/projects/project1/Image3.png",
    is_cover: false,
  },
  {
    id: 4,
    project_id: 2,
    image_path: "/images/projects/project1/Image2.png",
    is_cover: true,
  },
  {
    id: 5,
    project_id: 2,
    image_path: "/images/projects/project1/Image1.png",
    is_cover: false,
  },
  {
    id: 6,
    project_id: 3,
    image_path: "/images/projects/project1/Image3.png",
    is_cover: false,
  },
  {
    id: 7,
    project_id: 3,
    image_path: "/images/projects/project1/Image3.png",
    is_cover: true,
  },
  {
    id: 8,
    project_id: 3,
    image_path: "/images/projects/project1/Image1.png",
    is_cover: false,
  },
  {
    id: 9,
    project_id: 3,
    image_path: "/images/projects/project1/Image2.png",
    is_cover: false,
  },
];

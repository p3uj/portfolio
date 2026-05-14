import { Project, ProjectFeature, ProjectImage } from "@/types";

export const PROJECT_MOCK: Project[] = [
  {
    id: 1,
    skill_id: [2, 4, 5, 1, 19, 22, 25],
    name: "BizTrend Forecast",
    description:
      "BizTrend Forecast is a predictive system for the business industry that utilizing data analytics and machine learning to forecast trends such as growth rate, revenue, and least crowded.",
    type: "web",
    watch_demo_link: "https://youtu.be/3O3qhtrHxSg?si=755AjOTBhFdhQmIe",
  },
];

export const PROJECT_FEATURE_MOCK: ProjectFeature[] = [
  {
    id: 1,
    project_id: 1,
    image_id: 2,
    name: "Secure Login Authentication",
    description:
      "The system uses JSON Web Token (JWT)-based authentication to securely verify user identities and protect access to authorized features. It ensures secure login sessions, role-based access control, and enhanced data protection by validating user credentials and managing authenticated access efficiently.",
  },
  {
    id: 2,
    project_id: 1,
    image_id: 3,
    name: "Industry Trend Monitoring Dashboard",
    description:
      "The system displays the top 5 predicted industry trends generated through machine learning forecasts for short-term (1 year), mid-term (3 years), and long-term (5 years) periods. It also supports filtering by growing, revenue-generating, and least crowded industry sectors for easier trend analysis.",
  },
  {
    id: 3,
    project_id: 1,
    image_id: 4,
    name: "Dataset Upload and Machine Learning-Based Prediction",
    description:
      "The system allows users to upload datasets with built-in validation to ensure the file meets the required column names and data types. Once validated and accepted, the dataset is processed by the machine learning model to generate prediction results.",
  },
  {
    id: 4,
    project_id: 1,
    image_id: 5,
    name: "User Registration and Management",
    description:
      "The system enables administrators to register new users and manage account status by activating or deactivating users. The system also supports filtering to view all, active, and inactive users for easier account management.",
  },
  {
    id: 5,
    project_id: 1,
    image_id: 6,
    name: "Account Profile Management",
    description:
      "The system allows users to update their personal information, including their first and last name, and change their profile picture for personalized account management.",
  },
];

export const PROJECT_IMAGES_MOCK: ProjectImage[] = [
  {
    id: 1,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-landing-page.svg",
    is_cover: true,
  },
  {
    id: 2,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-login.svg",
    is_cover: false,
  },
  {
    id: 3,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-trend-monitoring.svg",
    is_cover: false,
  },
  {
    id: 4,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-prediction.svg",
    is_cover: true,
  },
  {
    id: 5,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-user-management.svg",
    is_cover: false,
  },
  {
    id: 6,
    project_id: 1,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-profile-management.svg",
    is_cover: false,
  },
];

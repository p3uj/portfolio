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
    github_link: "https://github.com/p3uj/BizTrend-Forecast",
  },
  {
    id: 2,
    skill_id: [21],
    name: "BizTrend Forecast UI/UX Design",
    description:
      "A desktop-first UI/UX design for a predictive business analytics platform that visualizes industry growth, revenue forecasting, and market competition insights.",
    type: "UI/UX",
    live_demo_link:
      "https://www.figma.com/proto/WQ5szT2NbGTrffxfJOmMlV/Business-Industry-Prediction-System?node-id=442-728&page-id=0%3A1&starting-point-node-id=549%3A2464&scaling=min-zoom&content-scaling=fixed&t=SKJgc2hy8t7K7STH-1",
  },
  {
    id: 3,
    skill_id: [3, 26, 7, 5, 20, 15],
    name: "RentEase",
    description:
      "RentEase is a web-based rental platform that helps tenants and landlords connect more easily through property posting, searching, and management features. The system aims to provide a convenient, accessible, and efficient rental experience for users.",
    type: "web",
    watch_demo_link: "https://youtu.be/4_xOdCWI0bs",
    github_link:
      "https://github.com/p3uj/Case-Study_Web_Dev_and_DBA_A.Y-2024-2025",
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
  {
    id: 6,
    project_id: 3,
    image_id: 9,
    name: "Registration",
    description:
      "The system allows new users to create an account by providing basic information to access the platform.",
  },
  {
    id: 7,
    project_id: 3,
    image_id: 10,
    name: "Secure Login Authentication",
    description:
      "Secure login system using Laravel authentication to protect user accounts and data.",
  },
  {
    id: 8,
    project_id: 3,
    image_id: 11,
    name: "Property Posting",
    description:
      "The system enables landlords to post rental properties with details such as unit category, location, price, occupancy, and description.",
  },
  {
    id: 9,
    project_id: 3,
    image_id: 12,
    name: "Find Roommate/Tenant Posting",
    description:
      "The system allows users to post or search for roommates or tenants for shared or available living spaces.",
  },
  {
    id: 10,
    project_id: 3,
    image_id: 13,
    name: "Reviews and Ratings",
    description:
      "The system allows users to leave feedback and ratings for tenants or landlords to build trust and transparency.",
  },
  {
    id: 11,
    project_id: 3,
    image_id: 14,
    name: "Profile Management",
    description:
      "The system allows users to manage and update their profile information and view their own posts and activities.",
  },
  {
    id: 12,
    project_id: 3,
    image_id: 15,
    name: "User Search & Profile Viewing",
    description:
      "The system allows users to search for other users and view their profiles, posts, reviews and ratings.",
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
  {
    id: 7,
    project_id: 2,
    image_path:
      "/images/projects/biztrend-forecast/biztrend-forecast-landing-page.svg",
    is_cover: true,
  },
  {
    id: 8,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-home.svg",
    is_cover: true,
  },
  {
    id: 9,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-registration.svg",
    is_cover: false,
  },
  {
    id: 10,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-login.svg",
    is_cover: false,
  },
  {
    id: 11,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-properties.svg",
    is_cover: false,
  },
  {
    id: 12,
    project_id: 3,
    image_path:
      "/images/projects/rentease-web/rentease-search-roommate-tenant.svg",
    is_cover: false,
  },
  {
    id: 13,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-review.svg",
    is_cover: false,
  },
  {
    id: 14,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-profile-management.svg",
    is_cover: false,
  },
  {
    id: 15,
    project_id: 3,
    image_path: "/images/projects/rentease-web/rentease-search-user.svg",
    is_cover: false,
  },
];

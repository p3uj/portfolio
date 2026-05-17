"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./projects-section.module.scss";
import Button from "@/components/ui/button/button";
import { PROJECT_MOCK } from "@/data/mock/project-mock";
import { CountProject, GetImage } from "@/lib/utils/project";
import { useEffect, useState } from "react";
import { PROJECT_TAB, ProjectTab, ProjectType } from "@/types";
import StackIcon from "tech-stack-icons";
import { SquareArrowOutUpRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useTheme } from "next-themes";

interface ProjectProps {
  modalOpen: (value: boolean) => void;
  id: (value: number | null) => void;
  projectType: (value: ProjectType) => void;
}

export default function ProjectsSection({
  modalOpen,
  id,
  projectType,
}: ProjectProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("all");
  const [data, setData] = useState(PROJECT_MOCK);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const { theme } = useTheme();

  const getData = (tab: ProjectTab) => {
    if (tab != "all") {
      return PROJECT_MOCK.filter((project) => project.type === tab);
    }

    return PROJECT_MOCK;
  };

  useEffect(() => {
    const data = getData(activeTab);

    setData(data);
  }, [activeTab]);

  return (
    <section id="project" className={styles.project}>
      <h1 className={styles.sectionTitle}>Featured Projects</h1>

      <section className={styles.tab}>
        {PROJECT_TAB.map((tab, index) => (
          <Button
            key={index}
            variant="ghost"
            className={activeTab === tab ? styles.active : ""}
            onClick={() => setActiveTab(tab)}>
            {tab} <span>({CountProject(tab)})</span>
          </Button>
        ))}
      </section>

      <section className={styles.content}>
        {data.map((project) => (
          <Card key={project.id} className={styles.card}>
            <div
              className={styles.imageWrapper}
              onClick={() => {
                modalOpen(true);
                id(project.id);
                projectType(project.type);
              }}>
              <img
                src={`${GetImage(null, project.id, true)?.image_path}`}
                alt={project.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className={styles.projectOverview}
              onClick={() => {
                if (!isMobile) {
                  modalOpen(true);
                  id(project.id);
                  projectType(project.type);
                }
              }}>
              <div className={styles.textWrapper}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              {project.watch_demo_link && (
                <Button
                  onClick={() =>
                    window.open(project.watch_demo_link, "_blank")
                  }>
                  Watch Demo
                  <SquareArrowOutUpRight size={20} />
                </Button>
              )}

              {project.live_demo_link && (
                <Button
                  onClick={() => window.open(project.live_demo_link, "_blank")}>
                  Live Demo
                  <SquareArrowOutUpRight size={20} />
                </Button>
              )}

              <Button
                variant={isMobile ? "outline" : "default"}
                onClick={(e) => {
                  e.stopPropagation();
                  modalOpen(true);
                  id(project.id);
                  projectType(project.type);
                }}
                className={styles.view}>
                View Details
              </Button>

              {project.type === "web" && project.github_link && (
                <Button
                  variant="outline"
                  className={styles.github}
                  onClick={() => window.open(project.github_link, "_blank")}>
                  <StackIcon
                    name="github"
                    variant={theme === "light" ? "light" : "dark"}
                    className={styles.githubIcon}
                  />
                </Button>
              )}
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}

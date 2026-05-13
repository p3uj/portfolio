"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./projects-section.module.scss";
import Button from "@/components/ui/button/button";
import { PROJECT_MOCK } from "@/data/mock/project-mock";
import { CountProject, GetImage } from "@/lib/utils/project";
import { useEffect, useState } from "react";
import { PROJECT_TAB, ProjectTab } from "@/types";

interface ProjectProps {
  modalOpen: (value: boolean) => void;
  id: (value: number | null) => void;
}

export default function ProjectsSection({ modalOpen, id }: ProjectProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("all");
  const [data, setData] = useState(PROJECT_MOCK);

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
      <h1>Featured Projects</h1>

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
          <Card
            onClick={() => {
              modalOpen(true);
              id(project.id);
            }}
            key={project.id}>
            <div className={styles.buttonWrapper}>
              <Button
                variant="default"
                onClick={(e) => {
                  e.stopPropagation();
                  modalOpen(true);
                  id(project.id);
                }}>
                View Details
              </Button>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={`${GetImage(null, project.id, true)?.image_path}`}
                alt={project.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}

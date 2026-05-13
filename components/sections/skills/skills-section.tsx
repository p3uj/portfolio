"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./skills-section.module.scss";
import { SKILLS_MOCK } from "@/data/mock/skills-mock";
import Badge from "@/components/ui/badge/badge";
import { SKILL_CATEGORY, SkillCategory } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Code2,
  Database,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

export default function SkillsSections() {
  const [categoryHover, setCateogoryHover] = useState<SkillCategory | null>(
    null,
  );

  const skillsByCategory = {
    frontend: SKILLS_MOCK.filter((item) => item.category === "frontend"),
    backend: SKILLS_MOCK.filter((item) => item.category === "backend"),
    database: SKILLS_MOCK.filter((item) => item.category === "database"),
    mobile: SKILLS_MOCK.filter((item) => item.category === "mobile"),
    tools: SKILLS_MOCK.filter((item) => item.category === "tools & deployment"),
  };

  const getIcon = (category: SkillCategory) => {
    switch (category) {
      case "frontend":
        return <Code2 />;

      case "backend":
        return <Server />;

      case "database":
        return <Database />;

      case "mobile":
        return <Smartphone />;

      case "tools & deployment":
        return <Wrench />;

      default:
        return null;
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <h1>Skills & Expertise</h1>

      <section className={styles.content}>
        {SKILL_CATEGORY.map((category, index) => (
          <Card
            key={index}
            onMouseEnter={() => setCateogoryHover(category)}
            onMouseLeave={() => setCateogoryHover(null)}
            className={styles.card}>
            <section className={styles.header}>
              <h2>{category}</h2>
              {getIcon(category)}
            </section>

            <section className={styles.skillskWrapper} data-category={category}>
              {SKILLS_MOCK.filter((item) => item.category === category).map(
                (skill, index) => (
                  <Badge
                    key={index}
                    name={skill.name}
                    className={cn(
                      category != categoryHover &&
                        styles[
                          category != "tools & deployment" ? category : "tools"
                        ],
                    )}
                  />
                ),
              )}
            </section>

            <p>
              {
                skillsByCategory[
                  category != "tools & deployment" ? category : "tools"
                ].length
              }{" "}
              {skillsByCategory[
                category != "tools & deployment" ? category : "tools"
              ].length === 1
                ? "skill"
                : "skills"}
            </p>
          </Card>
        ))}
      </section>
    </section>
  );
}

import { Card } from "@/components/ui/card/card";
import styles from "./skills-section.module.scss";
import { SKILLS_MOCK } from "@/data/mock/skills-mock";
import Badge from "@/components/ui/badge/badge";
import { SKILL_CATEGORY } from "@/types";

export default function SkillsSections() {
  const skillsByCategory = {
    frontend: SKILLS_MOCK.filter((item) => item.category === "frontend"),
    backend: SKILLS_MOCK.filter((item) => item.category === "backend"),
    database: SKILLS_MOCK.filter((item) => item.category === "database"),
    mobile: SKILLS_MOCK.filter((item) => item.category === "mobile"),
    tools: SKILLS_MOCK.filter((item) => item.category === "tools"),
  };

  return (
    <section id="skills" className={styles.skills}>
      <h1>Skills & Expertise</h1>

      <section className={styles.content}>
        {SKILL_CATEGORY.map((category, index) => (
          <Card key={index}>
            <h2>{category}</h2>

            <section className={styles.skillskWrapper}>
              {SKILLS_MOCK.filter((item) => item.category === category).map(
                (skill, index) => (
                  <Badge
                    key={index}
                    name={skill.name}
                    className={styles.badge}
                  />
                ),
              )}
            </section>

            <p>
              {skillsByCategory[category].length}{" "}
              {skillsByCategory[category].length === 1 ? "skill" : "skills"}
            </p>
          </Card>
        ))}
      </section>
    </section>
  );
}

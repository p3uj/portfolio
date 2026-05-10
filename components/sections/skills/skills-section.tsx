import { Card } from "@/components/ui/card/card";
import styles from "./skills-section.module.scss";
import { TECH_STACK_MOCK } from "@/data/mock/tech-stack.mock";
import Badge from "@/components/ui/badge/badge";
import { TECH_STACK_TYPES } from "@/types";

export default function SkillsSections() {
  return (
    <section id="skills" className={styles.skills}>
      <h1>Skills & Expertise</h1>

      <section className={styles.content}>
        {TECH_STACK_TYPES.map((type, index) => (
          <Card key={index}>
            <h2>{type}</h2>

            <section className={styles.techStackWrapper}>
              {TECH_STACK_MOCK.filter((item) => item.type === type).map(
                (techStack, index) => (
                  <Badge key={index} name={techStack.name} />
                ),
              )}
            </section>
          </Card>
        ))}
      </section>
    </section>
  );
}

import { Card } from "@/components/ui/card/card";
import styles from "./page.module.scss";
import { TECH_STACK_MOCK } from "@/data/mock/tech-stack.mock";
import Badge from "@/components/ui/badge/badge";
import { TECH_STACK_TYPES } from "@/types";

export function TechStack() {
  return (
    <section id="tech-stack" className={styles.techStack}>
      <h1>Tech Stack </h1>

      <section className={styles.content}>
        {TECH_STACK_TYPES.map((type, index) => (
          <Card key={index}>
            <h2>{type}</h2>

            <section className={styles.techStack}>
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

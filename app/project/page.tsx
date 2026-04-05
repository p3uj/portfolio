import { Card } from "@/components/ui/card/card";
import styles from "./page.module.scss";

export default function Project() {
  return (
    <section id="project" className={styles.project}>
      <h1>My Projects</h1>

      <section>
        <Card>
          <img
            src="/images/projects/project1/Image1.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image2.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image3.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image1.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image2.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image3.png"
            alt="Image project 1"
          />
        </Card>

        <Card>
          <img
            src="/images/projects/project1/Image1.png"
            alt="Image project 1"
          />
        </Card>
      </section>
    </section>
  );
}

import { Card } from "@/components/ui/card/card";
import styles from "./page.module.scss";
import Button from "@/components/ui/button/button";

export default function Project() {
  return (
    <section id="project" className={styles.project}>
      <h1>My Projects</h1>

      <section>
        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image1.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image2.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image3.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image1.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image2.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image3.png"
              alt="Image project 1"
            />
          </div>
        </Card>

        <Card>
          <div className={styles.buttonWrapper}>
            <Button variant="default">View Details</Button>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/projects/project1/Image1.png"
              alt="Image project 1"
            />
          </div>
        </Card>
      </section>
    </section>
  );
}

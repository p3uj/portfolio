import { Card } from "@/components/ui/card/card";
import styles from "./page.module.scss";
import Button from "@/components/ui/button/button";
import { PROJECT_MOCK } from "@/data/mock/project-mock";
import { GetImage } from "@/lib/utils/project";

interface ProjectProps {
  modalOpen: (value: boolean) => void;
  id: (value: number | null) => void;
}

export default function Project({ modalOpen, id }: ProjectProps) {
  return (
    <section id="project" className={styles.project}>
      <h1>My Projects</h1>

      <section>
        {PROJECT_MOCK.map((project) => (
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
                src={GetImage(null, project.id, true)?.image_path}
                alt={project.name}
              />
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}

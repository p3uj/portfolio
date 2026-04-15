import styles from "./card-modal.module.scss";
import TabContent from "../modal/tab-content/tab-content";
import { GetProject } from "@/lib/utils/project";

interface CardModalProps {
  project_id: number | null;
}

export default function CardModal({ project_id }: CardModalProps) {
  const Project = GetProject(project_id || 0);

  return (
    <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <TabContent
        tab="Overview"
        title={Project?.project_name}
        description={Project?.description}
        techStack={Project?.tech_stack}
        imageLink={Project?.cover}
      />
    </div>
  );
}

import { ProjectType } from "@/types";
import CardModal from "../card/card-modal";
import styles from "./modal.module.scss";

interface ModalProps {
  open: (value: boolean) => void;
  project_id: number | null;
  project_type: ProjectType | null;
}

export default function Modal({ open, project_id, project_type }: ModalProps) {
  return (
    <div className={styles.modal} onClick={() => open(false)}>
      <CardModal project_id={project_id} project_type={project_type} />
    </div>
  );
}

import CardModal from "../card/card-modal";
import styles from "./modal.module.scss";

interface ModalProps {
  open: (value: boolean) => void;
  project_id: number | null;
}

export default function Modal({ open, project_id }: ModalProps) {
  return (
    <div className={styles.modal} onClick={() => open(false)}>
      <CardModal project_id={project_id} />
    </div>
  );
}

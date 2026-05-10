import Badge from "@/components/ui/badge/badge";
import styles from "./profile.module.scss";

export function Profile() {
  return (
    <section className={styles.profile}>
      <section className={styles.profileWrapper}>
        <Badge name="available for work" />
        <img src="/images/Profile1.png" alt="Bengie Villesco" />

        <section className={styles.cardWrapper}>
          <div className={styles.card1}>
            <img src="/images/projects/project1/Image1.png" alt="" />
          </div>
          <div className={styles.card2}>
            <img src="/images/projects/project1/Image2.png" alt="" />
          </div>
          <div className={styles.card3}>
            <img src="/images/projects/project1/Image3.png" alt="" />
          </div>
        </section>
      </section>
    </section>
  );
}

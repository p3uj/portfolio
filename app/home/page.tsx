import IntroCard from "./card/intro-card";
import styles from "./page.module.scss";
import TechStack from "./tech-stack/tech-stack";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <TechStack />
      <TechStack direction="left-to-right" />
      <IntroCard />
      <TechStack />
      <TechStack direction="left-to-right" />
    </section>
  );
}

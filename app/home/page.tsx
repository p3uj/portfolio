import IntroCard from "./card/intro-card";
import styles from "./page.module.scss";
import { Profile } from "./profile/profile";
import TechStack from "./tech-stack/tech-stack";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      {/* <TechStack />
      <TechStack direction="left-to-right" /> */}
      <Profile />
      <IntroCard />
      {/* <TechStack />
      <TechStack direction="left-to-right" /> */}
    </section>
  );
}

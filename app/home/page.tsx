import { ROLES } from "@/types";
import IntroCard from "./card/intro-card";
import styles from "./page.module.scss";
import { Profile } from "./profile/profile";
import TechStack from "./tech-stack/tech-stack";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card/card";
import Badge from "@/components/ui/badge/badge";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.home}>
      <span>
        Hi, I'm
        <h1>Bengie</h1>
      </span>

      <Card>
        {/* prettier-ignore */}
        <p>
        I create complete digital experiences by combining UI/UX design with full stack development. I focus on building fast, responsive, and user-friendly applications that solve real problems.
      </p>
      </Card>

      <Card>
        <p>Let's build something meaningful together.</p>
      </Card>

      <Badge name={ROLES[index]} className={styles.role} />

      <section className={styles.profileWrapper}>
        <img src="./images/ID.png" alt="Bengie Villesco" />
      </section>
      {/* <TechStack />
      <TechStack direction="left-to-right" /> */}
      {/* <Profile /> */}
      {/* <IntroCard /> */}
      {/* <TechStack />
      <TechStack direction="left-to-right" /> */}
    </section>
  );
}

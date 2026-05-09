import { ROLES } from "@/types";
import IntroCard from "./card/intro-card";
import styles from "./page.module.scss";
import { Profile } from "./profile/profile";
import TechStack from "./tech-stack/tech-stack";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card/card";
import Badge from "@/components/ui/badge/badge";
import Button from "@/components/ui/button/button";
import { MousePointerClick } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <Badge name="available for work" className={styles.status} />

      <span>
        Hi, I'm
        <h1>Bengie</h1>
      </span>

      <Card className={styles.card1}>
        {/* prettier-ignore */}
        <p>
        I create complete digital experiences by combining UI/UX design with full stack development. I focus on building fast, responsive, and user-friendly applications that solve real problems.
      </p>
      </Card>

      <Card className={styles.card2}>
        <p>Let's build something meaningful together.</p>
      </Card>

      <section className={styles.buttonWrapper}>
        <Button>
          <MousePointerClick className="h-[18px] w-fit" />
          Hire Me
        </Button>
        <Button variant="outline"> Projects</Button>
        <Button variant="outline">Resume</Button>
      </section>

      <section className={styles.profileWrapper}>
        <section className={styles.roleWrapper}>
          {ROLES.map((role, index) => (
            <Badge
              key={index}
              name={role}
              className={styles[`role-${index}`]}
            />
          ))}
        </section>

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

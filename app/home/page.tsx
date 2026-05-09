import { ROLES } from "@/types";
import IntroCard from "./card/intro-card";
import styles from "./page.module.scss";
import { Profile } from "./profile/profile";
import TechStack from "./tech-stack/tech-stack";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card/card";
import Badge from "@/components/ui/badge/badge";
import Button from "@/components/ui/button/button";
import { ArrowUpRight, MousePointerClick } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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

      <Card className={styles.card2} onClick={() => router.push("/#contact")}>
        <p>Let's build something meaningful together.</p>
        <ArrowUpRight size={18} />
      </Card>

      <section className={styles.buttonWrapper}>
        <Button onClick={() => router.push("/#contact")}>
          <MousePointerClick size={18} />
          Hire Me
        </Button>
        <Button variant="outline" onClick={() => router.push("/#project")}>
          Projects
          <ArrowUpRight size={18} />
        </Button>
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

        <section className={styles.cardWrapper}>
          <section className={styles.overview}>
            <Card className={styles.projectDone}>
              <h1>3+</h1>
              <p>Project Done</p>
            </Card>
            <Card className={styles.experience}>
              <h1>2+</h1>
              <p>Years Experience</p>
            </Card>
          </section>
          <section className={styles.project}>
            <div>
              <img src="./images/projects/project1/Image1.png" alt="image" />
            </div>
            <div>
              <img src="./images/projects/project1/Image2.png" alt="image" />
            </div>
            <div>
              <img src="./images/projects/project1/Image3.png" alt="image" />
            </div>
          </section>
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

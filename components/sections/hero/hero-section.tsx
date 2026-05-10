"use client";

import { ROLES } from "@/types";
import styles from "./hero-section.module.scss";
import { Card } from "@/components/ui/card/card";
import Badge from "@/components/ui/badge/badge";
import Button from "@/components/ui/button/button";
import { ArrowUpRight, MousePointerClick } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section id="home" className={styles.hero}>
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

        <Tooltip>
          <TooltipTrigger asChild>
            <section className={styles.project}>
              <div onClick={() => router.push("/#project")}>
                <img src="/images/projects/project1/Image1.png" alt="image" />
              </div>
              <div onClick={() => router.push("/#project")}>
                <img src="/images/projects/project1/Image2.png" alt="image" />
              </div>
              <div onClick={() => router.push("/#project")}>
                <img src="/images/projects/project1/Image3.png" alt="image" />
              </div>
            </section>
          </TooltipTrigger>
          <TooltipContent>
            <p>View projects</p>
          </TooltipContent>
        </Tooltip>

        <img src="/images/ID.png" alt="Bengie Villesco" />
      </section>
    </section>
  );
}

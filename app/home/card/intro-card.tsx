"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./intro-card.module.scss";
import Button from "@/components/ui/button/button";
import { MousePointerClick } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROLES } from "@/types";
import { useEffect, useState } from "react";

export default function IntroCard() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className={styles.intro}>
      <h1>
        Hi, I'm <br />
        <span>Bengie</span>
      </h1>
      <h2>{ROLES[index]}</h2>

      {/* prettier-ignore */}
      <p>
        I create complete digital experiences by combining UI/UX design with full stack development. I focus on building fast, responsive, and user-friendly applications that solve real problems.
      </p>
      <p>Let's build something meaningful together.</p>

      <section>
        <Button onClick={() => router.push("/#contact")}>
          <MousePointerClick className="h-[18px] w-fit" />
          Hire Me
        </Button>
        <Button variant="outline" onClick={() => router.push("/#project")}>
          View Projects
        </Button>
        <Button variant="outline">View Resume</Button>
      </section>
    </Card>
  );
}

"use client";

import styles from "./page.module.scss";
import { Card } from "@/components/ui/card/card";
import { MousePointerClick } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [onClick, setOnClick] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <h1>
        About <span>Me</span>
      </h1>

      <div className={styles.profile}>
        <img src="/images/Profile2.png" alt="Picture of the owner" />
      </div>

      <Card onClick={() => setOnClick(!onClick)}>
        {onClick === false ? (
          <>
            {/* prettier-ignore */}
            <p>He is a fourth-year Information Technology student at the Polytechnic University of the Philippines - Quezon City Branch with a strong passion for technology and continuous learning. He thrives on new challenges, which has led him to explore various areas of IT, including programming, databases, cybersecurity, UI/UX design, and software development.</p>
          </>
        ) : (
          <>
            {/* prettier-ignore */}
            <p>Bengie aspires to build a dynamic career in the tech industry, with interests in becoming a full-stack software developer, frontend/full-stack web developer, penetration tester, database administrator, data analyst, or UI/UX designer. While he has multiple career paths in mind, he remains open to new opportunities and is committed to continuously expanding his knowledge in the ever-evolving world of technology.</p>
          </>
        )}

        <MousePointerClick className={styles.icon} />
      </Card>
    </section>
  );
}

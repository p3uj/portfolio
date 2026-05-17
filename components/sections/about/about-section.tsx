"use client";

import styles from "./about-section.module.scss";
import { Card } from "@/components/ui/card/card";
import { ABOUT_CONTENT } from "@/data/mock/portfolio-content";
import { useState } from "react";

export default function AboutSection() {
  const [onClick, setOnClick] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <h1>
        About <br /> <span>Me</span>
      </h1>

      <div className={styles.profile}>
        <img
          src="/images/Profile2.png"
          alt="Bengie Villesco"
          loading="lazy"
          decoding="async"
        />
      </div>

      <Card onClick={() => setOnClick(!onClick)}>
        <section className={styles.textWrapper}>
          {ABOUT_CONTENT.description.map((des, index) => (
            <p key={index}>{des}</p>
          ))}
        </section>
      </Card>
    </section>
  );
}

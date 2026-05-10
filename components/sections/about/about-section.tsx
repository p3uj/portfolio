"use client";

import styles from "./about-section.module.scss";
import { Card } from "@/components/ui/card/card";
import { useState } from "react";

export default function AboutSection() {
  const [onClick, setOnClick] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <h1>
        About <span>Me</span>
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
          {/* prettier-ignore */}
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto illum corporis veniam vitae nobis beatae consequatur iure maiores sint perferendis voluptate accusamus minima numquam culpa quod, quos neque esse. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, mollitia hic? Commodi, est incidunt! Corporis commodi eum est ipsum. Accusamus minima sit incidunt? Sint architecto ipsam debitis alias impedit commodi. <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos asperiores sunt quis doloribus eum nulla facere accusantium commodi eius, architecto illo quidem vero tempora magni alias sequi adipisci fuga cumque. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, impedit eius repellendus expedita voluptatibus incidunt eaque quidem harum, beatae nihil dolore aliquid, porro nobis in aut sequi ipsam vitae magni? <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi quos aperiam quisquam ad debitis placeat nulla pariatur repellat voluptas perspiciatis, impedit amet odio, iusto ab. Aliquam quis totam praesentium. <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos labore veritatis at id. Culpa iure rem ratione eaque earum, libero vel placeat obcaecati magnam necessitatibus sapiente possimus at consequatur quia?
            </p>
        </section>
      </Card>
    </section>
  );
}

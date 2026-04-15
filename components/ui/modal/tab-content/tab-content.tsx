import styles from "./tab-content.module.scss";
import { TechStack } from "@/types";
import Badge from "../../badge/badge";
import Button from "../../button/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TabContentProps {
  tab: string;
  title?: string;
  description?: string;
  techStack?: TechStack[];
  imageLink?: string;
}

export default function TabContent({
  tab,
  title,
  description,
  techStack,
  imageLink,
}: TabContentProps) {
  return (
    <section className={styles.tabContent}>
      <section className={styles.imageWrapper}>
        <img src={imageLink} alt="photos" />
      </section>

      <section className={styles.content}>
        <Badge name={tab} />

        <section className={styles.textWrapper}>
          {/* prettier-ignore */}
          <h1>{title}</h1>
          {/* prettier-ignore */}
          <p>{description}</p>
        </section>

        <section className={styles.techStack}>
          {techStack?.map((item) => (
            <Badge name={item.name} key={item.id} />
          ))}
        </section>

        <Button>Demo</Button>
      </section>
    </section>
  );
}

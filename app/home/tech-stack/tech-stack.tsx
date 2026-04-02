"use client";

import StackIcon from "tech-stack-icons";
import styles from "./tech-stack.module.scss";
import { TECH_STACK_MOCK } from "@/data/mock/tech-stack.mock";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TechStackProps {
  direction?: "right-to-left" | "left-to-right";
}

export default function TechStack({
  direction = "right-to-left",
}: TechStackProps) {
  const [onHover, setHover] = useState(false);
  const [techStackHover, setTechStackHover] = useState("");

  return (
    <section className={styles.carouselContainer} data-direction={direction}>
      <section className={styles.carouselTrack}>
        {TECH_STACK_MOCK.map((item) => (
          <span
            key={item.id}
            className={cn(styles.icon, styles[item.name])}
            onMouseEnter={() => {
              setHover(true);
              setTechStackHover(item.name);
            }}
            onMouseLeave={() => {
              setHover(false);
              setTechStackHover("");
            }}
          >
            <StackIcon
              name={item.name}
              variant={
                onHover && techStackHover === item.name ? "dark" : "grayscale"
              }
              className="h-[38px]"
            />
          </span>
        ))}

        {TECH_STACK_MOCK.map((item) => (
          <span
            key={item.id}
            className={cn(styles.icon, styles[item.name])}
            onMouseEnter={() => {
              setHover(true);
              setTechStackHover(item.name);
            }}
            onMouseLeave={() => {
              setHover(false);
              setTechStackHover("");
            }}
          >
            <StackIcon
              name={item.name}
              variant={
                onHover && techStackHover === item.name ? "dark" : "grayscale"
              }
              className="h-[38px]"
            />
          </span>
        ))}
      </section>
    </section>
  );
}

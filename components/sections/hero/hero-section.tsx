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
import { SKILLS_MOCK } from "@/data/mock/skills-mock";
import { HERO_CONTENT } from "@/data/mock/portfolio-content";
import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import { PROJECT_MOCK } from "@/data/mock/project-mock";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section id="home" className={styles.hero}>
      <picture>
        <img
          src="/images/hero-profile-800.webp"
          srcSet="
            /images/hero-profile-400.webp 400w,
            /images/hero-profile-800.webp 800w,
            /images/hero-profile-1200.webp 1200w,
            /images/hero-profile-1600.webp 1600w
          "
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1023px) 80vw,
            (max-width: 1439px) 761px,
            761px
          "
          alt="Bengie Villesco Profile Picture"
          width="2000"
          height="2000"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <h1>
        BUILDING <br />
        DIGITAL <br />
        SOLUTIONS <br />
        THAT MAKE A <br />
        DIFFERENCE
      </h1>

      <div className={styles.details_container}>
        <h3>Bengie Villesco</h3>

        <p>I'm a Full Stack Developer focused on <span className={styles.highlight}>building functional, scalable, and user-friendly</span> web applications that help businesses solve problems and turn ideas into reality.</p>
      </div>

      <h2 className={styles.role_mobile}>—FULL STACK DEVELOPER</h2>
    </section>
  );
}
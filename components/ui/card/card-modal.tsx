import { GetLink, GetProjectWithFeature } from "@/lib/utils/project";
import styles from "./card-modal.module.scss";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Badge from "../badge/badge";
import Button from "../button/button";
import { SquareArrowOutUpRight } from "lucide-react";

interface CardModalProps {
  project_id: number | null;
}

export default function CardModal({ project_id }: CardModalProps) {
  const Project = GetProjectWithFeature(project_id ?? 0);

  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const items = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const children = Array.from(wrapper.children) as HTMLElement[];

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        const childCenter = rect.left + rect.width / 2;
        const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

        const distance = Math.abs(childCenter - wrapperCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };

    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const target = wrapper.children[index] as HTMLElement;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActive(index);
  };

  const getTag = (tag: string) => {
    if (tag === "web") {
      return "web | overview";
    }

    return tag;
  };

  return (
    <section className={styles.card}>
      <section
        ref={wrapperRef}
        className={styles.wrapper}
        onClick={(e) => e.stopPropagation()}>
        {Project?.map((item, index) => (
          <div
            key={index}
            className={cn(styles.content, index === active && styles.active)}>
            <img
              src={`${item.image_path}`}
              alt={item.name}
              loading="lazy"
              decoding="async"
            />

            <section className={styles.tag}>
              <Badge name={getTag(item.type)} />
            </section>

            <section className={styles.textWrapper}>
              <h1>{item.name}</h1>

              <p>{item.description}</p>
            </section>

            <section className={styles.techStack}>
              {item.skill.map((skill, index) => (
                <Badge key={index} name={skill.name} />
              ))}
            </section>

            <Button
              onClick={() =>
                window.open(
                  GetLink(
                    project_id ?? 0,
                    item.type === "web" ? "watch demo" : "live demo",
                  ),
                  "_blank",
                )
              }>
              {item.type === "UI/UX" ? "Live Demo" : "Watch Demo"}
              <SquareArrowOutUpRight size={20} />
            </Button>
          </div>
        ))}
      </section>

      <section className={styles.bar} onClick={(e) => e.stopPropagation()}>
        {Project?.map((_, index) => (
          <div
            key={index}
            className={cn(index === active && styles.active)}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </section>
    </section>
  );
}

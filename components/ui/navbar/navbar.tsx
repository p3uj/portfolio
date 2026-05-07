"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import {
  AlignVerticalJustifyEnd,
  CirclePile,
  Home,
  Send,
  UserRound,
} from "lucide-react";
import { NavBarTab } from "@/types";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@/hooks/use-media-query";
import { NAV_BAR } from "@/data/mock/navbar-mock";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<NavBarTab>("home");
  const router = useRouter();
  const { theme } = useTheme();
  const [isProjectSection, setProjectSection] = useState(false);
  const isMobile = useMediaQuery("(max-width: 639px)");

  const getIcon = (navBarItem: NavBarTab) => {
    switch (navBarItem) {
      case "home":
        return <Home size={20} />;

      case "about":
        return <UserRound size={20} />;

      case "project":
        return <AlignVerticalJustifyEnd size={20} />;

      case "tech stack":
        return <CirclePile size={20} />;

      case "contact":
        return <Send size={20} />;

      default:
        return null;
    }
  };

  // Update activeTab state and url when scroll
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section#home, section#about, section#project, section#contact",
    );

    let current: NavBarTab | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id as NavBarTab;

          if (current !== id) {
            current = id;
            setActiveTab(current);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Track project section
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        const project = document.querySelector<HTMLElement>("#project");
        if (!project) return;

        const top = project.getBoundingClientRect().top;

        setProjectSection(top <= 50 && top >= -80);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  return (
    <nav
      className={cn(
        styles.navigation,
        theme === "light" && isProjectSection ? "!bg-stone-800/20" : "",
      )}>
      <ul>
        {NAV_BAR.map((item, index) => (
          <li key={index}>
            <Button
              className={cn(
                {
                  [styles.active]: activeTab === item.name,
                },
                "capitalize",
              )}
              onClick={() => {
                setActiveTab(item.name);
                router.push(`/#${item.section}`);
              }}>
              {getIcon(item.name)}
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

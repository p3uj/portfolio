"use client";

import NavBar from "@/components/ui/navbar/navbar";
import styles from "./page.module.scss";
import Footer from "@/components/ui/footer/footer";
import Modal from "@/components/ui/modal/modal";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../components/ui/theme-toggle";
import HeroSection from "@/components/sections/hero/hero-section";
import AboutSection from "../components/sections/about/about-section";
import ProjectsSection from "../components/sections/projects/projects-section";
import SkillsSections from "../components/sections/skills/skills-section";
import ContactSection from "@/components/sections/contact/contack-section";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectId, setProjectId] = useState<number | null>(null);

  useEffect(() => {
    if (!modalOpen) {
      setProjectId(null);
    }
  }, [modalOpen]);

  return (
    <>
      {modalOpen && <Modal open={setModalOpen} project_id={projectId} />}

      <ThemeToggle />

      <div className={cn(styles.layout, modalOpen && styles.noScroll)}>
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection modalOpen={setModalOpen} id={setProjectId} />
          <SkillsSections />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}

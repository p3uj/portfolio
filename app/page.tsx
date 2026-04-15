"use client";

import NavBar from "@/components/ui/navbar/navbar";
import styles from "./page.module.scss";
import Home from "./home/page";
import About from "./about/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Footer from "@/components/ui/footer/footer";
import Modal from "@/components/ui/modal/modal";
import { useEffect, useState } from "react";

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

      <div className={styles.layout}>
        <NavBar />
        <main>
          <Home />
          <About />
          <Project modalOpen={setModalOpen} id={setProjectId} />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import styles from "./navbar.module.scss";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a
            href="#home"
            className={activeTab === "home" ? styles.active : ""}
            onClick={() => setActiveTab("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeTab === "about" ? styles.active : ""}
            onClick={() => setActiveTab("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className={activeTab === "project" ? styles.active : ""}
            onClick={() => setActiveTab("project")}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeTab === "contact" ? styles.active : ""}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

"use client";

import { useState } from "react";
import styles from "./navbar.module.scss";
import { AlignVerticalJustifyEnd, Home, Send, UserRound } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#home"
                className={activeTab === "home" ? styles.active : ""}
                onClick={() => setActiveTab("home")}
              >
                <Home size={20} />
                <span>Home</span>
              </a>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#about"
                className={activeTab === "about" ? styles.active : ""}
                onClick={() => setActiveTab("about")}
              >
                <UserRound size={20} />
                <span>About</span>
              </a>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#project"
                className={activeTab === "project" ? styles.active : ""}
                onClick={() => setActiveTab("project")}
              >
                <AlignVerticalJustifyEnd size={20} />
                <span>Project</span>
              </a>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>Project</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#contact"
                className={activeTab === "contact" ? styles.active : ""}
                onClick={() => setActiveTab("contact")}
              >
                <Send size={20} />
                <span>Contact</span>
              </a>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>Contact</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}

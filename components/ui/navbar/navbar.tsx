"use client";

import { useState } from "react";
import styles from "./navbar.module.scss";
import { AlignVerticalJustifyEnd, Home, Send, UserRound } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip/tooltip";
import { NavBarTab } from "@/types";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<NavBarTab>("home");
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(activeTab === "home" ? styles.active : "")}
                onClick={() => {
                  setActiveTab("home");
                  router.push("/#home");
                }}>
                <Home size={20} />
                <span>Home</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(activeTab === "about" && styles.active)}
                onClick={() => {
                  setActiveTab("about");
                  router.push("/#about");
                }}>
                <UserRound size={20} />
                <span>About</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(activeTab === "project" && styles.active)}
                onClick={() => {
                  setActiveTab("project");
                  router.push("/#project");
                }}>
                <AlignVerticalJustifyEnd size={20} />
                <span>Project</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="md:hidden">
              <p>Project</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(activeTab === "contact" && styles.active)}
                onClick={() => {
                  setActiveTab("contact");
                  router.push("/#contact");
                }}>
                <Send size={20} />
                <span>Contact</span>
              </Button>
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

"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./contact-section.module.scss";
import { Copy, LocateIcon, Mail, Phone, Send } from "lucide-react";
import ContactForm from "@/components/form/contact/contact-form";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";

export default function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);

    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* <h2>Contact</h2> */}
      <h1>Get in Touch</h1>

      {/* prettier-ignore */}
      <p>
        Looking for a reliable developer to handle your next project?<br />
        Let's connect and start building a solution that works for you.
      </p>

      {/* Email */}
      <Card className={styles.card}>
        <Mail />

        <fieldset>
          <label>Email</label>
          <p>bvillesco@gmail.com</p>
        </fieldset>

        <Tooltip open={copiedIndex === 1}>
          <TooltipTrigger asChild>
            <Copy onClick={() => handleCopy("bvillesco@gmail.com", 1)} />
          </TooltipTrigger>

          <TooltipContent hideArrow className="mb-2">
            <p>Copied</p>
          </TooltipContent>
        </Tooltip>
      </Card>

      {/* Phone Number */}
      <Card className={styles.card}>
        <Phone />

        <fieldset>
          <label>Phone Number</label>
          <p>0938874883</p>
        </fieldset>

        <Tooltip open={copiedIndex === 2}>
          <TooltipTrigger asChild>
            <Copy onClick={() => handleCopy("0938874883", 2)} />
          </TooltipTrigger>

          <TooltipContent hideArrow className="mb-2">
            <p>Copied</p>
          </TooltipContent>
        </Tooltip>
      </Card>

      {/* Location */}
      <Card className={styles.card}>
        <LocateIcon />

        <fieldset>
          <label>Location</label>
          <p>Quezon City, Philippines</p>
        </fieldset>

        <Tooltip open={copiedIndex === 3}>
          <TooltipTrigger asChild>
            <Copy onClick={() => handleCopy("Quezon City, Philippines", 3)} />
          </TooltipTrigger>

          <TooltipContent hideArrow className="mb-2">
            <p>Copied</p>
          </TooltipContent>
        </Tooltip>
      </Card>

      <ContactForm />
    </section>
  );
}

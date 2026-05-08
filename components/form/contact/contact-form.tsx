import { Card } from "@/components/ui/card/card";
import styles from "./contact-form.module.scss";
import { LocateIcon, Mail, Phone, Send } from "lucide-react";
import Button from "@/components/ui/button/button";

export default function ContactForm() {
  return (
    <>
      <Card className={styles.contactForm}>
        <form action="" method="post">
          {/* Name */}
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g Bengie Villesco"
            />
          </fieldset>

          {/* Email */}
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="e.g bvillesco@gmail.com"
            />
          </fieldset>

          {/* Message */}
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="enter your message"></textarea>
          </fieldset>

          <Button type="submit">
            <Send size={20} />
            Send
          </Button>
        </form>
      </Card>
    </>
  );
}

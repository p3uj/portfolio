import { Card } from "@/components/ui/card/card";
import styles from "./contact-section.module.scss";
import { LocateIcon, Mail, Phone, Send } from "lucide-react";
import ContactForm from "@/components/form/contact/contact-form";

export default function ContactSection() {
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
      <Card>
        <Mail />

        <fieldset>
          <label>Email</label>
          <p>bvillesco@gmail.com</p>
        </fieldset>
      </Card>

      {/* Phone Number */}
      <Card>
        <Phone />

        <fieldset>
          <label>Phone Number</label>
          <p>0938874883</p>
        </fieldset>
      </Card>

      {/* Location */}
      <Card>
        <LocateIcon />

        <fieldset>
          <label>Location</label>
          <p>Quezon City, Philippines</p>
        </fieldset>
      </Card>

      <ContactForm />
    </section>
  );
}

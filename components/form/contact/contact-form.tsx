"use client";

import { Card } from "@/components/ui/card/card";
import styles from "./contact-form.module.scss";
import { Send } from "lucide-react";
import Button from "@/components/ui/button/button";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/schema/contact";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import contactService from "@/lib/services/contact-service";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submission = async (values: z.infer<typeof contactSchema>) => {
    console.table(values);

    try {
      const response = await contactService.sendMessage(values);

      reset();
      alert(response.message);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
        return;
      }

      alert("Something went wrong");
    }
  };

  return (
    <>
      <Card className={styles.contactForm}>
        <form onSubmit={handleSubmit(submission)}>
          {/* Name */}
          <fieldset>
            <label htmlFor="name" data-error={!!errors.name}>
              Name
            </label>
            <input
              data-error={!!errors.name}
              type="text"
              id="name"
              placeholder="e.g Bengie Villesco"
              {...register("name")}
            />

            {errors.name && <span>{errors.name.message}</span>}
          </fieldset>

          {/* Email */}
          <fieldset>
            <label htmlFor="email" data-error={!!errors.email}>
              Email
            </label>
            <input
              data-error={!!errors.email}
              type="email"
              id="email"
              placeholder="e.g bvillesco@gmail.com"
              {...register("email")}
            />

            {errors.email && <span>{errors.email.message}</span>}
          </fieldset>

          {/* Message */}
          <fieldset>
            <label htmlFor="message" data-error={!!errors.message}>
              Message
            </label>
            <textarea
              data-error={!!errors.message}
              id="message"
              placeholder="enter your message"
              {...register("message")}></textarea>

            {errors.message && <span>{errors.message.message}</span>}
          </fieldset>

          <Button type="submit" disabled={!isValid || isSubmitting}>
            <Send size={20} />
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </Card>
    </>
  );
}

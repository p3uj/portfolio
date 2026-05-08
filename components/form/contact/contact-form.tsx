import { Card } from "@/components/ui/card/card";
import styles from "./contact-form.module.scss";
import { LocateIcon, Mail, Phone, Send } from "lucide-react";
import Button from "@/components/ui/button/button";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/schema/contact";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
              type="text"
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

          <Button type="submit" disabled={!isValid}>
            <Send size={20} />
            Send
          </Button>
        </form>
      </Card>
    </>
  );
}

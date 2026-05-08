import { getEnv } from "@/lib/config/env";
import { contactSchema } from "@/lib/schema/contact";
import { Resend } from "resend";
import { ZodError } from "zod";

const resend = new Resend(getEnv("RESEND_API_KEY"));

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = contactSchema.parse(body);

    const { name, email, message } = validated;

    await resend.emails.send({
      from: "Bengie Villesco Portfolio <onboarding@resend.dev>",
      to: getEnv("RESEND_TO_EMAIL"),
      subject: `Portfolio Contact Form - Message from ${name}`,
      replyTo: email,
      html: `
        <h2>Thank you for reaching out!</h2>

        <p>Hi ${name},</p>

        <p>
            Thank you for reaching out through my portfolio website. I've received your message and I truly appreciate you taking the time to contact me.
        </p>

        <p>
            I'll review your message and get back to you as soon as possible—usually within 24-48 hours.
        </p>

        <p><strong>Here's a copy of what you sent:</strong></p>

        <p><strong>Your message:</strong></p>

        <blockquote style="border-left: 4px solid #ccc; padding-left: 12px; margin: 10px 0; color: #555;">
            ${message}
        </blockquote>

        <p>
            If you need to reach me sooner, you can also reply directly to this email.
        </p>

        <br/>

        <p>Looking forward to connecting with you!</p>

        <p>
            Best regards,<br />
            <strong>Bengie Villesco</strong>
        </p>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        {
          success: false,
          message: "Invalid form data",
          errors: error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}

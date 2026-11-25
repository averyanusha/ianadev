"use server"
import { ContactSchema, type ContactForm} from "@/lib/contactSchema";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";

export async function submitContactForm(form: ContactForm) {
  const result = ContactSchema.safeParse(form);
  if (!result.success) {
    return {ok: false, code: 'INVALID_INPUT'}
  }

  try {
    const headerList = await headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'anonymous';
    const { success } = await rateLimit.limit(ip);
    if (!success) {
      return { ok: false, code: 'RATE_LIMITED' }
    }

    const { error } = await resend.emails.send({
      from: "Portfolio contact form <noreply@ianadev.com>",
      to: ['averyanusha@gmail.com'],
      subject: `You got a new form submission`,
      text: `From: ${result.data.fullName} (${result.data.email})\n\n${result.data.message}`,
    });
    if (error) {
      console.error(error);
      return { ok: false, code: 'SEND_FAILED'};
    }

    return { ok: true };
  } catch(error) {
    console.error(error);
    return { ok: false, code: 'SEND_FAILED' };
  }
}
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(80, "Use 80 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "This email address is too long."),
  message: z.string().trim().min(5, "Enter a message of at least 5 characters.").max(2000, "Use 2,000 characters or fewer."),
});

export type ContactValues = z.infer<typeof contactSchema>;

export function createContactDraft(email: string, values: ContactValues) {
  const subject = encodeURIComponent("Portfolio enquiry from " + values.name);
  const body = encodeURIComponent([values.message, "", "From: " + values.name, "Reply to: " + values.email].join(String.fromCharCode(10)));
  return "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

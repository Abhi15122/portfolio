"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { about } from "@/data/about";
import { contactSchema, createContactDraft, type ContactValues } from "@/lib/contact";
import { useState } from "react";
import { Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ui/BrandIcons";
import { easings } from "@/lib/motion-tokens";

type Values = ContactValues;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
  Email: MailIcon,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "draft">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: Values) => {
    window.location.assign(createContactDraft(about.email, values));
    setStatus("draft");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Get in touch." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-ink/80 text-lg leading-relaxed max-w-md">
              Have a role or project in mind? Email me or connect on LinkedIn.
              The form opens a draft in your email app for you to review and send.
            </p>

            <ul className="mt-10 space-y-4">
              {socials.map((s) => {
                const Icon = iconMap[s.name] ?? MailIcon;
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      data-cursor="hover"
                      className="group flex items-center gap-4 text-ink/80 hover:text-accent transition-colors"
                    >
                      <span className="size-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent transition-colors">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                          {s.name}
                        </span>
                        <span>{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-7 grid grid-cols-1 gap-5"
            noValidate
          >
            <Field label="Name" errorId="contact-name-error" error={errors.name?.message}>
              <input
                {...register("name")}
                maxLength={80}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                type="text"
                autoComplete="name"
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" errorId="contact-email-error" error={errors.email?.message}>
              <input
                {...register("email")}
                maxLength={254}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                type="email"
                autoComplete="email"
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors"
                placeholder="you@domain.com"
              />
            </Field>
            <Field label="Message" errorId="contact-message-error" error={errors.message?.message}>
              <textarea
                {...register("message")}
                maxLength={2000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                rows={5}
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about the role or project."
              />
            </Field>

            <div className="flex items-center justify-between gap-4 mt-2">
              <motion.div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                key={status}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easings.expoOut }}
                className="text-xs text-muted"
              >
                {status === "draft"
                  ? "Send the draft from your email app. If it did not open, use the Email link."
                  : "Opens your email app. Review the draft and send it there."}
              </motion.div>

              <MagneticButton
                type="submit"
                className="bg-accent text-accent-ink hover:bg-[#e3ff60] disabled:opacity-50"
              >
                Open email <Send className="size-4" />
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  errorId,
  children,
}: {
  label: string;
  error?: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted">{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <span id={errorId} role="alert" className="text-xs text-red-400 mt-1 block">{error}</span> : null}
    </label>
  );
}

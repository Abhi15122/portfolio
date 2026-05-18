"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ui/BrandIcons";
import { easings } from "@/lib/motion-tokens";

const schema = z.object({
  name: z.string().min(1, "Required").max(80),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "A few more words please").max(2000),
});
type Values = z.infer<typeof schema>;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
  Email: MailIcon,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Let's build something." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-ink/80 text-lg leading-relaxed max-w-md">
              I&apos;m open to full-time roles, contract work, and interesting freelance
              projects. Send a note — I read everything.
            </p>

            <ul className="mt-10 space-y-4">
              {socials.map((s) => {
                const Icon = iconMap[s.name] ?? MailIcon;
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                autoComplete="name"
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors"
                placeholder="you@domain.com"
              />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-muted focus:border-accent outline-none transition-colors resize-none"
                placeholder="What are you working on?"
              />
            </Field>

            <div className="flex items-center justify-between gap-4 mt-2">
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easings.expoOut }}
                className="text-xs text-muted"
              >
                {status === "ok" && (
                  <span className="text-accent">Sent. I&apos;ll get back to you.</span>
                )}
                {status === "error" && (
                  <span className="text-red-400">Something broke. Try again.</span>
                )}
                {status === "sending" && "Sending…"}
                {status === "idle" && "I usually reply within a day."}
              </motion.div>

              <MagneticButton
                type="submit"
                className="bg-accent text-accent-ink hover:bg-[#e3ff60] disabled:opacity-50"
                aria-disabled={status === "sending"}
              >
                {status === "ok" ? (
                  <>
                    Sent <Check className="size-4" />
                  </>
                ) : (
                  <>
                    Send <Send className="size-4" />
                  </>
                )}
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
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted">{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <span className="text-xs text-red-400 mt-1 block">{error}</span> : null}
    </label>
  );
}

import type { SVGProps } from "react";

const baseProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.94 10.94 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11Zm-1.5-12.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM20 19h-3v-5.6c0-1.36-.49-2.3-1.7-2.3-.93 0-1.5.62-1.74 1.22-.09.22-.11.52-.11.81V19h-3V8h3v1.27c.4-.62 1.11-1.51 2.7-1.51 1.97 0 3.45 1.28 3.45 4.04V19Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18.244 2H21.5l-7.5 8.55L23 22h-6.5l-5.094-6.66L5.5 22H2.244l8.06-9.19L1.5 2h6.66l4.6 6.07L18.244 2Zm-1.143 18h1.804L7.05 4H5.13l11.97 16Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 8 10-8" />
    </svg>
  );
}

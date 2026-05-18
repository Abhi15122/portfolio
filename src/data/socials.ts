export interface Social {
  name: string;
  href: string;
  handle: string;
}

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/Abhi15122", handle: "@Abhi15122" },
  { name: "LinkedIn", href: "https://linkedin.com/in/", handle: "TODO: Abhi — add LinkedIn handle" },
  { name: "Email", href: "mailto:abhinav15122@gmail.com", handle: "abhinav15122@gmail.com" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

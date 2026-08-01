export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/help", label: "Help" },
];

export function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

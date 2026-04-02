import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snack Scout",
  description: "Quickly evaluate kids snacks with practical, clear nutrition verdicts."
};

const navItems = [
  { href: "/search", label: "Search" },
  { href: "/scan", label: "Scan" },
  { href: "/saved", label: "Saved" },
  { href: "/preferences", label: "Preferences" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <nav className="fixed bottom-0 left-0 right-0 border-t border-stone-200 bg-white/95 backdrop-blur">
          <ul className="mx-auto flex max-w-3xl items-center justify-around px-2 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium text-stone-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </body>
    </html>
  );
}

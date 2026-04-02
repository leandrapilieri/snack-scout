import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ScanLine, UserRound } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snack Scout",
  description: "Quickly evaluate kids snacks with practical, clear nutrition verdicts."
};

const navItems = [
  { href: "/scan", label: "Scan", icon: ScanLine },
  { href: "/saved", label: "Favorites", icon: Heart },
  { href: "/preferences", label: "Profile", icon: UserRound }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="top-bar">
            <span className="text-sm">⚙️</span>
            <p className="text-sm font-semibold text-[#2E5A47]">Mindful Guardian</p>
            <span className="text-sm">⟲</span>
          </header>
          <main>{children}</main>
        </div>
        <nav className="fixed bottom-0 left-0 right-0">
          <ul className="mx-auto grid w-full max-w-[430px] grid-cols-3 border-x border-t border-[#d7d5cf] bg-[#F7F6F2] px-2 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-stone-600">
                  <item.icon className="h-4 w-4" />
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

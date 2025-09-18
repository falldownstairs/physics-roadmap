"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", id: crypto.randomUUID()},
    { href: "/mechanics", label: "Mechanics", id: crypto.randomUUID()},
    { href: "/electricity-magnetism", label: "Electricity & Magnetism", id: crypto.randomUUID()},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl border-b border-slate-200">
      <div className="mx-auto flex justify-between items-center px-3 py-3">
        <div className="flex gap-3">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`font-bold mx-0.5 px-5 py-1.5 rounded-full transition-all duration-200 ${
                pathname === link.href
                  ? "text-black bg-slate-200"
                  : "text-slate-600 hover:text-black hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200">
          Sign In
        </button>
      </div>
    </nav>
  );
}
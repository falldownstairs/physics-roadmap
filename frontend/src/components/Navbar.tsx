"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/roadmap", label: "Roadmap" },
    
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container flex gap-2 p-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-bold mx-0.5 px-5 py-1.5 rounded-lg transition-all duration-200 hover:bg-blue-50 ${
              pathname == link.href &&
                "text-black bg-blue-100"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const links = [
    { href: "/", label: "Home", icon: "/icons/home.png" },
    { href: "/mechanics", label: "Mechanics", icon: "/icons/mechanics.png" },
    { href: "/electricity-magnetism", label: "Electricity & Magnetism", icon: "/icons/electricity-magnetism.png" },
    { href: "/about", label: "About", icon: "/icons/about.png" },
  ];

  const isCalendActive = pathname === "/calend";

  return (
    <>
      <nav className="relative top-0 left-0 right-0 z-30 bg-white border-b border-slate-200">
        <div className="mx-auto flex items-center justify-between px-4 py-2 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className={`inline-flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200 whitespace-nowrap min-w-[2.5rem] ${isActive
                    ? "text-black bg-slate-200"
                    : "text-slate-600 hover:text-black hover:bg-slate-100"
                    }`}
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={22}
                    height={22}
                    className={`block sm:hidden ${isActive
                      ? "brightness-0"
                      : "brightness-0 opacity-60"
                      }`}
                  />
                  <span className="hidden sm:inline font-bold">{link.label}</span>
                </Link>
              );
            })}

            <Link
              href="/calend"
              aria-label="Calend"
              className={`inline-flex items-center justify-center px-3 py-1 rounded-full transition-all duration-200 whitespace-nowrap min-w-[2.5rem] ${isCalendActive
                ? "text-black bg-slate-200"
                : "text-slate-600 hover:text-black hover:bg-slate-100"
                }`}
            >
              <Image
                src="/icons/calend.png"
                alt="Calend"
                width={22}
                height={22}
                className={`block sm:hidden ${isCalendActive ? "brightness-0" : "brightness-0 opacity-60"}`}
              />
              <span className="hidden sm:inline font-bold">Calend</span>
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSignOutModalOpen(true)}
                className="w-9 h-9 rounded-full overflow-hidden hover:ring-2 hover:ring-slate-300 transition-all duration-200 flex items-center justify-center bg-slate-200"
              >
                {user?.profilePicture ? (
                  <>
                    <img
                      src={user.profilePicture}
                      alt={user.displayName || "User"}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <span className="hidden text-sm font-semibold text-slate-600">
                      {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "?"}
                    </span>
                  </>
                ) : (
                  <span className="text-sm font-semibold text-slate-600">
                    {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "?"}
                  </span>
                )}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSignInModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />

      <SignOutModal
        isOpen={isSignOutModalOpen}
        onClose={() => setIsSignOutModalOpen(false)}
      />
    </>
  );
}
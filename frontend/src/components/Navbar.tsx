"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignInModal from "./SignInModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const links = [
    { href: "/", label: "Home", id: crypto.randomUUID()},
    { href: "/mechanics", label: "Mechanics", id: crypto.randomUUID()},
    { href: "/electricity-magnetism", label: "Electricity & Magnetism", id: crypto.randomUUID()},
  ];

  return (
    <>
      <nav className="relative top-0 left-0 right-0 z-30 bg-white border-b border-slate-200">
        <div className="mx-auto flex justify-between items-center px-3 py-2">
          <div className="flex gap-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`font-bold mx-0.5 px-3 py-1 rounded-full transition-all duration-200 ${
                  pathname === link.href
                    ? "text-black bg-slate-200"
                    : "text-slate-600 hover:text-black hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {user?.profilePicture && (
                <img 
                  src={user.profilePicture} 
                  alt={user.displayName || "User"} 
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-sm font-medium">{user?.displayName}</span>
              <button 
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 rounded-full transition-all duration-200"
              >
                Sign Out
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
    </>
  );
}
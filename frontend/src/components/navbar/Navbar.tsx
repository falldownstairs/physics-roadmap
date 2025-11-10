"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const { user, isAuthenticated} = useAuth();

  const links = [
    { href: "/", label: "Home", id: crypto.randomUUID()},
    { href: "/mechanics", label: "Mechanics", id: crypto.randomUUID()},
    { href: "/electricity-magnetism", label: "Electricity & Magnetism", id: crypto.randomUUID()},
  ];

  return (
    <>
      <nav className="relative top-0 left-0 right-0 z-30 bg-white border-b border-slate-200">
        <div className="mx-auto flex justify-between items-center px-7 py-2">
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
              <button 
                onClick={() => setIsSignOutModalOpen(true)}
                className="w-9 h-9 rounded-full overflow-hidden hover:ring-2 hover:ring-slate-300 transition-all duration-200 flex items-center justify-center bg-slate-200"
              >
                {user?.profilePicture ? (
                  <img 
                    src={user.profilePicture} 
                    alt={user.displayName || "User"} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If image fails to load, show initials instead
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <span className={`text-sm font-semibold text-slate-600 ${user?.profilePicture ? 'hidden' : ''}`}>
                  {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
                </span>
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
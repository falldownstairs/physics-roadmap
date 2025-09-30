"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignOutModal({ isOpen, onClose }: SignOutModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { logout, user } = useAuth();

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handleSignOut = () => {
    logout();
    handleClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'bg-black/30 opacity-100' : 'bg-black/0 opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform transition-all duration-300 relative z-50 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign Out</h2>
          {user?.displayName && (
            <p className="text-slate-600">Signed in as {user.displayName}</p>
          )}
        </div>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-full transition-all duration-200 font-medium"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

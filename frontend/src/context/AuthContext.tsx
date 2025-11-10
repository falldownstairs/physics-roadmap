"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  displayName: string;
  profilePicture?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      console.log('Fetching user data...');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/auth/user`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User data received:', data);
        
        if (data.isAuthenticated && data.user) {
          // Validate profile picture URL
          const userData = data.user;
          
          // Check if profile picture is accessible
          if (userData.profilePicture) {
            try {
              const imgResponse = await fetch(userData.profilePicture, { method: 'HEAD' });
              if (!imgResponse.ok) {
                console.warn('Profile picture URL is stale, clearing it');
                userData.profilePicture = undefined;
              }
            } catch (err) {
              console.warn('Failed to validate profile picture, clearing it');
              userData.profilePicture = undefined;
            }
          }
          
          setUser(userData);
          // Persist user data to localStorage
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          setUser(null);
          localStorage.removeItem('user');
        }
      } else {
        console.log('User fetch failed:', response.status);
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      // On network error, try to restore from localStorage
      const cachedUser = localStorage.getItem('user');
      if (cachedUser) {
        try {
          const userData = JSON.parse(cachedUser);
          // Don't use cached profile picture URL as it may be expired
          userData.profilePicture = undefined;
          setUser(userData);
          console.log('Restored user from cache (without profile picture)');
        } catch {
          localStorage.removeItem('user');
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to load cached user immediately for faster UI
    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      try {
        setUser(JSON.parse(cachedUser));
      } catch {
        localStorage.removeItem('user');
      }
    }
    
    // Then verify with backend
    fetchUser();
    
    // Refetch user when tab becomes visible (in case auth happened in another tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchUser();
      }
    };
    
    // Periodically refresh session (every 15 minutes)
    const refreshInterval = setInterval(() => {
      fetchUser();
    }, 15 * 60 * 1000);
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(refreshInterval);
    };
  }, []);

  const logout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      isAuthenticated: !!user,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
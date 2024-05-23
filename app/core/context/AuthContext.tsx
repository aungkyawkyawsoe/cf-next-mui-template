'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useHotToast } from './ToastContext';

interface User {
  username: string;
  email: string;
  password: string;
  role: string;
  org: string[];
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const mockUsers: User[] = [
  { username: "Leon Davis", email: "leon@davis.com", password: "123456", role: "admin", org: ["ORG-001", "ORG-002"] },
  { username: "Alice Smith", email: "alice@smith.com", password: "password", role: "user", org: ["ORG-001"] },
  { username: "Bob Johnson", email: "bob@johnson.com", password: "password", role: "user", org: ["ORG-002"] },
  { username: "Carol White", email: "carol@white.com", password: "password", role: "editor", org: ["ORG-001"] },
  { username: "Dave Brown", email: "dave@brown.com", password: "password", role: "editor", org: ["ORG-002"] },
  { username: "Eve Green", email: "eve@green.com", password: "password", role: "admin", org: ["ORG-001", "ORG-002"] },
  { username: "Frank Black", email: "frank@black.com", password: "password", role: "user", org: ["ORG-001"] },
  { username: "Grace Yellow", email: "grace@yellow.com", password: "password", role: "user", org: ["ORG-002"] },
  { username: "Hank Blue", email: "hank@blue.com", password: "password", role: "editor", org: ["ORG-001"] },
  { username: "Ivy Pink", email: "ivy@pink.com", password: "password", role: "editor", org: ["ORG-002"] },
  { username: "Jack Red", email: "jack@red.com", password: "password", role: "admin", org: ["ORG-001", "ORG-002"] }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  const router = useRouter();
  const { showToast } = useHotToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  const login = (email: string, password: string) => {
    const foundUser = mockUsers.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('user', JSON.stringify(foundUser));
      }
      showToast('Login successful!', 'success');
      router.push('/');
    } else {
      showToast('Invalid email or password', 'error', { position: 'top-center' });
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user');
    }
    showToast('Logged out successfully!', 'success');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

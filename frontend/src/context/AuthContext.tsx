import { createContext, useContext, useMemo, useState } from 'react';
import type { User } from '../types/User';

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    login: (email: string, _password: string) => {
      setUser({ id: '1', email, name: 'Demo User', role: 'admin' });
    },
    logout: () => setUser(null)
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider');
  return ctx;
}

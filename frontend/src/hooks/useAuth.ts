import { useState } from 'react';
import type { User } from '../types/User';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string, _password: string) {
    void _password;
    // Placeholder: integrate with backend later
    const fakeUser: User = { id: '1', email, name: 'Demo User', role: 'admin' };
    setUser(fakeUser);
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout };
}

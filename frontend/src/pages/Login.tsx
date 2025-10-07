import { useState } from 'react';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import { useAuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-white">
      <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-lg p-6 w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full">Sign in</Button>
      </form>
    </div>
  );
}

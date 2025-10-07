import type { ButtonHTMLAttributes } from 'react';

export default function Button({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-3 py-2 rounded bg-primary hover:bg-primary-dark disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

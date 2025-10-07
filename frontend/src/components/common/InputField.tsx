import type { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, className = '', ...props }: Props) {
  return (
    <label className="block text-sm">
      {label && <span className="block mb-1 text-white/70">{label}</span>}
      <input
        className={`w-full bg-transparent border border-white/10 rounded px-3 py-2 ${className}`}
        {...props}
      />
    </label>
  );
}

import type { ReactNode } from 'react';

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, open, onClose, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-background-soft border border-white/10 rounded-lg w-full max-w-lg">
        <div className="flex items-center justify-between border-b border-white/10 px-4 h-12">
          <div className="font-medium">{title}</div>
          <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

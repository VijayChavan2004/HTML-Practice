import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) => (
  `block rounded px-3 py-2 text-sm ${isActive ? 'bg-primary text-white' : 'text-white/80 hover:bg-white/5'}`
);

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 h-full border-r border-white/10 bg-background-soft p-3 text-white">
      <nav className="space-y-1">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
        <NavLink to="/reports" className={linkClass}>Reports</NavLink>
        <NavLink to="/settings" className={linkClass}>Settings</NavLink>
      </nav>
    </aside>
  );
}

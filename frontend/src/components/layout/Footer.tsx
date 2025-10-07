export default function Footer() {
  return (
    <footer className="h-10 flex items-center justify-center text-xs text-white/50 border-t border-white/10">
      © {new Date().getFullYear()} Space AI
    </footer>
  );
}

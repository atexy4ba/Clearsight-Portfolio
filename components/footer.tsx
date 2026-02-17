import { Instagram, Mail, Phone, Dot } from 'lucide-react';
import Link from 'next/link';

// A cleaner, more standard SVG for TikTok
export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a4.2 4.2 0 1 1-4.2-4.2c.14-.43.33-.85.58-1.24" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold font-[var(--font-poly)]">Clearsight</h3>
            <p className="text-muted-foreground text-sm mt-1">Visual Storytelling at Its Finest.</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0550 550 550</span>
            </div>
            <Dot className="hidden md:block text-primary/50" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:clearsightprod@gmail.com" className="hover:text-primary transition-colors">
                clearsightprod@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/clearsight_prod/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.tiktok.com/@clearsightprod" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clearsight. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

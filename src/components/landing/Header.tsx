import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır?", href: "#how" },
  { label: "Güvenlik", href: "#security" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "SSS", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl text-white font-bold"
              style={{ background: "linear-gradient(135deg,#6C5CE7,#4834D4)", boxShadow: "0 8px 24px -8px rgba(108,92,231,0.7)" }}
            >
              D
            </div>
            <span className="font-display text-base font-semibold tracking-tight">Dolap Asistan</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden sm:inline-flex btn-violet btn-violet-hover items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Hemen İndir
            </a>
            <button
              className="md:hidden glass rounded-lg p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden animate-fade-in">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <a href="#pricing" className="btn-violet btn-violet-hover mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold">
                <Download className="h-4 w-4" /> Hemen İndir
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

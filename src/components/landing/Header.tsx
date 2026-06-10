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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-[#23272C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-[#FF7E36] text-[#0B0C0E] font-bold text-sm">
              D
            </div>
            <span className="font-display text-[15px] font-semibold tracking-tight">Dolap Asistan</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden sm:inline-flex btn-dolap btn-dolap-hover items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              Hemen İndir
            </a>
            <button
              className="md:hidden rounded-md p-2 border border-[#23272C]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-[#23272C] py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <a href="#pricing" className="btn-dolap btn-dolap-hover mt-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold">
                <Download className="h-4 w-4" /> Hemen İndir
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

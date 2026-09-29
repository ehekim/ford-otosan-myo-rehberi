'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#ulasim', label: 'ULAŞIM' },
  { href: '#yurt', label: 'YURT' },
  { href: '#kampus', label: 'KAMPÜS' },
  { href: '#sinav', label: 'SINAV' },
  { href: '#kaynaklar', label: 'KAYNAKLAR' },
  { href: '#kentkart', label: 'KENT KART' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/25 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink p-1">
            <Image
              src="/images/kou-logo.png"
              alt="Kocaeli Üniversitesi logosu"
              width={28}
              height={28}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-mono text-xs leading-tight tracking-label sm:text-sm">
            FOIMYO
            <br />
            <span className="text-ink/60">REHBER.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-label text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kaynaklar"
          className="hidden rounded-full bg-ink px-5 py-2 font-mono text-xs tracking-label text-cream transition-colors hover:bg-ink-soft lg:inline-block"
        >
          BAŞLA →
        </a>

        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/20 bg-cream px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 font-mono text-sm tracking-label text-ink/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

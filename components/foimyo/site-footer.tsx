import Image from 'next/image'
import { MessageSquarePlus } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function SiteFooter() {
  return (
    <footer className="grain relative bg-ink text-cream">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream p-1.5">
              <Image
                src="/images/kou-logo.png"
                alt="Kocaeli Üniversitesi logosu"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-mono text-xs tracking-label text-cream/70">
              KOCAELİ ÜNİVERSİTESİ
              <br />
              FORD OTOSAN MYO
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
            Hoş geldiniz,
            <br />
            <span className="text-stroke" style={{ WebkitTextStrokeColor: '#e8e3d6' }}>
              başarılar.
            </span>
          </h2>

          <div className="flex flex-col justify-between gap-4 border-t border-cream/20 pt-6 font-mono text-[11px] tracking-label text-cream/50 sm:flex-row sm:items-center">
            <span>{'\\\\ 1. SINIF ÖĞRENCİ REHBERİ'}</span>
            <span>GÖLCÜK / KOCAELİ — 2025 · 2026</span>
            <span>{'{ BİLGİLENDİRME AMAÇLIDIR }'}</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 border-t border-cream/20 pt-6 text-sm text-cream/80 sm:flex-row sm:gap-6">
            <a
              href="https://forms.gle/AxZC6kJXcuB89GY49"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 font-mono text-[11px] tracking-label text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <MessageSquarePlus size={14} aria-hidden="true" />
              GERİ BİLDİRİM / KATKIDA BULUN
            </a>
            <span aria-hidden="true" className="hidden h-5 w-px bg-cream/20 sm:block" />
            <div className="flex items-center gap-3">
            <span className="font-semibold">Efe Soner Hekim</span>
            <span aria-hidden="true" className="text-cream/40">
              —
            </span>
            <a
              href="https://github.com/ehekim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Efe Soner Hekim GitHub profili"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"
            >
              <GithubIcon size={16} />
            </a>
            <span aria-hidden="true" className="text-cream/40">
              •
            </span>
            <a
              href="https://www.linkedin.com/in/efesonerhekim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Efe Soner Hekim LinkedIn profili"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"
            >
              <LinkedinIcon size={16} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

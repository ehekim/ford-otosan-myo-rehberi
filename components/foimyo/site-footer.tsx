import Image from 'next/image'

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
            Hoş geldin,
            <br />
            <span className="text-stroke" style={{ WebkitTextStrokeColor: '#e8e3d6' }}>
              başarılar.
            </span>
          </h2>

          <div className="flex flex-col justify-between gap-4 border-t border-cream/20 pt-6 font-mono text-[11px] tracking-label text-cream/50 sm:flex-row sm:items-center">
            <span>{'\\\\ 1. SINIFLAR İÇİN REHBER'}</span>
            <span>GÖLCÜK / KOCAELİ — 2025 · 2026</span>
            <span>{'{ ÖĞRENCİDEN ÖĞRENCİYE }'}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

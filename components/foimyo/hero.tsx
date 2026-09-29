import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink/25">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        {/* Left: photo */}
        <div className="grain relative min-h-[280px] overflow-hidden border-b border-ink/25 bg-ink lg:min-h-[640px] lg:border-b-0 lg:border-r">
          <Image
            src="/images/foimyo.png"
            alt="Ford Otosan Meslek Yüksekokulu binası"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-95 grayscale contrast-110"
          />
          <div className="absolute left-4 top-4 z-10 font-mono text-xs tracking-label text-cream/80 sm:left-6 sm:top-6">
            {'{ KOCAELİ / GÖLCÜK }'}
          </div>
          <div className="absolute bottom-4 left-4 z-10 font-mono text-[11px] leading-relaxed text-cream/70 sm:bottom-6 sm:left-6">
            FORD OTOSAN
            <br />
            MESLEK YÜKSEKOKULU
          </div>
        </div>

        {/* Right: type */}
        <div className="grain relative flex flex-col justify-between bg-paper px-4 py-8 sm:px-8 sm:py-12">
          <div className="relative z-10 flex items-center justify-between font-mono text-xs tracking-label text-ink/60">
            <span>( 2025 — 2026 )</span>
            <span>1. SINIF REHBERİ</span>
          </div>

          <div className="relative z-10 my-8">
            <h1 className="text-[15vw] font-black uppercase leading-[0.82] tracking-tight sm:text-[9vw] lg:text-[7.5vw]">
              Yeni
              <br />
              <span className="text-stroke">Başlayan</span>
              <br />
              Kılavuzu
            </h1>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <p className="max-w-sm text-pretty text-base leading-relaxed text-ink/80">
              Okula nasıl gelinir, yemekhane nasıl çalışır, sınav sistemi nedir?
              Ford Otosan MYO&apos;da ilk yılını yaşayacak herkes için hazırlanmış,
              abisi-ablası ağzından pratik bir rehber.
            </p>
            <div className="flex flex-col gap-3 self-end">
              <a
                href="#ulasim"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-mono text-xs tracking-label text-cream transition-colors hover:bg-ink-soft"
              >
                REHBERE BAŞLA ↓
              </a>
              <span className="font-mono text-[11px] text-ink/50">
                {'\\\\ Kocaeli Üniversitesi'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

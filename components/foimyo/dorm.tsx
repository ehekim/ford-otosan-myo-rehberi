import { SectionShell } from './section-shell'

const steps = [
  {
    n: '01',
    stop: '42351 — Ali Fuat Cebesoy Yurt Durağı',
    action: '755 numaralı otobüse bin',
  },
  {
    n: '02',
    stop: '70517 — Atatürk Bulvarı Çiftlik Durağı',
    action: 'Bu durakta in',
  },
  {
    n: '03',
    stop: 'Alt geçitten karşıya geç',
    action: '681 veya 682 numaralı otobüse bin',
  },
]

export function Dorm() {
  return (
    <SectionShell
      id="yurt"
      index="02"
      kicker="KYK — ALİ FUAT CEBESOY YURDU"
      dark
      title={
        <>
          Yurttan
          <br />
          Okula
        </>
      }
      intro="Ali Fuat Cebesoy Yurdu'nda kalıyorsan okula ulaşmanın en pratik yolu üç adımdan oluşuyor."
    >
      <ol className="grid gap-px overflow-hidden border border-cream/20 bg-cream/20 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col gap-4 bg-ink p-6 sm:p-8">
            <span className="font-mono text-6xl font-black leading-none text-cream/25">
              {s.n}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-label text-cream/50">
                DURAK
              </span>
              <span className="text-lg font-bold leading-snug text-cream">
                {s.stop}
              </span>
              <span className="mt-2 border-t border-cream/15 pt-3 text-sm leading-relaxed text-cream/75">
                → {s.action}
              </span>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-mono text-[11px] tracking-label text-cream/40">
        {'\\\\ Kalkış saatlerini Ekomobil uygulamasından teyit et'}
      </p>
    </SectionShell>
  )
}

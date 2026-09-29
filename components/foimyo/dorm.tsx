import { SectionShell } from './section-shell'

type Step = { stop: string; action: string }
type DormRoute = {
  code: string
  dorm: string
  title: string
  lines: string[]
  steps: Step[]
}

const dormRoutes: DormRoute[] = [
  {
    code: 'ROTA 01',
    dorm: 'ALİ FUAT CEBESOY YURDU',
    title: 'Hastane aktarmalı rota',
    lines: ['681', '682', '755'],
    steps: [
      {
        stop: '70077 — Bayramoğlu Caddesi 1 Durağı',
        action: '681 veya 682 numaralı hatta binilir.',
      },
      {
        stop: 'Hastane Durağı',
        action: 'Bu durakta inilir ve 70421 numaralı Atatürk Bulvarı Çiftlik Durağı\'na yürünür.',
      },
      {
        stop: '70421 — Atatürk Bulvarı Çiftlik Durağı',
        action: '755 numaralı hatta binilerek yolculuk tamamlanır.',
      },
    ],
  },
  {
    code: 'ROTA 02',
    dorm: 'ALİ FUAT CEBESOY YURDU',
    title: 'İzmit / Yeşilova aktarmalı rota',
    lines: ['680', '692', '66', '86', '90', '100'],
    steps: [
      {
        stop: '70077 — Bayramoğlu Caddesi 1 Durağı',
        action: '680 veya 692 numaralı hatta binilir.',
      },
      {
        stop: 'Esnaf Kefalet Durağı (İzmit)',
        action: 'Bu durakta inilir ve orta yoldaki durağa geçilir.',
      },
      {
        stop: 'Orta Yol Durağı',
        action: '66, 86, 90 veya 100 numaralı hatlarla Yeşilova\'ya gidilir; oradan yurda geçilir.',
      },
    ],
  },
  {
    code: 'ROTA 03',
    dorm: 'KYK GÖLCÜK KIZ YURDU',
    title: 'Kız yurdu — okul arası',
    lines: ['710'],
    steps: [
      {
        stop: 'Kredi Yurtlar Kurumu Gölcük Durağı',
        action: '710 numaralı hatta binilir.',
      },
      {
        stop: 'Gölcük Belediyesi Fen İşleri Durağı',
        action: 'Bu durakta inilir; okul durağa yürüme mesafesindedir.',
      },
      {
        stop: 'Dönüş — Karşı Durak',
        action: 'Karşı duraktan tekrar 710\'a binilir ve aynı KYK durağında inilir.',
      },
    ],
  },
]

export function Dorm() {
  return (
    <SectionShell
      id="yurt"
      index="02"
      kicker="KYK YURTLARI — ULAŞIM ROTALARI"
      dark
      title={
        <>
          Yurt
          <br />
          Rotaları
        </>
      }
      intro="Ali Fuat Cebesoy Yurdu ve KYK Gölcük Kız Yurdu ile okul arasındaki ulaşım rotaları adım adım aşağıda yer almaktadır."
    >
      <div className="flex flex-col gap-6">
        {dormRoutes.map((r) => (
          <article
            key={r.code}
            className="overflow-hidden border border-cream/20 bg-cream/[0.03]"
          >
            <header className="flex flex-col gap-3 border-b border-cream/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] tracking-label text-cream/50">
                  {r.code} · {r.dorm}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  {r.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Kullanılan hatlar">
                {r.lines.map((l) => (
                  <li
                    key={l}
                    className="rounded-full border border-cream/30 px-3 py-1 font-mono text-xs font-bold text-cream"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </header>
            <ol className="grid gap-px bg-cream/20 md:grid-cols-3">
              {r.steps.map((s, i) => (
                <li key={s.stop} className="flex flex-col gap-4 bg-ink p-6 sm:p-8">
                  <span className="font-mono text-5xl font-black leading-none text-cream/25">
                    {String(i + 1).padStart(2, '0')}
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
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-[11px] tracking-label text-cream/40">
        {'\\\\ Kalkış saatleri Ekomobil uygulamasından teyit edilmelidir'}
      </p>
    </SectionShell>
  )
}

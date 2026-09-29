import { SectionShell } from './section-shell'

const points = [
  {
    n: '01',
    src: 'https://www.google.com/maps?cid=7462822404738928467&hl=tr&gl=TR&source=embed&output=embed',
  },
  {
    n: '02',
    src: 'https://www.google.com/maps?cid=3848804122607564839&hl=tr&gl=TR&source=embed&output=embed',
  },
  {
    n: '03',
    src: 'https://www.google.com/maps?cid=4947460514172332356&hl=tr&gl=TR&source=embed&output=embed',
  },
]

export function KentKart() {
  return (
    <SectionShell
      id="kentkart"
      index="06"
      kicker="KENT KART NEREDEN ALINIR?"
      title={
        <>
          Kent Kart
          <br />
          Noktaları
        </>
      }
      intro="Kent kartını aşağıdaki satış / dolum noktalarından alabilir ve abonman yükleyebilirsin. Abonman her zaman daha avantajlı; bakiyeni Ekomobil'den kontrol et."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.n}
            className="flex flex-col overflow-hidden border border-ink/25 bg-paper"
          >
            <div className="flex items-center justify-between border-b border-ink/20 px-5 py-3">
              <span className="font-mono text-xs tracking-label text-ink/60">
                NOKTA {p.n}
              </span>
              <span className="font-mono text-[11px] text-ink/40">KOCAELİ</span>
            </div>
            <div className="aspect-[4/3] w-full bg-ink/5">
              <iframe
                src={p.src}
                title={`Kent kart satış noktası ${p.n}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale"
                style={{ border: 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

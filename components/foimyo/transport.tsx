import { SectionShell } from './section-shell'
import { Bus, TramFront, CreditCard, MapPin } from 'lucide-react'

const routes = [
  {
    line: '680',
    tag: 'OKULA / DÖNÜŞ',
    points: [
      { label: 'OKULA GELİRKEN', stop: '4314. Sokak durağında in' },
      { label: 'OKULDAN DÖNERKEN', stop: 'Bayramoğlu Caddesi 1 durağından bin' },
    ],
  },
  {
    line: '710 / 710S',
    tag: 'OKULA / DÖNÜŞ',
    points: [
      { label: 'OKULA GELİRKEN', stop: 'Gölcük Belediyesi Fen İşleri durağında in' },
      { label: 'OKULDAN DÖNERKEN', stop: 'Gölcük Belediyesi Fen İşleri 1 durağından bin' },
    ],
  },
]

export function Transport() {
  return (
    <SectionShell
      id="ulasim"
      index="01"
      kicker="ULAŞIM & OTOBÜSLER"
      title={
        <>
          Okula Nasıl
          <br />
          Gidilir?
        </>
      }
      intro="Hangi otobüsler okula geliyor, hangi durakta inip biniyorsun? Duraklar değişebilir; her otobüsün güncel duraklarını Ekomobil uygulamasından kontrol et."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {routes.map((r) => (
          <div
            key={r.line}
            className="flex flex-col gap-5 border border-ink/25 bg-paper p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream">
                  <Bus size={18} />
                </span>
                <span className="text-3xl font-black tracking-tight sm:text-4xl">
                  {r.line}
                </span>
              </div>
              <span className="font-mono text-[11px] tracking-label text-ink/50">
                {r.tag}
              </span>
            </div>
            <div className="flex flex-col divide-y divide-ink/15 border-t border-ink/15">
              {r.points.map((p) => (
                <div key={p.label} className="flex flex-col gap-1 py-4">
                  <span className="flex items-center gap-2 font-mono text-[11px] tracking-label text-ink/50">
                    <MapPin size={12} /> {p.label}
                  </span>
                  <span className="text-lg font-semibold leading-snug">
                    {p.stop}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <InfoTile
          icon={<CreditCard size={18} />}
          title="Kent Kart & abonman"
          body="Kent karta abonman yüklemek her şekilde daha avantajlı. Kartın yoksa otobüslerde her türlü temassız banka kartı da geçerli. Bakiye ve durakları Ekomobil'den kontrol et."
        />
        <InfoTile
          icon={<Bus size={18} />}
          title="Otogardan valizle"
          body="İzmit Otogar'dan valizle çıkıyorsan en zahmetsizi peronlardan doğrudan 255'e binmek. Ekomobil'den 255'in kalkış saatini kontrol edip perona geç."
        />
        <InfoTile
          icon={<TramFront size={18} />}
          title="Şehir içinde tramvay"
          body="Şehir içi ulaşımda tramvay her zaman daha avantajlı. Kocaeli Stadyum'dan şehir hastanesine, İzmit'in her yerinden Kuruçeşme'ye kadar gidiyor."
        />
      </div>
    </SectionShell>
  )
}

function InfoTile({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="flex flex-col gap-3 border border-ink/25 bg-cream p-6">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/30">
        {icon}
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/75">{body}</p>
    </div>
  )
}

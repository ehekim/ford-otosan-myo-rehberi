import { SectionShell } from './section-shell'
import { AppleIcon, GooglePlayIcon } from './brand-icons'
import { Bus, TramFront, CreditCard, MapPin, Route, Smartphone } from 'lucide-react'

const routes = [
  {
    line: '680',
    tag: 'İZMİT ↔ OKUL',
    summary: "İzmit'ten okula, okuldan da İzmit'e sefer yapar.",
    points: [
      { label: 'OKULA GELİŞ', stop: '4314. Sokak durağında inilir' },
      { label: 'OKULDAN DÖNÜŞ', stop: 'Bayramoğlu Caddesi 1 durağından binilir' },
    ],
  },
  {
    line: '710 / 710S',
    tag: 'İZMİT → GÖLCÜK → KIZ YURDU',
    summary: "İzmit'ten kalkar, Gölcük'ü dolaşarak kız yurduna ulaşır.",
    points: [
      { label: 'OKULA GELİŞ', stop: 'Gölcük Belediyesi Fen İşleri durağında inilir' },
      { label: 'OKULDAN DÖNÜŞ', stop: 'Gölcük Belediyesi Fen İşleri 1 durağından binilir' },
    ],
  },
]

const EKOMOBIL_APP_STORE = 'https://apps.apple.com/tr/app/e-komobil/id815011495'
const EKOMOBIL_PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.kentkart.ekomobil&hl=tr&pli=1'

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
      intro="Okula sefer yapan otobüs hatları ve kullanılan duraklar aşağıda listelenmiştir. Durak ve sefer bilgileri değişebileceğinden güncel bilgilerin Ekomobil uygulamasından kontrol edilmesi önerilir."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {routes.map((r) => (
          <div
            key={r.line}
            className="flex flex-col gap-5 border border-ink/25 bg-paper p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
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
            <p className="flex items-start gap-2 rounded-md bg-ink/5 p-3 text-sm leading-relaxed text-ink/80">
              <Route size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {r.summary}
            </p>
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
          title="Kent Kart ve abonman"
          body="Kent Kart'a abonman yüklenmesi daha ekonomiktir. Kent Kart bulunmaması durumunda otobüslerde temassız banka kartları da kullanılabilir. Bakiye ve durak bilgileri Ekomobil uygulamasından takip edilebilir."
        />
        <InfoTile
          icon={<Bus size={18} />}
          title="255 — Otogardan yurda"
          body="255 numaralı hat okula değil, İzmit Otogarı'ndan yurda sefer yapar. Otogara valizle gelen öğrenciler peronlardan doğrudan 255'e binebilir. Kalkış saatleri Ekomobil uygulamasından kontrol edilmelidir."
        />
        <InfoTile
          icon={<TramFront size={18} />}
          title="Şehir içinde tramvay"
          body="Şehir içi ulaşımda tramvay pratik bir seçenektir. Hat, Kocaeli Stadyumu'ndan Şehir Hastanesi'ne ve İzmit merkezinden Kuruçeşme'ye kadar uzanır."
        />
      </div>

      <div className="mt-6 flex flex-col gap-6 border border-ink/25 bg-ink p-6 text-cream sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
            <Smartphone size={22} />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-black uppercase tracking-tight">Kocaeli Ekomobil</h3>
            <p className="max-w-xl text-sm leading-relaxed text-cream/75">
              Otobüs saatleri, durak bilgileri ve Kent Kart bakiyesi için resmi uygulama.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <StoreButton
            href={EKOMOBIL_APP_STORE}
            icon={<AppleIcon size={22} />}
            caption="Download on the"
            label="App Store"
          />
          <StoreButton
            href={EKOMOBIL_PLAY_STORE}
            icon={<GooglePlayIcon size={20} />}
            caption="GET IT ON"
            label="Google Play"
          />
        </div>
      </div>
    </SectionShell>
  )
}

function StoreButton({
  href,
  icon,
  caption,
  label,
}: {
  href: string
  icon: React.ReactNode
  caption: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ekomobil uygulamasını ${label} üzerinden indir`}
      className="inline-flex min-w-[180px] items-center gap-3 rounded-xl border border-cream/30 bg-cream px-5 py-2.5 text-ink transition-all hover:-translate-y-0.5 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide text-ink/60">
          {caption}
        </span>
        <span className="text-base font-bold">{label}</span>
      </span>
    </a>
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

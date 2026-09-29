import Image from 'next/image'
import { SectionShell } from './section-shell'
import {
  UtensilsCrossed,
  Coffee,
  ShoppingCart,
  Clapperboard,
  Clock,
  Wallet,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

const nearby = [
  { name: 'Şok · Bim · Hakmar', note: '680 durağının yakınında' },
  { name: 'Dönerci & Pideci', note: 'İhsaniye merkezde' },
  { name: 'Kokoreççi', note: 'Okula yaklaşık 500 m' },
]

export function CampusLife() {
  return (
    <SectionShell
      id="kampus"
      index="03"
      kicker="YEMEKHANE · KANTİN · ÇEVRE"
      title={
        <>
          Kampüs
          <br />
          Hayatı
        </>
      }
      intro="Yemekhane kullanımı, kantin ve teras imkânları ile okul çevresindeki temel hizmetler hakkında bilgiler."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Yemekhane */}
        <div className="flex flex-col gap-5 border border-ink/25 bg-paper p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream">
              <UtensilsCrossed size={18} />
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight">Yemekhane</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Fact icon={<Clock size={14} />} label="SAATLER" value="11.30 – 13.00 arası öğle yemeği" />
            <Fact icon={<Wallet size={14} />} label="ÜCRET" value="Ziraat kartıyla 40 TL" />
          </div>
          <div className="border-t border-ink/15 pt-4 text-sm leading-relaxed text-ink/80">
            <p>
              Kart başvurusu <strong>ÖBS üzerinden</strong> yapılır ve kart Gölcük
              Ziraat Bankası şubesine teslim edilir. Ziraat Bankası uygulamasından
              karta bakiye yüklendikten sonra okuldaki{' '}
              <strong>POS cihazından bakiye güncellemesi</strong> yapılmalıdır.
            </p>
            <p className="mt-3 rounded-md bg-ink/5 p-3 font-mono text-[12px] leading-relaxed text-ink/70">
              {'>'} 1. sınıf öğrencileri için dönem başında bir hafta süreyle imza
              karşılığı nakit ödeme kabul edilmektedir.
            </p>
          </div>
        </div>

        {/* Kantin & teras */}
        <div className="flex flex-col gap-5 border border-ink/25 bg-cream p-6 sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30">
              <Coffee size={18} />
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight">Kantin & Teras</h3>
          </div>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-ink/80">
            <li className="flex gap-2">
              <span className="text-ink/40">—</span> Kantinde çay, kahve, tost
              çeşitleri ve atıştırmalıklar satılmaktadır.
            </li>
            <li className="flex gap-2">
              <span className="text-ink/40">—</span> Teras ve yemekhane{' '}
              <strong>3. kattadır.</strong>
            </li>
            <li className="flex gap-2">
              <span className="text-ink/40">—</span> Ters katta{' '}
              <strong>bilardo ve langırt</strong> bulunmaktadır.
            </li>
            <li className="flex gap-2">
              <span className="text-ink/40">—</span> Sigara yalnızca terasın
              belirlenmiş bölümlerinde içilebilir; diğer tüm alanlarda yasaktır.
            </li>
          </ul>
        </div>

        {/* Çevre */}
        <div className="flex flex-col gap-5 border border-ink/25 bg-cream p-6 sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30">
              <ShoppingCart size={18} />
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight">Çevrede Ne Var?</h3>
          </div>
          <div className="flex flex-col divide-y divide-ink/15 border-y border-ink/15">
            {nearby.map((n) => (
              <div key={n.name} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-semibold">{n.name}</span>
                <span className="text-right font-mono text-[11px] tracking-label text-ink/55">
                  {n.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Symbol AVM feature */}
        <div className="relative flex flex-col justify-between overflow-hidden border border-ink/25 bg-ink text-cream lg:col-span-7">
          <div className="grain relative h-48 w-full overflow-hidden sm:h-60">
            <Image
              src="/images/symbol-avm.png"
              alt="Symbol AVM"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-2 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink">
                <Clapperboard size={18} />
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight">Symbol AVM</h3>
            </div>
            <p className="text-sm leading-relaxed text-cream/80">
              Symbol AVM&apos;de <strong>KOÜ öğrencilerine indirimli sinema bileti</strong>{' '}
              uygulanmaktadır. Alışveriş, yeme-içme ve sosyal etkinlikler için
              okula en yakın alışveriş merkezidir.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Symbol+AVM+Kocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-mono text-xs tracking-label text-ink transition-colors hover:bg-paper"
            >
              <MapPin size={14} aria-hidden="true" />
              HARİTADA GÖR
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-1 border border-ink/20 bg-cream p-4">
      <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-label text-ink/50">
        {icon} {label}
      </span>
      <span className="font-semibold leading-snug">{value}</span>
    </div>
  )
}

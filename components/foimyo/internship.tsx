import Image from 'next/image'
import { SectionShell } from './section-shell'
import { ArrowUpRight, FileText, BookOpen, MousePointerClick } from 'lucide-react'

const STAJ_URL = 'https://foimyo.kocaeli.edu.tr/'

const steps = [
  {
    n: '01',
    title: 'FOİMYO web sitesine girin',
    body: 'foimyo.kocaeli.edu.tr adresindeki resmi okul sitesini açın.',
  },
  {
    n: '02',
    title: 'Öğrenci → Formlar menüsü',
    body: 'Üst menüdeki "Öğrenci" başlığından form sayfasına geçin ve soldaki listeden "Staj" sekmesini seçin.',
  },
  {
    n: '03',
    title: 'Belgeleri indirin',
    body: 'Güncel yıla ait Staj Başvuru Formu ve Staj Defteri\'ni PDF veya Word formatında indirin.',
  },
]

const documents = [
  { icon: <FileText size={16} />, name: 'Staj Başvuru Formu', formats: 'PDF · WORD' },
  { icon: <BookOpen size={16} />, name: 'Staj Defteri', formats: 'PDF · WORD' },
  { icon: <FileText size={16} />, name: 'Staj Defteri Yazım Esasları', formats: 'PDF' },
  { icon: <FileText size={16} />, name: 'Staj Sicil Fişi', formats: 'PDF' },
  { icon: <FileText size={16} />, name: 'Staj ve İME Yönergesi', formats: 'PDF' },
  { icon: <FileText size={16} />, name: 'Staj İş Akış Süreci', formats: 'PDF' },
]

export function Internship() {
  return (
    <SectionShell
      id="staj"
      index="06"
      kicker="STAJ BAŞVURU FORMU & STAJ DEFTERİ"
      title={
        <>
          Staj
          <br />
          Belgeleri
        </>
      }
      intro="Staj başvuru formu, staj defteri ve ilgili tüm belgeler okulun resmi web sitesindeki Staj sayfasında yayımlanmaktadır. Belgelere aşağıdaki adımlar izlenerek ulaşılabilir."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <ol className="flex flex-col divide-y divide-ink/15 border border-ink/25 bg-paper">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 p-6">
                <span className="font-mono text-3xl font-black leading-none text-ink/25">
                  {s.n}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold leading-snug">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={STAJ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 rounded-full bg-ink px-6 py-4 font-mono text-xs tracking-label text-cream transition-colors hover:bg-ink-soft"
          >
            <span className="flex items-center gap-2">
              <MousePointerClick size={16} aria-hidden="true" />
              FOİMYO STAJ SAYFASINA GİT
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <figure className="overflow-hidden border border-ink/25 bg-paper">
            <div className="flex items-center gap-2 border-b border-ink/20 bg-cream px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
              <span className="ml-3 truncate rounded-full bg-ink/5 px-3 py-0.5 font-mono text-[11px] text-ink/60">
                foimyo.kocaeli.edu.tr
              </span>
            </div>
            <div className="relative aspect-[1915/954] w-full bg-ink/5">
              <Image
                src="/images/staj-formlari.png"
                alt="FOİMYO web sitesinde Staj sekmesi ve staj başvuru formu, staj defteri belgelerinin listelendiği sayfa"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="border-t border-ink/20 px-4 py-3 font-mono text-[11px] tracking-label text-ink/50">
              {'\\\\ Öğrenci → Formlar → Staj sekmesi görünümü'}
            </figcaption>
          </figure>

          <ul className="grid gap-px overflow-hidden border border-ink/25 bg-ink/15 sm:grid-cols-2">
            {documents.map((d) => (
              <li key={d.name} className="flex items-center justify-between gap-3 bg-cream px-5 py-4">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  {d.icon}
                  {d.name}
                </span>
                <span className="shrink-0 font-mono text-[10px] tracking-label text-ink/50">
                  {d.formats}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}

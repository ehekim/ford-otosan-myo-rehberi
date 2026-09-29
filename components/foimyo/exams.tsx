import { SectionShell } from './section-shell'
import Image from 'next/image'
import { CalendarX, ClipboardCheck, AlertTriangle, Sigma, ArrowUpRight } from 'lucide-react'

const CALENDAR_URL = 'https://odb.kocaeli.edu.tr/sayfalar/akademik-takvim-974k'

const grades = ['FF', 'FD', 'DD', 'DC', 'CC', 'CB', 'BB', 'BA', 'AA']

export function Exams() {
  return (
    <SectionShell
      id="sinav"
      index="04"
      kicker="SINAV SİSTEMİ & ÇAN EĞRİSİ"
      dark
      title={
        <>
          Sınavlar &<br />
          Notlandırma
        </>
      }
      intro="Üniversitede notlandırma, lisedeki sabit geçme notu sisteminden farklıdır. Devamsızlık sınırı, vize–final oranları ve bağıl değerlendirme (çan eğrisi) sistemi aşağıda özetlenmiştir."
    >
      {/* Quick facts */}
      <div className="grid gap-6 md:grid-cols-3">
        <DarkTile
          icon={<CalendarX size={18} />}
          title="Devamsızlık"
          big="4"
          body="Her ders için 4 devamsızlık hakkı bulunur. Bu sınırın aşılması durumunda öğrenci devamsızlıktan kalır."
        />
        <DarkTile
          icon={<ClipboardCheck size={18} />}
          title="Vize & Final"
          big="%30 / %70"
          body="Örnek: vizenin %30'u + finalin %70'i. Oranlar dersi veren öğretim elemanına göre değişebilir. Vizenin telafisi yoktur; finalde başarısız olan öğrenci bütünleme sınavına girer."
        />
        <DarkTile
          icon={<Sigma size={18} />}
          title="Takvim"
          big="ODB"
          body="Vize, final ve bütünleme tarihleri akademik takvimde ilan edilir. Takvime aşağıdaki bağlantıdan ulaşılabilir."
        />
      </div>

      {/* Akademik takvim önizleme */}
      <div className="mt-6 grid gap-6 border border-cream/20 bg-cream/[0.03] p-6 sm:p-8 lg:grid-cols-5 lg:items-center">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <span className="font-mono text-[11px] tracking-label text-cream/50">
            AKADEMİK TAKVİM
          </span>
          <h3 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Tarihleri Takip Et
          </h3>
          <p className="text-sm leading-relaxed text-cream/75">
            Kocaeli Üniversitesi ana sayfasında <strong>Öğrenci → Genel → Akademik Takvim</strong>{' '}
            yolunu izleyerek güncel takvime ulaşabilirsin. Ders kayıtları, vize, final ve
            bütünleme haftaları burada ilan edilir.
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-mono text-xs font-bold tracking-label text-ink transition-opacity hover:opacity-85"
          >
            AKADEMİK TAKVİME GİT
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Akademik takvim sayfasını yeni sekmede aç"
          className="group lg:col-span-3"
        >
          <figure className="overflow-hidden rounded-md border border-cream/25 bg-cream">
            <div className="flex items-center gap-2 border-b border-ink/15 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="ml-2 font-mono text-[11px] tracking-label text-ink/50">
                kocaeli.edu.tr
              </span>
            </div>
            <div className="relative aspect-[1913/896] w-full">
              <Image
                src="/images/akademik-takvim.png"
                alt="Kocaeli Üniversitesi web sitesinde Öğrenci menüsü altında Akademik Takvim bağlantısının bulunduğu sayfa"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </figure>
        </a>
      </div>

      {/* Çan eğrisi */}
      <div className="mt-6 border border-cream/20 bg-cream/[0.03] p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-label text-cream/50">
            BAĞIL DEĞERLENDİRME
          </span>
          <h3 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Çan Eğrisi
          </h3>
          <p className="max-w-3xl text-sm leading-relaxed text-cream/75">
            Not, tek başına değil <strong>sınıfın o sınavdaki genel başarısına göre</strong>{' '}
            değerlendirilir. Sınıf ortalaması <strong>35</strong> olduğunda{' '}
            <strong>42</strong> puan ortalamanın üzerinde kalır ve CB/BB harf notuna
            karşılık gelebilir. Ortalama <strong>80</strong> olduğunda ise{' '}
            <strong>60</strong> puan ortalamanın altında kalarak FD/FF notuna
            karşılık gelebilir.
          </p>
        </div>

        {/* Grade scale */}
        <div className="mt-6">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-label text-cream/50">
            <span>← ORTALAMA ALTI</span>
            <span>ORTALAMA (CC)</span>
            <span>ORTALAMA ÜSTÜ →</span>
          </div>
          <div className="mt-2 grid grid-cols-9 overflow-hidden rounded-md border border-cream/25">
            {grades.map((g) => (
              <div
                key={g}
                className={
                  g === 'CC'
                    ? 'flex items-center justify-center bg-cream py-3 font-mono text-sm font-bold text-ink'
                    : 'flex items-center justify-center border-l border-cream/15 py-3 font-mono text-sm text-cream/70 first:border-l-0'
                }
              >
                {g}
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-cream/45">
            {'>'} Sınıftaki herkesin notları toplanır → aritmetik ortalama + standart sapma
            → Gauss (çan) eğrisi oluşur. Ortalamanın göbeği genelde CC kabul edilir.
          </p>
        </div>

        {/* Kurallar */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Rule
            title="Baraj notu"
            body="Bağıl değerlendirmenin uygulanabilmesi için bir alt sınır vardır (örn. finalden en az 40–50). Sınıf ortalaması düşük olsa dahi baraj notunun altında kalan öğrenci dersten başarısız sayılır."
          />
          <Rule
            title="Mutlak değerlendirme"
            body="Sınıf mevcudu az olduğunda (genellikle 15–20 kişinin altı) ya da öğretim elemanı bağıl sistemi uygulamadığında mutlak değerlendirme yapılır: 50 ve üzeri puan alan öğrenci başarılı sayılır."
          />
        </div>
      </div>
    </SectionShell>
  )
}

function DarkTile({
  icon,
  title,
  big,
  body,
}: {
  icon: React.ReactNode
  title: string
  big: string
  body: string
}) {
  return (
    <div className="flex flex-col gap-3 border border-cream/20 bg-cream/[0.03] p-6">
      <span className="flex items-center gap-2 font-mono text-[11px] tracking-label text-cream/50">
        {icon} {title}
      </span>
      <span className="text-4xl font-black tracking-tight text-cream">{big}</span>
      <p className="text-sm leading-relaxed text-cream/70">{body}</p>
    </div>
  )
}

function Rule({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-3 border-t border-cream/20 pt-4">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cream/30">
        <AlertTriangle size={13} />
      </span>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-cream">{title}</h4>
        <p className="text-sm leading-relaxed text-cream/70">{body}</p>
      </div>
    </div>
  )
}

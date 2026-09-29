import { SectionShell } from './section-shell'
import { CalendarX, ClipboardCheck, AlertTriangle, Sigma } from 'lucide-react'

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
          body="Vize, final ve bütünleme tarihleri akademik takvimde ilan edilir. Takvime Kaynaklar bölümünden ulaşılabilir."
        />
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

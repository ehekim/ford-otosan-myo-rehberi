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
      intro="Üniversitede lisedeki gibi '50 aldım geçtim' yok. Devamsızlık hakkın, vize–final oranları ve çan eğrisinin nasıl çalıştığını baştan bilmek işini kolaylaştırır."
    >
      {/* Quick facts */}
      <div className="grid gap-6 md:grid-cols-3">
        <DarkTile
          icon={<CalendarX size={18} />}
          title="Devamsızlık"
          big="4"
          body="Her ders için 4 devamsızlık hakkın var. Aşarsan devamsızlıktan kalırsın."
        />
        <DarkTile
          icon={<ClipboardCheck size={18} />}
          title="Vize & Final"
          big="%30 / %70"
          body="Örnek: vizenin %30'u + finalin %70'i. Oranlar hocaya göre değişir. Vizenin tekrarı yok; finalden kalırsan bütünlemeye girersin."
        />
        <DarkTile
          icon={<Sigma size={18} />}
          title="Takvim"
          big="ODB"
          body="Vize, final ve büt tarihlerinin hepsi akademik takvimde açıklanır. Kaynaklar bölümünden ulaşabilirsin."
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
            Notun tek başına değil, <strong>sınıfın o sınavdaki genel başarısına göre</strong>{' '}
            değer kazanır. Ortalama <strong>35</strong>&apos;e düşerse aldığın{' '}
            <strong>42</strong> ortalamanın üstünde kalır ve CB/BB bile getirebilir.
            Ortalama <strong>80</strong> çıkarsa aldığın <strong>60</strong> altta kalıp
            FD/FF ile kalmana sebep olabilir.
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
            body="Çanın uygulanabilmesi için bir alt limit vardır (örn. finalden en az 40–50). Sınıf ortalaması 20 bile olsa barajın altında kalırsan çan seni kurtarmaz, doğrudan kalırsın."
          />
          <Rule
            title="Kataloğa (mutlak) düşme"
            body="Sınıf mevcudu çok azsa (genelde 15–20 kişinin altı) ya da hoca bağıl sistemi kapatırsa mutlak sistem uygulanır: eski usul 50 alan geçer, altı kalır."
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

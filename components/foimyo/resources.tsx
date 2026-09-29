import { SectionShell } from './section-shell'
import { ArrowUpRight, Wifi } from 'lucide-react'

const links = [
  {
    label: 'ÖĞRENCİ BİLGİ SİSTEMİ (ÖBS)',
    desc: 'Not, ders kaydı, başvurular',
    href: 'https://ogr.kocaeli.edu.tr/KOUBS/Ogrenci/index.cfm',
  },
  {
    label: 'AKADEMİK TAKVİM',
    desc: 'Vize, final ve büt tarihleri',
    href: 'https://odb.kocaeli.edu.tr/sayfalar/akademik-takvim-974k',
  },
  {
    label: 'FOIMYO WEB SİTESİ',
    desc: 'Okulun resmi sitesi',
    href: 'https://foimyo.kocaeli.edu.tr/',
  },
  {
    label: 'e-DESTEK',
    desc: 'Ders sunumları ve materyaller',
    href: 'https://edestek1.kocaeli.edu.tr/login/index.php?loginredirect=1',
  },
]

export function Resources() {
  return (
    <SectionShell
      id="kaynaklar"
      index="05"
      kicker="FAYDALI LİNKLER & WİFİ"
      title={
        <>
          Kaynaklar
          <br />& Erişim
        </>
      }
      intro="Sık kullanılan resmi bağlantılar ve kampüs kablosuz ağ erişim bilgisi."
    >
      <div className="grid gap-px overflow-hidden border border-ink/25 bg-ink/15 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 bg-paper p-6 transition-colors hover:bg-cream sm:p-8"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs tracking-label text-ink/50">
                {l.desc}
              </span>
              <span className="text-xl font-black uppercase leading-tight tracking-tight sm:text-2xl">
                {l.label}
              </span>
            </div>
            <ArrowUpRight
              size={24}
              className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 border border-ink/25 bg-ink p-6 text-cream sm:flex-row sm:items-center sm:gap-6 sm:p-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
          <Wifi size={22} />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-black uppercase tracking-tight">Kampüs WiFi</h3>
          <p className="text-sm leading-relaxed text-cream/80">
            Kampüs kablosuz ağına <strong>öğrenci numarası ve ÖBS şifresi</strong> ile
            bağlanılır. Ek bir kurulum gerekmemektedir.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

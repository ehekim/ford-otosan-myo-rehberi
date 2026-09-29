import { SiteNav } from '@/components/foimyo/site-nav'
import { Hero } from '@/components/foimyo/hero'
import { Transport } from '@/components/foimyo/transport'
import { Dorm } from '@/components/foimyo/dorm'
import { CampusLife } from '@/components/foimyo/campus-life'
import { Exams } from '@/components/foimyo/exams'
import { Resources } from '@/components/foimyo/resources'
import { KentKart } from '@/components/foimyo/kent-kart'
import { Internship } from '@/components/foimyo/internship'
import { SiteFooter } from '@/components/foimyo/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-cream text-ink font-sans selection:bg-ink selection:text-cream">
      <SiteNav />
      <Hero />
      <Transport />
      <Dorm />
      <CampusLife />
      <Exams />
      <Resources />
      <Internship />
      <KentKart />
      <SiteFooter />
    </main>
  )
}

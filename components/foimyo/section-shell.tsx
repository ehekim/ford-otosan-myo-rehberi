import type { ReactNode } from 'react'

type Props = {
  id: string
  index: string
  kicker: string
  title: ReactNode
  intro?: ReactNode
  dark?: boolean
  children: ReactNode
}

export function SectionShell({
  id,
  index,
  kicker,
  title,
  intro,
  dark = false,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={
        dark
          ? 'grain relative border-b border-ink/25 bg-ink text-cream'
          : 'grain relative border-b border-ink/25 bg-cream text-ink'
      }
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col gap-4 border-b border-current/20 pb-8 sm:mb-14">
          <div className="flex items-center justify-between font-mono text-xs tracking-label opacity-60">
            <span>( {index} )</span>
            <span>{kicker}</span>
          </div>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          {intro && (
            <p className="max-w-2xl text-pretty text-base leading-relaxed opacity-80">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

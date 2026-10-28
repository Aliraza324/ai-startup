import { ArrowRight } from 'lucide-react'

export default function TechStackSection({ onOpenContact }) {
  const row1 = [
    {
      name: 'React / Next.js',
      icon: (
        <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <div className="w-8 h-8 rounded bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs">
          TS
        </div>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'Supabase Auth',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3ECF8E">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.82 13.914a.396.396 0 0 0 .316.634H12v9.052a.396.396 0 0 0 .716.233l10.464-13.751a.396.396 0 0 0-.318-.634" />
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93A8.001 8.001 0 0 1 4.07 13H6v-2H4.07A8.001 8.001 0 0 1 11 4.07V6h2V4.07A8.001 8.001 0 0 1 19.93 11H18v2h1.93A8.001 8.001 0 0 1 13 18.93z" />
        </svg>
      ),
    },
  ]

  const row2 = [
    {
      name: 'Supabase RLS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3ECF8E">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#181717">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'GitHub Actions',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2088FF">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="12" cy="19" r="2.5" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#000000">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#848775] block">
              Technology Stack
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              Modern Tools for Scalable Applications.
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed">
              We use industry-leading technologies to build high-performance and secure applications.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#A5A798]/30 text-[#590907] text-xs font-semibold hover:bg-[#A5A798]/50 transition-colors cursor-pointer"
              >
                <span>View Full Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Rows of White Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Row 1: 5 cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {row1.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-[#E8D2B5]/60 hover:border-[#D4B999] transition-colors min-h-[110px]"
                >
                  <div className="mb-2 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-medium text-[#1C1917] leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {row2.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-[#E8D2B5]/60 hover:border-[#D4B999] transition-colors min-h-[110px]"
                >
                  <div className="mb-2 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-medium text-[#1C1917] leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#848775] pt-2 text-center sm:text-left">
              Final technology choices depend on your existing project architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

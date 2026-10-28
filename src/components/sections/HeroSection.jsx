import {
  ArrowRight,
  Shield,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react'
import heroBgImg from '../../assets/codesinc-hero-bg.jpg'

export default function HeroSection({ onOpenContact }) {
  const scrollToProcess = (e) => {
    e.preventDefault()
    const target = document.querySelector('#process')
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const featurePillars = [
    { title: 'Secure Architecture', icon: Shield },
    { title: 'Scalable Applications', icon: Layers },
    { title: 'Clean Code', icon: Code2 },
    { title: 'Production Ready', icon: CheckCircle2 },
  ]

  return (
    <section className="relative bg-[#F5EDE4] overflow-hidden min-h-[92vh] lg:min-h-[780px] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* Photorealistic 3D Architectural Editorial Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={heroBgImg}
          alt="AI Startup Prototype to Production Architecture Studio"
          className="w-full h-full object-cover object-[70%_center] sm:object-right lg:object-center"
          loading="eager"
        />
        {/* Soft edge blend for mobile screens */}
        <div className="absolute inset-0 bg-[#F5EDE4]/40 lg:hidden block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Actions & Pillars (6 cols) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#848775] block">
              Lovable to Production
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-bold tracking-tight leading-[1.06]">
              <span className="text-[#3E0605] block sm:whitespace-nowrap">
                From AI Prototype&nbsp;to
              </span>
              <span className="text-[#3E0605] block">
                Production-Ready
              </span>
              <span className="text-[#6E7260] block">
                Product.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#57534E] max-w-lg leading-relaxed">
              We turn Lovable-generated prototypes into secure, scalable applications with solid architecture, reliable data access, and production-minded engineering.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex items-center gap-2 sm:gap-4 flex-nowrap">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#590907] text-[#E8D2B5] text-[11px] sm:text-xs font-semibold hover:bg-[#74110E] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#process"
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#D4B999] bg-[#FAF7F2]/60 text-[#590907] text-[11px] sm:text-xs font-semibold hover:bg-[#FAF7F2] transition-colors whitespace-nowrap"
              >
                Explore Our Process
              </a>
            </div>

            {/* Micro Feature Icons */}
            <div className="pt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#57534E]">
              {featurePillars.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E8D2B5] flex items-center justify-center shrink-0 text-[#590907]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-[11px] leading-tight text-[#3E0605]">
                      {item.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Spacer (Unobstructed view of the 3D architectural glass schemas & pedestal) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>
      </div>
    </section>
  )
}

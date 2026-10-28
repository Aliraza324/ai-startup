import { ArrowUp, ArrowRight } from 'lucide-react'
import ctaMountainsImg from '../../assets/cta-mountains.jpg'

export default function FinalCTASection({ onOpenContact }) {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Landscape Photo Background */}
        <div className="relative rounded-3xl overflow-hidden bg-[#290403] text-white">
          {/* Alpine Background Image */}
          <img
            src={ctaMountainsImg}
            alt="Alpine peaks representing production height"
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-luminosity opacity-40"
          />

          {/* Warm Dark Scrim */}
          <div className="absolute inset-0 bg-[#290403]/75" />

          {/* Content Container */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading and CTAs (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E8D2B5] block">
                  Let's Build Together
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  Ready to Turn Your Prototype Into a Real Product?
                </h2>

                <p className="text-sm sm:text-base text-[#E8D2B5]/85 max-w-2xl leading-relaxed">
                  Let's assess your existing application and identify the engineering work needed to move it toward production readiness.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E8D2B5] text-[#3E0605] text-xs font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E8D2B5]/30 text-[#E8D2B5] text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span>Back to Top</span>
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Editorial Script / Brand Accent (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
                <div className="bg-[#1C1917]/60 rounded-2xl p-6 border border-white/10 max-w-xs">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#E8D2B5] block leading-tight font-[family-name:var(--font-handwriting)]">
                    &ldquo;Ideas &rarr; Production&rdquo;
                  </span>
                  <p className="text-xs text-[#E8D2B5]/75 mt-2 leading-relaxed">
                    Bridging rapid AI generation with resilient, high-volume production systems.
                  </p>
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#A5A798] font-semibold">
                      Engineering Agency
                    </span>
                    <span className="font-serif font-bold text-sm text-[#E8D2B5]">
                      AI Startup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

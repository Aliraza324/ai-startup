import { XCircle, CheckCircle, Heart, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ProblemSolutionSection({ onOpenContact }) {
  const prototypeIssues = [
    'Incomplete authorization',
    'Weak database access policies',
    'Unstructured codebase',
    'Missing validation & error handling',
    'Deployment configuration gaps',
  ]

  const productionSolutions = [
    'Secure authentication & authorization',
    'Proper database policies & RLS',
    'Clean, maintainable code structure',
    'Validated inputs & error handling',
    'Staging & production deployment',
  ]

  return (
    <section id="challenge" className="py-20 md:py-28 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: The Challenge Headline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#848775] block">
              The Challenge
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              Your Prototype Is the Starting Point.{' '}
              <span className="text-[#590907]">Not the</span>{' '}
              <span className="text-[#590907]">Finish</span> Line.
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed">
              AI-generated prototypes are a great start, but they often lack production-grade security, architecture and reliability.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#590907] text-[#E8D2B5] text-xs font-semibold hover:bg-[#74110E] transition-colors cursor-pointer"
              >
                <span>See How We Fix It</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Comparative Card Layout (7 cols) */}
          <div className="lg:col-span-7 bg-[#EFE5D8] rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Left Side: Prototype (Lovable) */}
              <div className="w-full md:w-1/2 p-4 space-y-4">
                <div className="flex items-center gap-2 pb-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span className="font-serif text-base font-bold text-[#1C1917]">
                    Prototype (Lovable)
                  </span>
                </div>

                <ul className="space-y-3">
                  {prototypeIssues.map((issue) => (
                    <li key={issue} className="flex items-start gap-2.5 text-xs text-[#57534E]">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Middle Transition Bead */}
              <div className="w-10 h-10 rounded-full bg-[#57534E]/20 text-[#1C1917] flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-[#57534E]" />
              </div>

              {/* Right Side: Production-Ready (White Card) */}
              <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 space-y-4 border border-[#E8D2B5]/60">
                <div className="flex items-center gap-2 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-serif text-base font-bold text-[#1C1917]">
                    Production-Ready
                  </span>
                </div>

                <ul className="space-y-3">
                  {productionSolutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2.5 text-xs text-[#1C1917] font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

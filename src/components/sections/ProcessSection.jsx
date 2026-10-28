import { Search, Code2, Shield, Rocket, ArrowRight } from 'lucide-react'

export default function ProcessSection({ onOpenContact }) {
  const steps = [
    {
      id: 'audit',
      label: 'Step A',
      title: 'Audit',
      icon: Search,
      description: 'Review the existing codebase, UI, dependencies and flows.',
    },
    {
      id: 'engineer',
      label: 'Step B',
      title: 'Engineer',
      icon: Code2,
      description: 'Improve architecture, components and validation.',
    },
    {
      id: 'secure',
      label: 'Step C',
      title: 'Secure',
      icon: Shield,
      description: 'Implement auth, authorization, RLS and environment setup.',
    },
    {
      id: 'deploy',
      label: 'Step D',
      title: 'Deploy',
      icon: Rocket,
      description: 'Run checks, verify workflows, and prepare staging deployment.',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#848775] block">
              Our Process
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              A Clear Path From Prototype to Production.
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed">
              Our structured approach ensures your application is secure, scalable and ready for real-world use.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#590907] text-[#E8D2B5] text-xs font-semibold hover:bg-[#74110E] transition-colors cursor-pointer"
              >
                <span>Learn More About Our Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Connected Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.id}
                    className="bg-[#EFE5D8] rounded-2xl p-5 flex flex-col justify-between space-y-6 relative"
                  >
                    {/* Top capsule with icon */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#3E0605] text-[#E8D2B5] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Horizontal Connector bead (between columns on desktop) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2.5 top-8 w-2 h-2 rounded-full bg-[#D4B999] z-10" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  Globe,
  Database,
  Lock,
  GitBranch,
  CheckCircle2,
  FileText,
  BookOpen,
  Clock,
  ArrowRight,
} from 'lucide-react'

export default function DeliverablesSection({ onOpenContact }) {
  const deliverables = [
    {
      title: 'Staging Application',
      desc: 'Functional, ready-to-use.',
      icon: Globe,
    },
    {
      title: 'Connected Frontend & DB',
      desc: 'Full integration with Supabase.',
      icon: Database,
    },
    {
      title: 'Authentication & Permissions',
      desc: 'User access and role controls.',
      icon: Lock,
    },
    {
      title: 'Source Code Repository',
      desc: 'GitHub with clean structure.',
      icon: GitBranch,
    },
    {
      title: 'Automated Checks',
      desc: 'Linting and build verification.',
      icon: CheckCircle2,
    },
    {
      title: 'Architecture Overview',
      desc: 'System design and tech stack.',
      icon: FileText,
    },
    {
      title: 'Setup & Deployment Docs',
      desc: 'Step-by-step instructions.',
      icon: BookOpen,
    },
    {
      title: 'Technical Walkthrough',
      desc: 'Short demo and documentation.',
      icon: Clock,
    },
  ]

  return (
    <section id="deliverables" className="py-20 md:py-28 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#848775] block">
              Deliverables
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              What You'll Receive
            </h2>

            <p className="text-sm text-[#57534E] leading-relaxed">
              Everything you need to launch, maintain and scale your application.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#590907] text-[#E8D2B5] text-xs font-semibold hover:bg-[#74110E] transition-colors cursor-pointer"
              >
                <span>Explore All Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 8 Deliverables Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {deliverables.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between border border-[#E8D2B5]/60 min-h-[110px] sm:min-h-[120px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#590907] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#1C1917] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#57534E] mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
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

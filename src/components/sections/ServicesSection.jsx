import {
  SearchIcon,
  BoxesIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  LockKeyholeIcon,
  FileCheckIcon,
  GitBranchIcon,
  GaugeIcon,
} from 'lucide-animated'

export default function ServicesSection({ onOpenContact }) {
  const services = [
    {
      id: 'audit',
      title: 'Prototype Audit & Codebase Assessment',
      icon: SearchIcon,
      description: 'Review and analyze your existing code, UI and flows.',
    },
    {
      id: 'architecture',
      title: 'Frontend Architecture & Refactoring',
      icon: BoxesIcon,
      description: 'Build scalable, reusable components with clean structure.',
    },
    {
      id: 'auth',
      title: 'Authentication & Authorization',
      icon: ShieldCheckIcon,
      description: 'Secure user access and role-based permissions.',
    },
    {
      id: 'database',
      title: 'Supabase & PostgreSQL Integration',
      icon: DatabaseIcon,
      description: 'Connect and optimize your database architecture.',
    },
    {
      id: 'security',
      title: 'Database Security & Row Level Security',
      icon: LockKeyholeIcon,
      description: 'Protect your data with RLS and access policies.',
    },
    {
      id: 'validation',
      title: 'Application Validation & Error Handling',
      icon: FileCheckIcon,
      description: 'Ensure data integrity and better user experience.',
    },
    {
      id: 'cicd',
      title: 'CI/CD & Staging Deployment',
      icon: GitBranchIcon,
      description: 'Automate builds and deploy to staging and production.',
    },
    {
      id: 'readiness',
      title: 'Production Readiness Assessment',
      icon: GaugeIcon,
      description: 'Verify performance, security and scalability.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-[#1B1E17] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-14">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A5A798] block">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Engineering Capabilities<br />
              That Turn Ideas Into Products.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-[#A5A798] leading-relaxed">
              We provide end-to-end engineering support to transform AI-generated prototypes into secure, scalable and maintainable applications.
            </p>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                onClick={onOpenContact}
                className="bg-[#24291F] rounded-2xl p-6 flex flex-col justify-between border border-[#3B4233] hover:border-[#E8D2B5]/50 transition-colors cursor-pointer group"
              >
                <div>
                  {/* Top Bar: Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#2E3427] text-[#E8D2B5] flex items-center justify-center group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A5A798] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

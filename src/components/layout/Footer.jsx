import { ArrowUp, ArrowUpRight } from 'lucide-react'

export default function Footer({ onOpenContact }) {
  const currentYear = 2026

  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Technology', href: '#technology' },
    { label: 'Security', href: '#security' },
    { label: 'Deliverables', href: '#deliverables' },
  ]

  const serviceLinks = [
    'Prototype Code Audit',
    'Frontend Refactoring',
    'Authentication & RBAC',
    'Supabase & PostgreSQL',
    'Row Level Security (RLS)',
    'CI/CD & Staging Setup',
  ]

  return (
    <footer className="bg-[#F5EDE4] text-[#1C1917] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-[#590907]">&lt;/&gt;</span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
                AI Startup
              </span>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed max-w-sm">
              Engineering agency specializing in transforming AI-generated Lovable prototypes into secure, maintainable, and scalable production-ready full-stack applications.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E8D2B5]/40 text-xs text-[#590907] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Currently Accepting Q4 / Q1 Projects</span>
              </div>
            </div>
          </div>

          {/* Navigation links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs text-[#590907] font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#57534E]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-[#590907] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs text-[#590907] font-bold block mb-4">
              Engineering Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#57534E]">
              {serviceLinks.map((item) => (
                <span key={item} className="flex items-center gap-1.5 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#590907]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#590907] hover:underline"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E]">
          <p>
            &copy; {currentYear} AI Startup. All rights reserved. Built for AI prototype modernization.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[#590907] hover:text-[#74110E] transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

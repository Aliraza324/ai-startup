import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Technology', href: '#technology' },
    { label: 'Security', href: '#security' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (href === '#contact') {
      onOpenContact()
      return
    }
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,padding] duration-200 ${
        isScrolled
          ? 'bg-[#F5EDE4]/95 backdrop-blur-md py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo: </> AI Startup */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-serif font-bold text-lg text-[#590907]">&lt;/&gt;</span>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
              AI Startup
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium text-[#57534E] hover:text-[#590907] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#590907] text-[#E8D2B5] text-xs font-semibold hover:bg-[#74110E] transition-colors cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#590907] hover:bg-[#E8D2B5]/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5EDE4] px-4 pt-4 pb-6 shadow-xl"> {/* taste-skill-ignore */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#E8D2B5]/40 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenContact()
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#590907] text-[#E8D2B5] text-xs font-semibold"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

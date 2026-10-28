import {
  ShieldAlert,
  Zap,
  Lock,
  CheckCircle,
  Code2,
  Cpu,
  Terminal,
  ArrowRight,
} from 'lucide-react'
import securityShieldImg from '../../assets/security-shield.jpg'

export default function SecuritySection({ onOpenContact }) {
  const securityItems = [
    {
      title: 'Authentication & Authorization',
      desc: 'Secure user access and permissions.',
      icon: ShieldAlert,
    },
    {
      title: 'Database Access Controls',
      desc: 'Use RLS and proper policies.',
      icon: Zap,
    },
    {
      title: 'Secure Environment Config',
      desc: 'Keep sensitive data protected.',
      icon: Lock,
    },
    {
      title: 'Input Validation',
      desc: 'Prevent invalid or malicious data.',
      icon: CheckCircle,
    },
    {
      title: 'Error Handling',
      desc: 'Handles issues gracefully.',
      icon: Code2,
    },
    {
      title: 'Maintainable Architecture',
      desc: 'Clean and flexible code.',
      icon: Cpu,
    },
    {
      title: 'Automated Build Checks',
      desc: 'Catch issues early.',
      icon: Terminal,
    },
  ]

  return (
    <section id="security" className="py-20 md:py-28 bg-[#4A0706] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E8D2B5]/70 block">
              Security & Reliability
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Built Beyond the Demo.
            </h2>

            <p className="text-sm text-[#E8D2B5]/80 leading-relaxed">
              We implement industry best practices to keep your application secure, reliable and maintainable.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E8D2B5]/40 text-[#E8D2B5] text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Our Security Approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 7 Security Cards + Golden Shield (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#E8D2B5]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#E8D2B5]/75 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}

              {/* 8th Slot: 3D Metallic Gold Shield Badge */}
              <div className="hidden sm:flex items-center justify-center p-2 relative">
                <img
                  src={securityShieldImg}
                  alt="Security Verification Shield"
                  className="w-24 h-24 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

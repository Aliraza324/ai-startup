import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function ContactModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prototypeUrl: '',
    timeline: '2-4 weeks',
    priorities: initialService ? [initialService] : ['Database & Supabase RLS'],
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const priorityOptions = [
    'Database & Supabase RLS',
    'Authentication & Role Permissions',
    'Frontend Architecture & Refactoring',
    'Input Validation & Error Handling',
    'CI/CD & Staging Deployment',
    'Complete Production Readiness Audit',
  ]

  const handlePriorityToggle = (item) => {
    setFormData((prev) => {
      const exists = prev.priorities.includes(item)
      if (exists) {
        return { ...prev, priorities: prev.priorities.filter((p) => p !== item) }
      } else {
        return { ...prev, priorities: [...prev.priorities, item] }
      }
    })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      prototypeUrl: '',
      timeline: '2-4 weeks',
      priorities: ['Database & Supabase RLS'],
      notes: '',
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          data-ui
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1C1917]/70"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl overflow-hidden my-8 z-10 /* taste-skill-ignore */"
          >
            {/* Header bar */}
            <div className="bg-[#590907] px-6 py-4 flex items-center justify-between text-[#E8D2B5]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8D2B5]" />
                <span className="text-xs font-semibold">
                  AI Startup Technical MVP Engagement
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#E8D2B5]/80 hover:text-white p-1 rounded-md hover:bg-white/10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-serif text-3xl font-bold text-[#590907] mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#57534E] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#1C1917]">{formData.name}</strong>. Our senior engineers will review your project scope and Lovable prototype details within 24 business hours.
                  </p>
                  <div className="bg-[#E8D2B5]/40 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs text-[#57534E] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#57534E]">Contact Email:</span>
                      <span className="font-medium text-[#1C1917]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#57534E]">Target Timeline:</span>
                      <span className="font-medium text-[#1C1917]">{formData.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#57534E]">Key Priorities:</span>
                      <span className="font-medium text-[#1C1917]">{formData.priorities.length} selected</span>
                    </div>
                  </div>
                  <Button variant="primary" onClick={handleReset}>
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Badge variant="sand" size="sm" className="mb-2">
                      Engineering Consultation
                    </Badge>
                    <h3
                      id="contact-modal-title"
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#590907]"
                    >
                      Discuss Your Lovable Project
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                      Share your current prototype state and production targets. We will evaluate architecture, database design, and staging requirements.
                    </p>
                  </div>

                  {/* Grid for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#590907] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white text-[#1C1917] focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-stone-300 focus:border-[#590907] focus:ring-[#590907]/20'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#590907] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white text-[#1C1917] focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-stone-300 focus:border-[#590907] focus:ring-[#590907]/20'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Prototype Link & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#590907] mb-1.5">
                        Prototype / Repo URL <span className="text-[#57534E] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.prototypeUrl}
                        onChange={(e) => setFormData({ ...formData, prototypeUrl: e.target.value })}
                        placeholder="https://lovable.dev/projects/..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white text-[#1C1917] focus:outline-none focus:border-[#590907] focus:ring-2 focus:ring-[#590907]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#590907] mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white text-[#1C1917] focus:outline-none focus:border-[#590907] focus:ring-2 focus:ring-[#590907]/20"
                      >
                        <option value="Urgent (1-2 weeks)">Urgent (1–2 weeks)</option>
                        <option value="Standard (2-4 weeks)">Standard (2–4 weeks)</option>
                        <option value="Flexible (1-2 months)">Flexible (1–2 months)</option>
                        <option value="Exploratory Architecture">Exploratory Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Priorities */}
                  <div>
                    <label className="block text-xs font-semibold text-[#590907] mb-2">
                      Primary Engineering Focus Areas
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {priorityOptions.map((opt) => {
                        const isChecked = formData.priorities.includes(opt)
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => handlePriorityToggle(opt)}
                            className={`flex items-center gap-2.5 text-left px-3 py-2 rounded-lg text-xs font-medium transition-[background-color,color] duration-150 ${
                              isChecked
                                ? 'bg-[#590907] text-[#E8D2B5]'
                                : 'bg-white text-[#57534E] hover:bg-[#E8D2B5]/30'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 ${
                                isChecked
                                  ? 'bg-[#E8D2B5] text-[#590907]'
                                  : 'bg-stone-200'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3 h-3 text-[#590907]" />}
                            </span>
                            <span className="truncate">{opt}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#590907] mb-1.5">
                      Current Architecture Notes or Blockers
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your application stack, database requirements, or launch target..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white text-[#1C1917] focus:outline-none focus:border-[#590907] focus:ring-2 focus:ring-[#590907]/20"
                    />
                  </div>

                  {/* Submission */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#57534E]">
                      <ShieldCheck className="w-4 h-4 text-[#590907]" />
                      <span>Confidential technical NDA included</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Button
                        variant="ghost"
                        size="md"
                        onClick={onClose}
                        className="w-full sm:w-auto"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={loading}
                        className="w-full sm:w-auto min-w-[170px]"
                        icon={Send}
                      >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

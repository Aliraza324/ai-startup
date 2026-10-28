import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSection from '../components/sections/ProcessSection'
import TechStackSection from '../components/sections/TechStackSection'
import SecuritySection from '../components/sections/SecuritySection'
import DeliverablesSection from '../components/sections/DeliverablesSection'
import FinalCTASection from '../components/sections/FinalCTASection'
import ContactModal from '../components/sections/ContactModal'

export default function HomePage() {
  const [userOpenedModal, setUserOpenedModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const isContactRoute = location.pathname === '/contact'
  const isModalOpen = userOpenedModal || isContactRoute

  const handleOpenContact = (serviceName = '') => {
    setSelectedService(serviceName)
    setUserOpenedModal(true)
  }

  const handleCloseContact = () => {
    setUserOpenedModal(false)
    if (isContactRoute) {
      navigate('/', { replace: true })
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#FAF7F2] text-[#1C1917] selection:bg-[#590907] selection:text-[#E8D2B5] relative">
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main id="main-content">
        <HeroSection onOpenContact={() => handleOpenContact()} />
        <ProblemSolutionSection onOpenContact={() => handleOpenContact()} />
        <ServicesSection onOpenContact={() => handleOpenContact()} />
        <ProcessSection onOpenContact={() => handleOpenContact()} />
        <TechStackSection />
        <SecuritySection onOpenContact={() => handleOpenContact()} />
        <DeliverablesSection onOpenContact={() => handleOpenContact()} />
        <FinalCTASection onOpenContact={() => handleOpenContact()} />
      </main>

      <Footer onOpenContact={() => handleOpenContact()} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />
    </div>
  )
}

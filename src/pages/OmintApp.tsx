import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import TabSection from '../components/TabSection'
import ProductTab from './ProductTab'
import FooterSection from '../components/FooterSection'

import type { TabId } from '../App'

const CLIENT_NAME = 'Omint'
const CLIENT_LOGO = '/images/logo-omint.png'

export default function OmintApp() {
  const [activeTab, setActiveTab] = useState<TabId>('product')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab)
    const content = document.getElementById('content')
    if (content) {
      const tabSection = document.getElementById('tab-section')
      const tabHeight = tabSection?.offsetHeight || 0
      const contentTop = content.offsetTop - tabHeight
      window.scrollTo({ top: contentTop, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#0a1628] to-[#060f1d]">
      <div className="noise" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow-spot w-[900px] h-[900px] -top-40 -right-40" />
        <div className="glow-spot w-[700px] h-[700px] bottom-0 -left-60" />
        <div className="glow-gold w-[400px] h-[400px] top-1/3 right-1/4" />
      </div>

      <Navigation scrolled={scrolled} clientName={CLIENT_NAME} clientLogo={CLIENT_LOGO} />
      <HeroSection clientName={CLIENT_NAME} />

      <TabSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isDark={true}
        clientName={CLIENT_NAME}
        clientLogo={CLIENT_LOGO}
        visibleTabs={['product']}
      />

      <main id="content" className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductTab isDark={true} />
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterSection isDark={true} clientName={CLIENT_NAME} clientLogo={CLIENT_LOGO} />
    </div>
  )
}

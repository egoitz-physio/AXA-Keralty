import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import TabSection from './TabSection'
import FooterSection from './FooterSection'
import ProductTab from '../pages/ProductTab'
import ValueTab from '../pages/ValueTab'
import ImplementTab from '../pages/ImplementTab'
import ObjetivoTab from '../pages/ObjetivoTab'
import ResultsTab from '../pages/ResultsTab'

export type TabId = 'objetivo' | 'results' | 'product' | 'value' | 'implement'
export type ClientBrand = 'standard' | 'zurich'

interface ClientPresentationAppProps {
  clientName: string
  clientLogo?: string
  homePath?: string
  brand?: ClientBrand
  visibleTabs?: TabId[]
  initialTab?: TabId
}

export default function ClientPresentationApp({
  clientName,
  clientLogo,
  homePath = '/',
  brand = 'standard',
  visibleTabs = ['objetivo', 'product', 'value', 'implement'],
  initialTab = 'objetivo',
}: ClientPresentationAppProps) {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab)
  const [scrolled, setScrolled] = useState(false)
  const isZurich = brand === 'zurich'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = `Fisify × ${clientName} | Expertos en tu bienestar`
    return () => {
      document.title = previousTitle
    }
  }, [clientName])

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
    <div className={`min-h-screen relative ${isZurich ? 'bg-gradient-to-b from-[#07152d] via-[#0a2347] to-[#050b18]' : 'bg-gradient-to-b from-[#0a1628] to-[#060f1d]'}`}>
      <div className="noise" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`glow-spot w-[900px] h-[900px] -top-40 -right-40 ${isZurich ? 'opacity-70' : ''}`} />
        <div className={`glow-spot w-[700px] h-[700px] bottom-0 -left-60 ${isZurich ? 'opacity-60' : ''}`} />
        <div className={isZurich ? 'glow-blue w-[420px] h-[420px] top-1/3 right-1/4' : 'glow-gold w-[400px] h-[400px] top-1/3 right-1/4'} />
        {isZurich && <div className="glow-blue w-[260px] h-[260px] bottom-24 right-10 opacity-70" />}
      </div>

      <Navigation scrolled={scrolled} clientName={clientName} clientLogo={clientLogo} homePath={homePath} brand={brand} />
      <HeroSection clientName={clientName} />

      <TabSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isDark={true}
        clientName={clientName}
        clientLogo={clientLogo}
        brand={brand}
        visibleTabs={visibleTabs}
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
            {activeTab === 'objetivo' && <ObjetivoTab isDark={true} clientName={clientName} />}
            {activeTab === 'results' && <ResultsTab isDark={true} clientName={clientName} />}
            {activeTab === 'product' && <ProductTab isDark={true} clientName={clientName} />}
            {activeTab === 'value' && <ValueTab isDark={true} clientName={clientName} />}
            {activeTab === 'implement' && <ImplementTab isDark={true} clientName={clientName} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterSection isDark={true} clientName={clientName} clientLogo={clientLogo} brand={brand} />
    </div>
  )
}

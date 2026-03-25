import { motion } from 'framer-motion'
import { Cpu, Diamond, Rocket, type LucideIcon } from 'lucide-react'

export type TabId = 'product' | 'value' | 'implement'

interface Tab {
  id: TabId
  label: string
  icon: LucideIcon
}

const tabs: Tab[] = [
  { id: 'product', label: 'Producto', icon: Cpu },
  { id: 'value', label: 'Valor', icon: Diamond },
  { id: 'implement', label: 'Plan de trabajo', icon: Rocket },
]

interface TabNavigationProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="sticky top-0 z-40 bg-surface/95 backdrop-blur-xl border-b border-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo mini */}
          <div className="flex items-center gap-3">
            <img
              src="/images/fisify-logo-white.png"
              alt="Fisify"
              className="h-5 brightness-0 invert opacity-80"
            />
            <span className="text-cream/30 text-xs font-light">×</span>
            <img
              src="/images/medicus-logo-white.png"
              alt="Medicus"
              className="h-4 brightness-0 invert opacity-80"
            />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 md:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 transition-all duration-300 ${
                    isActive 
                      ? 'text-cream' 
                      : 'text-cream/30 hover:text-cream/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.15em] font-light hidden md:block">
                    {tab.label}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cream/5 border border-cream/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Contact */}
          <a 
            href="mailto:hola@fisify.com"
            className="hidden lg:flex items-center gap-2 text-cream/30 hover:text-accent text-xs uppercase tracking-[0.15em] font-light transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
            Contactar
          </a>
        </div>
      </div>
    </nav>
  )
}

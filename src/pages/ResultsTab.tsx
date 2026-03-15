import { motion } from 'framer-motion'

interface ResultsTabProps {
  isDark: boolean
}

export default function ResultsTab({ isDark: _isDark }: ResultsTabProps) {
  const adoptionData = [
    { week: 'S1', value: 45, percent: 28 },
    { week: 'S2', value: 78, percent: 49 },
    { week: 'S3', value: 102, percent: 64 },
    { week: 'S4', value: 124, percent: 78 },
    { week: 'S5', value: 145, percent: 91 },
    { week: 'S6', value: 160, percent: 100 },
  ]

  return (
    <div className="bg-[#faf9f7] min-h-screen relative">
      {/* Subtle grid lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-12 flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 border-l border-[#0a1628]/[0.03] first:border-l-0" />
          ))}
          <div className="flex-1 border-l border-r border-[#0a1628]/[0.03]" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative">
        
        {/* Header */}
        <section className="mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0a1628]/[0.04] text-[#0a1628]/60 text-[11px] uppercase tracking-[0.15em] font-medium rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]" />
            Prueba de Concepto 2025
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0a1628] mb-6 max-w-3xl tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Resultados que <span className="font-semibold">validan</span> el modelo
          </h2>
          <p className="text-xl max-w-2xl font-light text-[#0a1628]/50 leading-relaxed">
            Dos programas piloto con colaboradores y asegurados de Medicus. Datos reales. Impacto medible.
          </p>
        </section>

        {/* Bento Grid with mix of gradients and cinematic photos */}
        <section className="mb-24">
          <div className="grid grid-cols-12 gap-4 auto-rows-[140px]">
            
            {/* Large cinematic photo - Program 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-5 row-span-3 rounded-3xl overflow-hidden relative group"
            >
              <img 
                src="/images/fisio-cinematic-1.png" 
                alt="Fisioterapia" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1a3a6e]/10 text-[#1a3a6e] text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                    Programa 01
                  </span>
                  <h3 className="text-2xl font-semibold text-[#0a1628] mb-2">Prevención y Bienestar</h3>
                  <p className="text-[#0a1628]/60 text-sm">600 colaboradores · Plataforma Estar Bien · 2.5 meses</p>
                </div>
              </div>
            </motion.div>

            {/* Stat - Users */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3 row-span-2 bg-[#0a1628] rounded-3xl p-6 flex flex-col justify-between"
            >
              <span className="text-white/40 text-[11px] uppercase tracking-[0.15em]">Usuarios activos</span>
              <span className="text-5xl lg:text-6xl font-bold text-white tracking-tight">160</span>
            </motion.div>

            {/* Stat - Satisfaction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-4 row-span-2 bg-white rounded-3xl p-6 flex flex-col justify-between"
            >
              <span className="text-[#0a1628]/40 text-[11px] uppercase tracking-[0.15em]">Satisfacción</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-bold text-[#0a1628] tracking-tight">9.82</span>
                <span className="text-[#0a1628]/30 text-xl">/10</span>
              </div>
            </motion.div>

            {/* Small badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3 row-span-1 bg-[#e8f5e9] rounded-3xl p-5 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#4caf50] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#2e7d32] text-sm font-medium">Objetivo cumplido</span>
            </motion.div>

            {/* Activation visual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-4 row-span-1 bg-[#f5f3f0] rounded-3xl p-5 flex items-center justify-between"
            >
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-8 rounded-full ${i < 8 ? 'bg-[#1a3a6e]' : 'bg-[#0a1628]/10'}`} 
                  />
                ))}
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#0a1628]">80%</span>
                <p className="text-xs text-[#0a1628]/40">Activación</p>
              </div>
            </motion.div>

            {/* Cinematic photo - Rehabilitation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4 row-span-3 rounded-3xl overflow-hidden relative group"
            >
              <img 
                src="/images/fisio-cinematic-2.png" 
                alt="Rehabilitación" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#c9a96e]/20 text-[#8b6914] text-[10px] uppercase tracking-[0.15em] font-medium rounded-full mb-3">
                    Programa 02
                  </span>
                  <h3 className="text-xl font-semibold text-[#0a1628]">Rehabilitación Híbrida</h3>
                  <p className="text-[#0a1628]/60 text-sm mt-1">15 kinesiólogos · FisifyStudio · 2 meses</p>
                </div>
              </div>
            </motion.div>

            {/* Sessions stat with gradient */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-4 row-span-2 rounded-3xl overflow-hidden relative"
            >
              <img 
                src="/images/gradient-abstract-3.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 self-start">
                  <span className="text-[#0a1628]/60 text-[11px] uppercase tracking-[0.15em]">Sesiones totales</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 self-start">
                  <span className="text-5xl font-bold text-[#0a1628] tracking-tight">186</span>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-4 row-span-2 bg-white rounded-3xl p-6 flex flex-col justify-center"
            >
              <svg className="w-8 h-8 text-[#0a1628]/10 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-[#0a1628]/70 text-lg font-light leading-relaxed">
                "Un cambio real en mi rutina de salud"
              </p>
              <p className="text-[#0a1628]/40 text-sm mt-3">— Participante del piloto</p>
            </motion.div>

            {/* Stats row with gradient */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4 row-span-1 rounded-3xl overflow-hidden relative"
            >
              <img 
                src="/images/gradient-abstract-1.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-4 flex items-center justify-center gap-4">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a3a6e]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1a3a6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#0a1628] font-semibold">26.7%</span>
                    <p className="text-[#0a1628]/50 text-xs">Adopción</p>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#0a1628] font-semibold">6.64</span>
                    <p className="text-[#0a1628]/50 text-xs">Sesiones/pac.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider line */}
        <div className="border-t border-[#0a1628]/[0.06] mb-20" />

        {/* Charts Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium">Métricas de Impacto</span>
            <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Adoption Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:col-span-2"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Curva de Adopción</h4>
                  <p className="text-sm text-[#0a1628]/40">Usuarios activos por semana</p>
                </div>
                <span className="px-3 py-1 bg-[#0a1628]/[0.04] text-[#0a1628]/60 text-[10px] uppercase tracking-wider rounded-full">6 semanas</span>
              </div>
              <div className="flex items-end justify-between gap-4 h-48">
                {adoptionData.map((item, i) => (
                  <div key={item.week} className="flex-1 flex flex-col items-center h-full">
                    <div className="flex-1 w-full flex items-end">
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        style={{ height: `${item.percent}%`, transformOrigin: 'bottom' }}
                        className="w-full bg-gradient-to-t from-[#1a3a6e] to-[#3d5a8a] rounded-lg relative group cursor-pointer"
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0a1628] text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.value}
                        </div>
                      </motion.div>
                    </div>
                    <span className="text-xs text-[#0a1628]/30 mt-4 font-medium">{item.week}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Donut */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 flex flex-col"
            >
              <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Activación</h4>
              <p className="text-sm text-[#0a1628]/40 mb-6">Pacientes de rehabilitación</p>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f5f3f0" strokeWidth="10" />
                    <motion.circle 
                      cx="50" cy="50" r="40" 
                      fill="none" 
                      stroke="#1a3a6e" 
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * 0.2 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-[#0a1628]">80%</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-[#0a1628]/40 mt-4">28 de 35 activados</p>
            </motion.div>
          </div>

          {/* Satisfaction bars */}
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8"
            >
              <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Satisfacción</h4>
              <p className="text-sm text-[#0a1628]/40 mb-8">Puntuación sobre 10</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-[#0a1628]/70">Prevención</span>
                    <span className="text-lg font-bold text-[#1a3a6e]">9.82</span>
                  </div>
                  <div className="h-3 bg-[#f5f3f0] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '98.2%' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-[#1a3a6e] rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-[#0a1628]/70">Rehabilitación</span>
                    <span className="text-lg font-bold text-[#c9a96e]">9.18</span>
                  </div>
                  <div className="h-3 bg-[#f5f3f0] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '91.8%' }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#c9a96e] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key metrics with cinematic photo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative"
            >
              <img 
                src="/images/fisio-cinematic-3.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0a1628]/40" />
              <div className="relative z-10 p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Números Clave</h4>
                  <p className="text-sm text-[#0a1628]/40 mb-6">Resumen del piloto</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '768', label: 'Logins' },
                      { value: '2,344', label: 'Ejercicios' },
                      { value: '6.64', label: 'Sesiones/pac.' },
                      { value: '26.7%', label: 'Adopción' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-center p-4 rounded-xl bg-[#f5f3f0]"
                      >
                        <span className="text-xl font-bold text-[#0a1628] block">{item.value}</span>
                        <span className="text-xs text-[#0a1628]/40">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-[#0a1628]/[0.06] mb-20" />

        {/* Learnings - Mix of photos and gradients */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium">Aprendizajes Clave</span>
            <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Gradient card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative min-h-[280px]"
            >
              <img 
                src="/images/gradient-abstract-1.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <span className="text-[11px] tracking-[0.2em] text-[#1a3a6e] mb-3 block font-medium">01</span>
                  <h4 className="text-xl font-semibold text-[#0a1628] mb-2">Adopción validada</h4>
                  <p className="text-[#0a1628]/60 text-sm font-light leading-relaxed">Los asegurados de Medicus integran la solución en su día a día.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Cinematic photo card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative min-h-[280px]"
            >
              <img 
                src="/images/medicus-fitness.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <span className="text-[11px] tracking-[0.2em] text-[#c9a96e] mb-3 block font-medium">02</span>
                  <h4 className="text-xl font-semibold text-[#0a1628] mb-2">Valor en salud</h4>
                  <p className="text-[#0a1628]/60 text-sm font-light leading-relaxed">Es posible activar hábitos saludables de forma digital.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Gradient card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden relative min-h-[280px]"
            >
              <img 
                src="/images/gradient-abstract-2.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <span className="text-[11px] tracking-[0.2em] text-[#7c5ca3] mb-3 block font-medium">03</span>
                  <h4 className="text-xl font-semibold text-[#0a1628] mb-2">Satisfacción excepcional</h4>
                  <p className="text-[#0a1628]/60 text-sm font-light leading-relaxed">Puntuaciones 9+/10 reflejan el estándar Medicus.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  )
}

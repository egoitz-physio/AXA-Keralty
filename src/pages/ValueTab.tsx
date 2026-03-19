import { motion } from 'framer-motion'

interface ValueTabProps {
  isDark: boolean
}

export default function ValueTab({ isDark: _isDark }: ValueTabProps) {
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

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative">

        {/* ══════════════════════════════════════ */}
        {/*  HEADER                                */}
        {/* ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">Valor estratégico</span>
            <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-[#0a1628] tracking-tight leading-[1.1] max-w-4xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Tres palancas estratégicas
            <br />
            <span className="font-semibold">para Medicus</span>
          </h2>

          <p className="text-lg text-[#0a1628]/40 font-light mt-6 max-w-2xl leading-relaxed">
            Un modelo que transforma la relación con el afiliado y genera impacto medible en tres dimensiones clave.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 01 — DIFERENCIACIÓN           */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">01</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left — Title + body */}
              <div className="lg:col-span-7">
                <h3
                  className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Diferenciación
                  <br />
                  <span className="font-semibold">competitiva</span>
                </h3>

                <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-xl">
                  Producto innovador que destaca en el mercado. Valor agregado tangible e inmediato.
                  Posicionamiento como aseguradora <span className="text-[#1a3a6e] font-medium">preventiva, no reactiva</span>.
                </p>
              </div>

              {/* Right — What it enables */}
              <div className="lg:col-span-5">
                <div className="border-l-2 border-[#c9a96e]/40 pl-8">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] font-medium block mb-6">
                    Lo que permite a la aseguradora
                  </span>

                  <div className="space-y-5">
                    {[
                      'Diseñar campañas preventivas segmentadas',
                      'Ajustar estrategias de producto',
                      'Anticipar tendencias de siniestralidad',
                      'Generar inteligencia poblacional',
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6e]/40 mt-2.5 flex-shrink-0" />
                        <span className="text-[15px] text-[#0a1628]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 02 — MEJORA ESTADO FÍSICO     */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">02</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            <h3
              className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Mejora del estado físico
              <br />
              <span className="font-semibold">poblacional</span>
            </h3>

            <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-3xl mb-16">
              Reducción de episodios leves recurrentes, menor progresión a lesiones graves,
              reducción de primeras consultas innecesarias y prevención de recaídas.
            </p>

            {/* Three impact metrics */}
            <div className="grid md:grid-cols-3 gap-0">
              {[
                { indicator: '↓', label: 'Menor frecuencia siniestral' },
                { indicator: '↓', label: 'Menor severidad por episodio' },
                { indicator: '↓', label: 'Menor tasa de recurrencia' },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`py-10 px-8 lg:px-10 ${
                    i > 0 ? 'md:border-l border-[#0a1628]/[0.06]' : ''
                  } ${i < 2 ? 'border-b md:border-b-0 border-[#0a1628]/[0.06]' : ''}`}
                >
                  <span
                    className="text-5xl lg:text-6xl font-bold text-[#1a3a6e] block mb-4"
                    style={{ fontFamily: 'Philosopher, Georgia, serif' }}
                  >
                    {metric.indicator}
                  </span>
                  <span className="text-[15px] text-[#0a1628]/70 font-light leading-relaxed">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════ */}
        {/*  PALANCA 03 — FIDELIDAD Y ENGAGEMENT   */}
        {/* ══════════════════════════════════════ */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section number + rule */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/30 font-medium">03</span>
              <div className="flex-1 border-t border-[#0a1628]/[0.06]" />
            </div>

            <h3
              className="text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-8"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Fidelidad y
              <br />
              <span className="font-semibold">engagement</span>
            </h3>

            <p className="text-lg text-[#0a1628]/55 font-light leading-[1.8] max-w-3xl mb-16">
              Fisify ha demostrado ser una herramienta de captación y retención de cuentas tanto
              en individuales como en colectivos. Esta solución le permite a Medicus diferenciarse
              de las otras pólizas y conseguir una <span className="text-[#1a3a6e] font-medium">mayor fidelización de la cartera existente</span>.
            </p>

            {/* Two key insights */}
            <div className="grid md:grid-cols-2 gap-0">
              {[
                {
                  num: 'a',
                  title: 'Relación continua',
                  body: 'Frecuencia de interacción digital constante. Integración en la vida diaria del usuario.',
                },
                {
                  num: 'b',
                  title: 'Percepción de valor',
                  body: 'El asegurado percibe que su seguro le ayuda a estar mejor cada día. Acceso inmediato, experiencia constante y personalizada.',
                },
              ].map((insight, i) => (
                <motion.div
                  key={insight.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`py-10 px-8 lg:px-10 ${
                    i > 0 ? 'md:border-l border-[#0a1628]/[0.06]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 flex items-center justify-center border border-[#c9a96e]/30 text-[#c9a96e] text-xs font-medium">
                      {insight.num}
                    </span>
                    <h4
                      className="text-lg font-medium text-[#0a1628] tracking-tight"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {insight.title}
                    </h4>
                  </div>
                  <p className="text-[15px] text-[#0a1628]/55 font-light leading-[1.8]">
                    {insight.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

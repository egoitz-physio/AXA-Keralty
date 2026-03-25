import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CircleGauge,
  LogIn,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

interface ResultsTabProps {
  isDark: boolean
  clientName?: string
}

const monthlyLogins = [
  { label: 'Ene', value: 0 },
  { label: 'Feb', value: 237 },
  { label: 'Mar', value: 132 },
  { label: 'Abr', value: 214 },
  { label: 'May', value: 92 },
  { label: 'Jun', value: 89 },
  { label: 'Jul', value: 621 },
  { label: 'Ago', value: 568 },
  { label: 'Sep', value: 427 },
  { label: 'Oct', value: 351 },
  { label: 'Nov', value: 285 },
  { label: 'Dic', value: 187 },
]

const monthlyGroups = [
  monthlyLogins.slice(0, 4),
  monthlyLogins.slice(4, 8),
  monthlyLogins.slice(8, 12),
]

const promoterBreakdown = [
  { label: 'Agentes', value: 965, share: '69.8%', tone: 'blue' },
  { label: 'Comerciales', value: 355, share: '25.7%', tone: 'gold' },
  { label: 'Brokers', value: 62, share: '4.5%', tone: 'muted' },
]

const companyHighlights = [
  { label: '4672zurich', value: 1731, note: 'Cuenta líder del ecosistema' },
  { label: 'actinverzurich', value: 670, note: 'Segundo eje de tracción' },
  { label: '5531zurich', value: 204, note: 'Crecimiento tardío muy sólido' },
  { label: '4920zurich', value: 169, note: 'Adopción estable y sostenida' },
  { label: '4319zurich', value: 90, note: 'Base activa con margen de expansión' },
]

const positiveLearnings = [
  'Cada vez más cuentas de GMM se están activando y encuentran valor real en la solución dentro de la cartera, lo que amplía la base de uso con una señal clara de tracción orgánica.',
  'A nivel comercial, Fisify demuestra un impacto directo en captación y retención: cuanto más visible y mejor comprendida es la solución, mayor es su capacidad para abrir conversaciones y reforzar la propuesta de valor.',
  'Estamos viendo una demanda creciente de webinars y capacitaciones, tanto para equipos comerciales como para clientes, junto con una penetración cada vez mayor en la cartera.',
  'Las acciones de difusión y capacitación tienen un impacto directo en el resultado, por lo que conviene estructurar un plan de acción continuo para activar, acompañar y escalar estos esfuerzos.',
]

function MetricCard({
  icon,
  value,
  label,
  caption,
}: {
  icon: ReactNode
  value: string
  label: string
  caption: string
}) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1a2e]/70 backdrop-blur-sm p-6 lg:p-7">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-cream/35 font-medium mb-4">{label}</div>
          <div className="text-3xl lg:text-4xl font-light text-cream tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {value}
          </div>
        </div>
        <div className="w-11 h-11 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/10 flex items-center justify-center text-[#9cc2ff]">
          {icon}
        </div>
      </div>
      <p className="text-sm text-cream/55 font-light leading-relaxed mt-5">{caption}</p>
    </div>
  )
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">{eyebrow}</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <h3 className="text-3xl md:text-4xl font-light text-cream tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {title}
      </h3>
      {subtitle && <p className="text-base lg:text-lg text-cream/60 font-light mt-3 max-w-3xl">{subtitle}</p>}
    </div>
  )
}

export default function ResultsTab({ isDark: _isDark, clientName = 'Zurich' }: ResultsTabProps) {
  const totalPromoters = 1382
  const totalMotor = 274
  const totalCompanyLogins = 3203
  const secondHalf = 2439
  const firstHalf = 764
  const q4Motor = 113
  const maxMonth = Math.max(...monthlyLogins.map((item) => item.value))

  return (
    <div className="relative">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-6">
            <Sparkles size={12} />
            {clientName} México 2025 · Lectura de datos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light text-cream tracking-tight leading-[1.05] max-w-5xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            La adopción confirma un <span className="font-semibold text-[#9cc2ff]">GMM comercial sólido</span> y una base lista para escalar
          </h2>
          <p className="text-lg lg:text-xl text-cream/60 font-light leading-relaxed max-w-4xl mt-6">
            Los datos muestran una tracción muy positiva: el volumen se concentra en la segunda mitad del año,
            la red de agentes lidera la activación y las cuentas principales sostienen la mayor parte del uso.
          </p>
        </motion.div>

        {/* KPIs */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-24">
          <MetricCard
            icon={<LogIn size={18} strokeWidth={1.8} />}
            value={totalCompanyLogins.toLocaleString('es-MX')}
            label="Logins GMM"
            caption="Base acumulada de uso con una aceleración muy clara en la segunda mitad del año."
          />
          <MetricCard
            icon={<TrendingUp size={18} strokeWidth={1.8} />}
            value={`${Math.round((secondHalf / totalCompanyLogins) * 100)}%`}
            label="Peso de H2"
            caption={`La segunda mitad concentra ${secondHalf.toLocaleString('es-MX')} logins frente a ${firstHalf.toLocaleString('es-MX')} en H1.`}
          />
          <MetricCard
            icon={<Users size={18} strokeWidth={1.8} />}
            value={totalPromoters.toLocaleString('es-MX')}
            label="Logins promotores"
            caption="La red promotora tuvo una participación alta y muy concentrada en agentes, el canal más activo."
          />
          <MetricCard
            icon={<CircleGauge size={18} strokeWidth={1.8} />}
            value={totalMotor.toLocaleString('es-MX')}
            label="Logins Motor"
            caption={`Motor cierra con ${q4Motor} logins en Q4 y consolida una curva de uso más madura y estable.`}
          />
        </div>

        {/* Channel performance */}
        <SectionTitle
          eyebrow="01"
          title="Tracción por canal"
          subtitle="La red comercial muestra una base muy sana: los agentes lideran, Comerciales aportan masa crítica y Brokers complementan la capilaridad."
        />

        <div className="grid lg:grid-cols-12 gap-6 mb-24">
          <div className="lg:col-span-4 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(156,194,255,0.10),transparent_35%)] pointer-events-none" />
            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <BadgeCheck size={18} />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Promotores</span>
                <span className="block text-sm text-cream/45 font-light">El canal más eficiente para activar volumen</span>
              </div>
            </div>

            <div className="space-y-4 relative">
              {promoterBreakdown.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-[#9cc2ff]' : index === 1 ? 'bg-[#c9a96e]' : 'bg-white/30'}`} />
                      <span className={`text-base font-medium ${index === 0 ? 'text-cream' : 'text-cream/80'}`}>{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg lg:text-xl font-light text-cream tabular-nums">{item.value.toLocaleString('es-MX')}</div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-cream/40">{item.share}</div>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max((item.value / promoterBreakdown[0].value) * 100, 2)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${index === 0 ? 'bg-gradient-to-r from-[#9cc2ff] to-[#4c82ff]' : index === 1 ? 'bg-gradient-to-r from-[#c9a96e] to-[#8f6b30]' : 'bg-gradient-to-r from-white/35 to-white/10'}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/8 text-sm text-cream/60 leading-relaxed relative">
              <span className="text-cream font-medium">{promoterBreakdown[0].label}</span> aporta el {promoterBreakdown[0].share} del total,
              confirmando una activación muy eficiente desde el canal con mayor potencial de escala.
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.10),transparent_35%)] pointer-events-none" />
            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <BarChart3 size={18} />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">GMM</span>
                <span className="block text-sm text-cream/45 font-light">La curva anual gana tracción en la segunda mitad</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 relative">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-cream/35 mb-3">H1</div>
                <div className="text-4xl lg:text-5xl font-light text-cream tracking-tight">{firstHalf.toLocaleString('es-MX')}</div>
                <p className="text-sm text-cream/45 font-light mt-3">Base de arranque y validación inicial</p>
              </div>
              <div className="rounded-2xl border border-[#9cc2ff]/20 bg-[#9cc2ff]/8 p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9cc2ff] mb-3">H2</div>
                <div className="text-4xl lg:text-5xl font-light text-cream tracking-tight">{secondHalf.toLocaleString('es-MX')}</div>
                <p className="text-sm text-cream/55 font-light mt-3">Fase de consolidación y madurez</p>
              </div>
            </div>

            <div className="space-y-3 relative">
              {[
                { label: 'Q1', value: 75, tint: 'gold' },
                { label: 'Q2', value: 43, tint: 'gold' },
                { label: 'Q3', value: 43, tint: 'blue' },
                { label: 'Q4', value: 113, tint: 'blue' },
              ].map((quarter) => (
                <div key={quarter.label} className="grid grid-cols-[48px_1fr_44px] gap-3 items-center">
                  <span className="text-sm text-cream/65 font-medium">{quarter.label}</span>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max((quarter.value / 113) * 100, 2)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${quarter.tint === 'blue' ? 'bg-gradient-to-r from-[#9cc2ff] to-[#4c82ff]' : 'bg-gradient-to-r from-[#c9a96e] to-[#8f6b30]'}`}
                    />
                  </div>
                  <span className="text-sm text-cream/45 font-light tabular-nums text-right">{quarter.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/8 text-sm text-cream/60 leading-relaxed relative">
            Motor cierra el año con un cierre especialmente fuerte en Q4, señal de mayor madurez, recurrencia y uso estable.
            </div>
          </div>

          <div className="lg:col-span-3 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,194,255,0.09),transparent_40%)] pointer-events-none" />
            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff]">
                <Building2 size={18} />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">Cuentas clave</span>
                <span className="block text-sm text-cream/45 font-light">Las cuentas que más empujan el proyecto</span>
              </div>
            </div>

            <div className="space-y-4 relative">
              <div className="rounded-2xl border border-[#9cc2ff]/15 bg-[#9cc2ff]/6 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[#9cc2ff] font-medium mb-1">Top cuenta</div>
                    <div className="text-xl font-medium text-cream leading-tight">{companyHighlights[0].label}</div>
                    <div className="text-sm text-cream/45 font-light mt-1">{companyHighlights[0].note}</div>
                  </div>
                  <div className="text-2xl font-light text-cream tabular-nums">{companyHighlights[0].value.toLocaleString('es-MX')}</div>
                </div>
              </div>

              {companyHighlights.slice(1).map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-cream">{item.label}</div>
                      <div className="text-xs text-cream/40 font-light mt-1">{item.note}</div>
                    </div>
                    <div className={`text-sm font-light tabular-nums ${index === 0 ? 'text-[#9cc2ff]' : 'text-cream/55'}`}>
                      {item.value.toLocaleString('es-MX')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/8 text-sm text-cream/60 leading-relaxed relative">
              Las dos cuentas más activas concentran cerca del <span className="text-cream font-medium">75%</span> del volumen,
              una base excelente para crear playbooks de escalado y replicar el éxito en nuevas cuentas.
            </div>
          </div>
        </div>

        {/* Monthly momentum */}
        <SectionTitle
          eyebrow="02"
          title="Momento de mayor adopción"
          subtitle="El uso crece con fuerza a partir de julio y se mantiene alto hasta diciembre. Ese segundo impulso es la mejor señal de consolidación del proyecto."
        />

        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8 mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium mb-2">04</div>
                  <h3 className="text-3xl md:text-4xl font-light text-cream tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Momento de mayor adopción
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-cream/40">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9cc2ff]" />
                    Picos
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c9a96e]" />
                    Base
                  </span>
                </div>
              </div>

              <p className="text-base lg:text-lg text-cream/58 font-light leading-relaxed max-w-3xl mb-7">
                La adopción se acelera en la segunda mitad del año y se mantiene en niveles altos, lo que refuerza la idea de un uso más habitual y consistente.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {monthlyGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                    <div className="space-y-3">
                      {group.map((month) => {
                        const isPeak = month.value === 621 || month.value === 568
                        const fill = month.value === 0 ? '10%' : `${Math.max((month.value / maxMonth) * 100, 10)}%`
                        return (
                          <div key={month.label} className="rounded-2xl border border-white/8 bg-[#09162a]/60 p-3">
                            <div className="flex items-center justify-between gap-3 mb-2">
                              <div className={`text-[11px] uppercase tracking-[0.18em] ${isPeak ? 'text-[#9cc2ff]' : 'text-cream/45'}`}>
                                {month.label}
                              </div>
                              <div className="text-sm text-cream/70 tabular-nums">{month.value.toLocaleString('es-MX')}</div>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: fill }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                className={`h-full rounded-full ${isPeak ? 'bg-gradient-to-r from-[#9cc2ff] to-[#4c82ff]' : 'bg-gradient-to-r from-[#c9a96e] to-[#7f612a]'}`}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 lg:p-7">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium mb-4">Lectura rápida</div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-[#9cc2ff]/8 border border-[#9cc2ff]/15 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#9cc2ff] mb-2">Pico anual</div>
                  <div className="text-3xl font-light text-cream">621</div>
                  <div className="text-sm text-cream/50 font-light mt-2">Julio marca el salto de adopción más fuerte del año.</div>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-cream/45 mb-2">Segundo impulso</div>
                  <div className="text-3xl font-light text-cream">568</div>
                  <div className="text-sm text-cream/50 font-light mt-2">Agosto confirma que el crecimiento no fue puntual, sino sostenido.</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-white/8 text-sm text-cream/60 leading-relaxed">
                El patrón mensual deja una señal muy positiva: la adopción no solo crece, sino que se mantiene alta durante varios meses,
                lo que habla de hábito, continuidad y mayor relevancia del servicio.
              </div>
            </div>
          </div>
        </div>

        {/* Learnings */}
        <SectionTitle
          eyebrow="03"
          title="Aprendizajes"
          subtitle="La foto final es clara: Zurich ya tiene volumen, red y cuentas GMM para seguir creciendo con muy buena base."
        />

        <div className="grid lg:grid-cols-2 gap-5">
          {positiveLearnings.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/8 bg-[#0d1a2e]/70 p-6 lg:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/10 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <p className="text-cream/70 font-light leading-relaxed">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing insight */}
        <div className="mt-20 rounded-[2rem] border border-[#9cc2ff]/15 bg-gradient-to-r from-[#0d1a2e] via-[#0d1a2e] to-[#10264b] p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9cc2ff]/12 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
              <Target size={20} />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-3">Conclusión ejecutiva</div>
              <h4 className="text-2xl lg:text-3xl font-light text-cream tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Zurich ya cuenta con una base clara para escalar: más activación, más impacto comercial y más demanda de valor.
              </h4>
              <p className="text-cream/60 font-light leading-relaxed mt-4 max-w-4xl">
                Los datos muestran que Fisify no solo está ganando adopción dentro de la cartera, sino que también está generando un efecto
                comercial tangible: ayuda a captar, retener y profundizar la relación con clientes y equipos comerciales. La creciente demanda de
                webinars y capacitaciones confirma que la solución ya está entrando en la conversación comercial y que, cuando activamos acciones
                de difusión y formación, el resultado mejora de forma directa. El siguiente paso es convertir esa tracción en un plan de acción
                continuo que acelere la penetración en cartera y multiplique el impacto en todo el ecosistema Zurich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

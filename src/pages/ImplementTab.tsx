import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  CalendarRange,
  Megaphone,
  MonitorPlay,
  Repeat2,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

interface ImplementTabProps {
  isDark: boolean
  clientName?: string
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

type Phase = {
  num: string
  title: string
  months: string
  period: string
  summary: string
  actions: string[]
  accent?: boolean
}

const phases: Phase[] = [
  {
    num: '01',
    title: 'Impulso y reactivación',
    months: 'Abr - May',
    period: 'Base de lanzamiento',
    summary: 'Reforzar la presencia actual con mensajes claros y una primera ola de difusión.',
    actions: [
      'Vídeo de lanzamiento + CTA directo.',
      'Newsletter y píldoras de contenido mensual.',
      'Calendario editorial y argumentos comerciales.',
    ],
  },
  {
    num: '02',
    title: 'Capacitación y penetración',
    months: 'Jun - Jul',
    period: 'Escalado inicial',
    summary: 'Acelerar la adopción con formación, webinars y recursos de apoyo.',
    actions: [
      'Webinar temático para comerciales y clientes.',
      'Capacitación comercial: pitch y casos de uso.',
      'Vídeos cortos y contenidos de marca.',
    ],
    accent: true,
  },
  {
    num: '03',
    title: 'Dinamización comercial',
    months: 'Ago - Oct',
    period: 'Tracción sostenida',
    summary: 'Mantener la actividad con campañas, sorteos y acciones recurrentes.',
    actions: [
      'Reactivación con nudges y newsletters segmentadas.',
      'Sorteo trimestral para impulsar participación.',
      'Nuevos webinars por segmento.',
    ],
  },
  {
    num: '04',
    title: 'Consolidación y continuidad',
    months: 'Nov - Dic',
    period: 'Cierre anual',
    summary: 'Cerrar el año con aprendizajes y continuidad para 2027.',
    actions: [
      'Campaña de cierre con resultados y buenas prácticas.',
      'Webinar final con aprendizajes y preguntas.',
      'Business case y plan de continuidad 2027.',
    ],
  },
]

const resources = [
  {
    icon: <Users size={18} />,
    title: 'Senior Account Manager dedicado',
    body: 'Un AM senior de Fisify asignado en exclusiva a Zurich para coordinar la ejecución y dar velocidad a la cuenta.',
  },
  {
    icon: <Megaphone size={18} />,
    title: 'Marketing y comunicación',
    body: 'Equipo de contenidos, campañas y diseño para adaptar mensajes y materiales a cada momento del plan.',
  },
  {
    icon: <Workflow size={18} />,
    title: 'Interlocución Zurich',
    body: 'Equipo comercial, marketing y comunicación para activar difusión, convocatorias y soporte operativo.',
  },
]

const followUp = [
  {
    label: 'Mensual',
    value:
      'Control de KPIs, acciones ejecutadas y oportunidades, apoyado por reportes dinámicos en tiempo real para decidir los siguientes pasos en base a datos.',
  },
]

const strategicKeys = [
  'La formación debe ser continua, no puntual.',
  'Cada acción debe tener un CTA claro y medible.',
  'Webinars, sorteos y newsletters sostienen la conversación comercial.',
  'La cadencia de seguimiento debe cerrar el círculo entre activación, adopción y negocio.',
]

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-5">
        <span className="text-[11px] uppercase tracking-[0.26em] text-[#9cc2ff] font-medium">{eyebrow}</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <h3 className="text-3xl md:text-4xl font-light text-cream tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {title}
      </h3>
      {subtitle && <p className="text-base lg:text-lg text-cream/60 font-light mt-3 max-w-3xl">{subtitle}</p>}
    </div>
  )
}

function IconCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon: ReactNode
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-lg font-medium text-cream mb-1">{title}</div>
          <p className="text-sm text-cream/60 font-light leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

export default function ImplementTab({ isDark: _isDark, clientName = 'Zurich' }: ImplementTabProps) {
  return (
    <div className="relative">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-32">
        <motion.div {...fadeUp} className="mb-10">
          <span className="section-label mb-10 inline-block">Plan de trabajo</span>
          <h2 className="heading-display text-display-lg max-w-5xl text-cream">
            Una hoja de ruta visual para impulsar, formar y escalar de abril a diciembre
          </h2>
          <p className="text-lg lg:text-xl font-light leading-relaxed max-w-4xl mt-5 text-cream/60">
            El objetivo es transformar la tracción de datos en adopción comercial real dentro de {clientName}, con una secuencia clara de
            campañas, webinars, sorteos, contenidos y seguimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            { label: 'Abr - May', value: 'Impulso', desc: 'Primeras acciones para acelerar adopción y visibilidad.' },
            { label: 'Jun - Jul', value: 'Capacitación', desc: 'Webinars y formación comercial para profundizar el uso.' },
            { label: 'Ago - Dic', value: 'Escalado', desc: 'Sorteos, reactivación y consolidación del plan.' },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium mb-2">{item.label}</div>
              <div className="text-xl font-medium text-cream mb-1">{item.value}</div>
              <div className="text-sm text-cream/55 font-light leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="lg:col-span-8 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8"
          >
            <SectionTitle
              eyebrow="01"
              title="Roadmap de ejecución"
              subtitle="Cuatro fases para mantener la tracción y convertir cada acción en adopción y negocio."
            />

            <div className="grid lg:grid-cols-2 gap-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.num}
                  {...fadeUp}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-[1.4rem] border p-5 ${
                    phase.accent ? 'border-[#9cc2ff]/20 bg-[#9cc2ff]/8' : 'border-white/8 bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium">{phase.num}</span>
                        <span className="text-[11px] uppercase tracking-[0.18em] text-cream/45">{phase.months}</span>
                      </div>
                      <h4 className="text-xl text-cream font-medium">{phase.title}</h4>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-cream/40 text-right">{phase.period}</span>
                  </div>

                  <p className="text-sm text-cream/60 font-light leading-relaxed mb-4">{phase.summary}</p>
                  <div className="space-y-2">
                    {phase.actions.map((action) => (
                      <div key={action} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#09162a]/60 px-4 py-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#9cc2ff] flex-shrink-0" />
                        <span className="text-sm text-cream/72 font-light leading-relaxed">{action}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="lg:col-span-4 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8"
          >
            <SectionTitle
              eyebrow="02"
              title="Recursos"
              subtitle="El plan necesita un equipo claro y roles definidos para ejecutarse bien."
            />

            <div className="grid gap-4">
              {resources.map((resource) => (
                <IconCard
                  key={resource.title}
                  title={resource.title}
                  body={resource.body}
                  icon={resource.icon}
                />
              ))}
            </div>

            <div className="mt-5 rounded-[1.35rem] border border-[#9cc2ff]/15 bg-[#9cc2ff]/8 p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9cc2ff] font-medium mb-2">Criterio de éxito</div>
              <p className="text-sm text-cream/65 font-light leading-relaxed">
                Cadencia, calidad de contenido y seguimiento constante para conectar visibilidad comercial con uso real.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="lg:col-span-4 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8"
          >
            <SectionTitle
              eyebrow="03"
              title="Seguimiento"
              subtitle="Seguimiento mensual con reportes dinámicos para analizar datos en tiempo real y tomar decisiones basadas en evidencia."
            />

            <div className="space-y-3">
              {followUp.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
                      <Repeat2 size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-1">{item.label}</div>
                      <p className="text-sm text-cream/65 font-light leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-[#09162a]/60 p-5">
              <div className="flex items-center gap-3 mb-2 text-[#9cc2ff]">
                <CalendarRange size={18} />
                <span className="text-[11px] uppercase tracking-[0.24em] font-medium">Cadencia</span>
              </div>
              <p className="text-sm text-cream/65 font-light leading-relaxed">
                Revisión mensual con reportes dinámicos en tiempo real para analizar resultados y definir los próximos pasos en base a datos.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="lg:col-span-8 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,0.92),rgba(10,21,36,0.82))] p-7 lg:p-8"
          >
            <SectionTitle
              eyebrow="04"
              title="Palancas estratégicas"
              subtitle="Cuatro reglas para que el plan tenga impacto comercial real."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {strategicKeys.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-[#9cc2ff]/10 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <p className="text-sm text-cream/65 font-light leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.35rem] border border-[#9cc2ff]/15 bg-gradient-to-r from-[#0d1a2e] via-[#0d1a2e] to-[#10264b] p-6 lg:p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#9cc2ff]/12 border border-[#9cc2ff]/15 flex items-center justify-center text-[#9cc2ff] flex-shrink-0">
                  <MonitorPlay size={18} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#9cc2ff] font-medium mb-2">Resultado esperado</div>
                  <p className="text-sm text-cream/65 font-light leading-relaxed">
                    Un plan vivo, coordinado y medible que convierta visibilidad en demanda, demanda en uso y uso en crecimiento.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

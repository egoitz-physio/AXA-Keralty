import ClientPresentationApp from '../components/ClientPresentationApp'
import type { TabId } from '../components/ClientPresentationApp'

const CLIENT_NAME = 'Prudential'
const CLIENT_LOGO = '/images/logo-prudential.svg'

export default function PrudentialApp() {
  const visibleTabs: TabId[] = ['objetivo', 'results', 'product', 'value', 'implement']

  return (
    <ClientPresentationApp
      clientName={CLIENT_NAME}
      clientLogo={CLIENT_LOGO}
      homePath="/"
      visibleTabs={visibleTabs}
      initialTab="objetivo"
      hero={{
        eyebrow: 'Propuesta de colaboración',
        title: (
          <>
            Servicio de fisioterapia digital para <span className="font-semibold">Prudential</span>
          </>
        ),
        description:
          'La plataforma líder de fisioterapia digital que fusiona la IA con la cercanía humana para prevenir, tratar y acompañar a los asegurados.',
        image: '/images/new-hero-2.png',
        imageAlt: 'Prudential Fisioterapia Digital',
      }}
      footer={{
        description:
          'Cuida el activo más importante de tu aseguradora con una propuesta de salud cotidiana, medible y escalable.',
        bottomText: '© 2026 Fisify. Propuesta de colaboración para Prudential.',
      }}
    />
  )
}

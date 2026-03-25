import ClientPresentationApp from '../components/ClientPresentationApp'

interface ZurichAppProps {
  homePath?: string
}

export default function ZurichApp({ homePath = '/zurich' }: ZurichAppProps) {
  return (
    <ClientPresentationApp
      clientName="Zurich"
      clientLogo="/images/logo-zurich.svg?v=3"
      homePath={homePath}
      brand="zurich"
      initialTab="results"
      visibleTabs={['results', 'product', 'implement']}
    />
  )
}

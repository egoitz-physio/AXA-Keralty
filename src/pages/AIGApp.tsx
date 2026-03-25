import ClientPresentationApp from '../components/ClientPresentationApp'

interface AIGAppProps {
  homePath?: string
}

export default function AIGApp({ homePath = '/' }: AIGAppProps) {
  return <ClientPresentationApp clientName="AIG" clientLogo="/images/logo-aig.svg" homePath={homePath} />
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientPresentationApp from './components/ClientPresentationApp'
import OmintApp from './pages/OmintApp'
import AIGApp from './pages/AIGApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZurichApp homePath="/" />} />
        <Route path="/omint" element={<OmintApp />} />
        <Route path="/AIG" element={<AIGApp homePath="/AIG" />} />
        <Route path="/aig" element={<AIGApp homePath="/AIG" />} />
        <Route path="/Zurich" element={<ZurichApp homePath="/Zurich" />} />
        <Route path="/zurich" element={<ZurichApp homePath="/zurich" />} />
        <Route path="/medicus" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" homePath="/medicus" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Science from './pages/Science.jsx'
import Platforms from './pages/Platforms.jsx'
import Cultivar from './pages/Cultivar.jsx'
import Traiit from './pages/Traiit.jsx'
import Impact from './pages/Impact.jsx'
import Insights from './pages/Insights.jsx'
import InsightArticle from './pages/InsightArticle.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Report from './pages/Report.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/platforms/cultivar" element={<Cultivar />} />
        <Route path="/platforms/traiit" element={<Traiit />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/adaptive-biology-report" element={<Report />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

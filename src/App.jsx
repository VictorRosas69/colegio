import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useSpring } from 'framer-motion'

import Navigation from './components/Navigation'
import Avatar from './components/Avatar'
import Hero from './sections/Hero'
import Religion from './sections/Religion'
import Location from './sections/Location'
import Economy from './sections/Economy'
import Gastronomy from './sections/Gastronomy'
import Tourism from './sections/Tourism'
import Folklore from './sections/Folklore'

const SECTIONS = ['hero', 'religion', 'location', 'economy', 'gastronomy', 'tourism', 'folklore']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [avatarVisible, setAvatarVisible] = useState(false)

  const { scrollYProgress } = useScroll()
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Show avatar after short delay on load
  useEffect(() => {
    const t = setTimeout(() => setAvatarVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const handleSectionVisible = useCallback((sectionId) => {
    setActiveSection(sectionId)
  }, [])

  return (
    <>
      <Helmet>
        <title>Guaitarilla, Nariño — Tierra de Fe, Cultura y Naturaleza</title>
        <meta name="description" content="Descubre Guaitarilla, municipio de Nariño, Colombia. Explora su religiosidad, gastronomía ancestral, sitios turísticos como los Chorros de Güítara, su folclor y su rica economía campesina." />
        <meta name="keywords" content="Guaitarilla, Nariño, Colombia, turismo, gastronomía, folclor, Chorros de Güítara, Cañón del Juanambú, carnaval" />
        <meta property="og:title" content="Guaitarilla, Nariño — Tierra de Fe, Cultura y Naturaleza" />
        <meta property="og:description" content="Revista digital del municipio de Guaitarilla, Nariño. Religión, gastronomía, turismo y folclor." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://guaitarilla.netlify.app" />
      </Helmet>

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Main content */}
      <main>
        <Hero />
        <Religion onVisible={handleSectionVisible} />
        <Location onVisible={handleSectionVisible} />
        <Economy onVisible={handleSectionVisible} />
        <Gastronomy onVisible={handleSectionVisible} />
        <Tourism onVisible={handleSectionVisible} />
        <Folklore onVisible={handleSectionVisible} />
      </main>

      {/* Footer */}
      <footer className="bg-green-950 border-t border-green-800/50 py-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-script text-3xl text-green-400 mb-2">Guaitarilla</p>
          <p className="text-green-500 text-sm mb-1">Municipio de Nariño · República de Colombia</p>
          <p className="text-green-600 text-xs">
            Hecho con ❤️ para promover el turismo y la cultura nariñense · {new Date().getFullYear()}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-green-600">
            {SECTIONS.slice(1).map(s => (
              <button
                key={s}
                onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-green-400 capitalize transition-colors"
              >
                {s === 'religion' ? 'Religión' :
                 s === 'location' ? 'Ubicación' :
                 s === 'economy' ? 'Economía' :
                 s === 'gastronomy' ? 'Gastronomía' :
                 s === 'tourism' ? 'Turismo' :
                 'Folclor'}
              </button>
            ))}
          </div>
        </motion.div>
      </footer>

      {/* Floating Avatar guide */}
      <Avatar section={activeSection} isVisible={avatarVisible} />
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'hero',       label: 'Inicio'      },
  { id: 'religion',   label: 'Religión'    },
  { id: 'location',   label: 'Ubicación'   },
  { id: 'economy',    label: 'Economía'    },
  { id: 'gastronomy', label: 'Gastronomía' },
  { id: 'tourism',    label: 'Turismo'     },
  { id: 'folklore',   label: 'Folclor'     },
]

export default function Navigation({ activeSection, scrollProgress }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Barra de progreso */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-green-500 via-yellow-400 to-red-500 z-100 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navbar */}
      <motion.nav
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-green-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-1 grid grid-cols-3 items-center">

          {/* ── ESCUDO IZQUIERDO (colegio) ── */}
          <div className="flex items-center justify-start">
            <motion.img
              src="/escudo-colegio.png"
              alt="Escudo del colegio"
              className="h-20 w-auto object-contain drop-shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>

          {/* ── NAVEGACIÓN CENTRAL ── */}
          <div className="flex items-center justify-center">
            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-green-600 text-white shadow-lg shadow-green-900/50'
                        : 'text-green-300 hover:bg-green-800/50 hover:text-green-100'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsOpen(v => !v)}
              aria-label="Menú"
            >
              <motion.span
                className="block w-6 h-0.5 bg-green-300"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-green-300"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-green-300"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>

          {/* ── ESCUDO DERECHO (proyecto) ── */}
          <div className="flex items-center justify-end">
            <motion.img
              src="/escudo-proyecto.png"
              alt="Escudo del proyecto"
              className="h-20 w-auto object-contain drop-shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </div>
        </div>

        {/* Mobile menu desplegable */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="md:hidden bg-green-950/95 backdrop-blur-md border-t border-green-800 px-4 py-3 flex flex-col gap-1"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_ITEMS.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-green-700 text-white'
                        : 'text-green-300 hover:bg-green-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

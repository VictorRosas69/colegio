import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MESSAGES = {
  hero:       "Welcome to Guaitarilla! I'm Guaita, your explorer guide. This municipality in Nariño is a land of faith, culture and nature. Come with me and discover it!",
  religion:   "Faith is the heart of Guaitarilla. The Parish of San Juan Bautista and the devotion to the Virgin of the Rosary define the soul of our people. Every patron saint festival brings the whole community together.",
  location:   "Guaitarilla is located in southern Colombia, in the department of Nariño, at 1,800 meters above sea level. Its mild climate and Andean landscapes are simply spectacular.",
  economy:    "Agriculture drives our economy: coffee, cacao, sugarcane and tropical fruits. Local artisans also craft unique handmade pieces that represent our identity.",
  gastronomy: "My favorite part! Roasted cuy, Nariño-style fritada, pipián tamales and champús are dishes you must try. A true journey of flavors!",
  tourism:    "The Chorros de Güítara waterfalls, the Juanambú Canyon and the Historic Center are gems that will take your breath away. Every corner has a story to tell.",
  folklore:   "Andean music, the Carnival of Blacks and Whites — a UNESCO Heritage! — and handcrafted clay pieces are living expressions of our identity.",
}

const SPARKLE_CFG = [
  { id: 1, delay: 0,    x: '8%',  y: '18%', color: '#fbbf24', size: 7 },
  { id: 2, delay: 0.7,  x: '82%', y: '10%', color: '#60a5fa', size: 6 },
  { id: 3, delay: 1.3,  x: '90%', y: '52%', color: '#fbbf24', size: 5 },
  { id: 4, delay: 0.4,  x: '4%',  y: '70%', color: '#a78bfa', size: 6 },
  { id: 5, delay: 1.0,  x: '72%', y: '82%', color: '#34d399', size: 5 },
  { id: 6, delay: 1.7,  x: '22%', y: '88%', color: '#fbbf24', size: 4 },
  { id: 7, delay: 0.9,  x: '50%', y: '4%',  color: '#f472b6', size: 5 },
]

function StarShape({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10">
      <polygon
        points="5,0 6.2,3.8 10,3.8 7,6.2 8.1,10 5,7.8 1.9,10 3,6.2 0,3.8 3.8,3.8"
        fill={color}
      />
    </svg>
  )
}

function Sparkle({ delay, x, y, color, size }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -28, -45], opacity: [0, 1, 0], scale: [0.4, 1.3, 0], rotate: [0, 200] }}
      transition={{ duration: 2.8, repeat: Infinity, delay, ease: 'easeOut' }}
    >
      <StarShape color={color} size={size} />
    </motion.div>
  )
}

export default function Avatar({ section, isVisible }) {
  const [message, setMessage]       = useState(MESSAGES.hero)
  const [isTyping, setIsTyping]     = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [isOpen, setIsOpen]         = useState(true)

  // Cambio de sección → efecto typewriter
  useEffect(() => {
    const newMsg = MESSAGES[section] || MESSAGES.hero
    if (newMsg === message) return
    setIsTyping(true)
    setDisplayText('')
    setMessage(newMsg)
    let i = 0
    const iv = setInterval(() => {
      setDisplayText(newMsg.slice(0, ++i))
      if (i >= newMsg.length) { clearInterval(iv); setIsTyping(false) }
    }, 22)
    return () => clearInterval(iv)
  }, [section])

  // Typewriter inicial
  useEffect(() => {
    const txt = MESSAGES.hero
    let i = 0
    const iv = setInterval(() => {
      setDisplayText(txt.slice(0, ++i))
      if (i >= txt.length) clearInterval(iv)
    }, 22)
    return () => clearInterval(iv)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 select-none"
          initial={{ opacity: 0, y: 120, scale: 0.4 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 120, scale: 0.4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          {/* ── BUBBLE DE DIÁLOGO ── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="relative max-w-68"
                initial={{ opacity: 0, scale: 0.65, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.65, y: 18 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div className="relative bg-linear-to-br from-[#0f1e4a] to-[#0a0f2c] border border-blue-500/55 text-blue-50 text-sm rounded-2xl rounded-br-none px-4 py-3 shadow-2xl shadow-blue-950/70 backdrop-blur-md overflow-hidden">
                  {/* glow interno */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-purple-600/5 pointer-events-none rounded-2xl" />
                  {/* línea superior de color */}
                  <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-400/60 to-transparent" />

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2.5 text-blue-400/70 hover:text-white text-xs transition-colors"
                    aria-label="Cerrar"
                  >✕</button>

                  <p className="leading-relaxed pr-5 text-blue-100/90">
                    {displayText}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-3.5 bg-blue-400 ml-0.5 align-middle animate-pulse rounded-sm" />
                    )}
                  </p>

                  {/* Ondas de sonido al escribir */}
                  {isTyping && (
                    <div className="flex items-center gap-0.75 mt-2.5">
                      {[1,2,3,4,3,2,1].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-0.75 bg-blue-400 rounded-full"
                          animate={{ height: [3, h * 5, 3] }}
                          transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.065 }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {/* Cola de la burbuja */}
                <div className="absolute -bottom-1.75 right-4 w-3.5 h-3.5 bg-[#0f1e4a] border-r border-b border-blue-500/55 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── AVATAR CONTAINER ── */}
          <div className="relative w-32 h-32">

            {/* Partículas brillantes */}
            {SPARKLE_CFG.map(s => <Sparkle key={s.id} {...s} />)}

            {/* Anillo glow exterior pulsante */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 72%)' }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Anillo border animado */}
            <motion.div
              className="absolute inset-0.75 rounded-full border-2 border-blue-400/40 pointer-events-none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            {/* Segundo anillo más lento */}
            <motion.div
              className="absolute -inset-1.5 rounded-full border border-indigo-500/25 pointer-events-none"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── BOTÓN AVATAR ── */}
            <motion.button
              onClick={() => setIsOpen(v => !v)}
              className="absolute inset-0 cursor-pointer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0], transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.88 }}
              title="¡Hola! Soy Guaita, tu guía"
            >
              {/* ── IMAGEN REAL DEL AVATAR ── */}
              <div className="w-full h-full rounded-full overflow-hidden ring-[3px] ring-blue-400/70 ring-offset-2 ring-offset-blue-950 shadow-2xl shadow-blue-900/80">
                <img
                  src="/avatar.png"
                  alt="Guaita — Guía de Guaitarilla"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%', transform: 'scale(1.15)' }}
                  draggable={false}
                />
              </div>

              {/* ── BOCA HABLANDO (overlay sobre la imagen) ── */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{ left: '39%', top: '63.5%', width: '22%', height: '5.5%' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <svg viewBox="0 0 38 12" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Parche de piel — cubre la boca estática de la imagen */}
                      <ellipse cx="19" cy="6" rx="18" ry="5.5" fill="#f5c28a"/>

                      {/* Labio superior fijo */}
                      <path d="M3 5.5 Q10 3 19 4.5 Q28 3 35 5.5" fill="#e0956a" stroke="none"/>

                      {/* Interior oscuro de la boca — anima al hablar */}
                      <motion.ellipse
                        cx="19" cy="7"
                        rx="12" ry="1"
                        fill="#2d0a00"
                        animate={{ ry: [0.4, 4, 0.8, 3.5, 0.4] }}
                        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      {/* Dientes (aparecen al abrir) */}
                      <motion.rect
                        x="10" y="5.5"
                        width="18" height="3"
                        rx="1.5"
                        fill="white"
                        animate={{ opacity: [0, 1, 0.2, 0.9, 0], scaleY: [0, 1, 0.3, 0.9, 0] }}
                        style={{ transformOrigin: '19px 5.5px' }}
                        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      {/* Labio inferior — se mueve hacia abajo al hablar */}
                      <motion.path
                        fill="#d4855a"
                        animate={{
                          d: [
                            'M4 6 Q19 7.5 34 6',
                            'M4 6 Q19 11.5 34 6',
                            'M4 6 Q19 8.5 34 6',
                            'M4 6 Q19 11 34 6',
                            'M4 6 Q19 7.5 34 6',
                          ]
                        }}
                        transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>


              {/* ── INDICADOR DE TYPING ── */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-blue-500 rounded-full px-2 py-1 flex items-center gap-1 shadow-xl shadow-blue-500/60"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {[0, 0.18, 0.36].map(d => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.65, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

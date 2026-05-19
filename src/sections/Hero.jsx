import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* ── IMAGEN COMPLETA CON PARALLAX ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/inicio.png"
          alt="Guaitarilla, Nariño"
          className="w-full h-full object-cover object-center"
        />
        {/* Capa muy sutil arriba y abajo */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
        {/* Viñeta perimetral mínima */}
        <div className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.25)' }} />
      </motion.div>

      {/* Partículas flotantes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-green-300/50 pointer-events-none"
          style={{ left: `${8 + i * 9}%`, top: `${15 + (i % 5) * 14}%` }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}

      {/* ── CONTENIDO CENTRADO ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full"
      >
        {/* Halo de fondo detrás del bloque de texto central */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,0,0,0.35) 0%, transparent 100%)',
          }}
        />

        {/* Título */}
        <motion.h1
          className="relative font-display font-black leading-none mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <span
            className="block text-7xl md:text-9xl text-white"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.75), 0 4px 24px rgba(0,0,0,0.55)',
            }}
          >
            Guaita<span className="text-green-400" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(74,222,128,0.35)' }}>rilla</span>
          </span>
        </motion.h1>

        {/* Subtítulo script */}
        <motion.p
          className="relative font-script text-2xl md:text-4xl text-yellow-300 mb-5"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75), 0 0 18px rgba(0,0,0,0.55)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Tierra de fe, cultura y naturaleza
        </motion.p>

        {/* Descripción */}
        <motion.p
          className="relative text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-medium"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8), 0 2px 12px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Descubre un municipio donde los Andes guardan siglos de historia,
          donde cada fiesta es un poema y cada paisaje un abrazo de Colombia.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
        >
          <button
            onClick={() => document.getElementById('religion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-600/40"
          >
            Explorar el municipio
          </button>
          <button
            onClick={() => document.getElementById('tourism')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black/30 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Sitios turísticos
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {[
            { value: '~14K',   label: 'Habitantes' },
            { value: '1.800m', label: 'Altitud'    },
            { value: '1537',   label: 'Fundación'  },
          ].map(stat => (
            <div
              key={stat.label}
              className="text-center bg-black/35 backdrop-blur-md border border-white/15 rounded-2xl py-3 px-2"
            >
              <div className="font-display text-2xl font-bold text-green-300">{stat.value}</div>
              <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-300 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60">Desplázate</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}

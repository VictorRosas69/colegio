import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { Play, Music } from 'lucide-react'

const TRADICIONES = [
  {
    title: 'Carnaval de Negros y Blancos',
    emoji: '🎭',
    type: 'Festival UNESCO',
    color: 'from-purple-900/60 to-purple-800/40',
    border: 'border-purple-600/50',
    desc: 'Celebrado del 2 al 7 de enero, este carnaval — Patrimonio Inmaterial de la Humanidad — llena las calles de música, danzas, comparsas y el juego del talco y pintura negra.',
  },
  {
    title: 'Música Andina Colombiana',
    emoji: '🎵',
    type: 'Tradición musical',
    color: 'from-blue-900/60 to-blue-800/40',
    border: 'border-blue-600/50',
    desc: 'Bambucos, pasillos, torbellinos y sanjuaneros son géneros que suenan en las fiestas y veladas de Guaitarilla. La bandola, el tiple y la guitarra son sus voces.',
  },
  {
    title: 'Danza de los Andes',
    emoji: '💃',
    type: 'Danza folclórica',
    color: 'from-red-900/60 to-red-800/40',
    border: 'border-red-600/50',
    desc: 'Grupos de danza locales preservan las coreografías ancestrales con trajes bordados a mano, zapateados vigorosos y movimientos que narran la vida campesina.',
  },
  {
    title: 'Artesanías en Barro',
    emoji: '🏺',
    type: 'Artesanía ancestral',
    color: 'from-amber-900/60 to-amber-800/40',
    border: 'border-amber-600/50',
    desc: 'Los ceramistas de Guaitarilla modelan el barro con técnicas precolombinas, creando vasijas, figuras y utensilios únicos que se venden en ferias de todo el país.',
  },
  {
    title: 'Tejidos en Lana',
    emoji: '🧶',
    type: 'Textiles',
    color: 'from-green-900/60 to-green-700/40',
    border: 'border-green-600/50',
    desc: 'Mujeres artesanas tejen cobijas, ruanas, bolsos y tapetes en lana de oveja con patrones geométricos que evocan los paisajes y la cosmovisión andina.',
  },
  {
    title: 'Leyendas y Mitos',
    emoji: '👻',
    type: 'Tradición oral',
    color: 'from-slate-900/60 to-slate-800/40',
    border: 'border-slate-600/50',
    desc: 'La Llorona, el Duende, la Patasola y el Mojano habitan el imaginario local. Estas historias, transmitidas de generación en generación, definen la identidad nariñense.',
  },
]

export default function Folklore({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.1, onChange: v => v && onVisible?.('folklore') })
  const [playing, setPlaying] = useState(false)

  return (
    <section id="folklore" ref={ref} className="min-h-screen bg-linear-to-b from-green-950 via-purple-950/20 to-green-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">🎭</span>
          <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-semibold">Identidad Viva</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            Folclor y <span className="text-purple-400">Cultura</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            El alma de Guaitarilla vive en su música, sus danzas y sus artesanías.
            Cada expresión cultural es un hilo que conecta el presente con siglos de historia andina.
          </p>
        </motion.div>

        {/* Video carnaval */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-purple-700/40"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {!playing ? (
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
                alt="Carnaval de Negros y Blancos"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-950/90 to-purple-900/40 flex flex-col items-center justify-center">
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-purple-600/90 hover:bg-purple-500 flex items-center justify-center shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} className="text-white ml-1" fill="white" />
                </motion.button>
                <div className="flex items-center gap-2 mt-4">
                  <Music size={16} className="text-purple-300" />
                  <p className="text-white font-display text-xl font-bold">Carnaval de Negros y Blancos</p>
                </div>
                <p className="text-purple-300 text-sm mt-1">Patrimonio de la Humanidad · UNESCO</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video w-full">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="100%"
                playing
                controls
              />
            </div>
          )}
        </motion.div>

        {/* Tradiciones grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TRADICIONES.map((t, i) => (
            <motion.div
              key={t.title}
              className={`bg-linear-to-br ${t.color} border ${t.border} rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 hover:shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{t.emoji}</span>
                <span className="text-xs bg-white/10 border border-white/20 text-white/70 px-2.5 py-1 rounded-full">{t.type}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{t.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80"
            alt="Danza folclórica colombiana"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-purple-950/95 to-transparent flex items-center px-10">
            <div>
              <p className="font-script text-4xl text-purple-300 mb-2">
                "Bailar es orar dos veces"
              </p>
              <p className="text-green-300 text-sm max-w-md">
                En Guaitarilla, cada fiesta es un reencuentro con la historia,
                con los ancestros y con la alegría de ser nariñense.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

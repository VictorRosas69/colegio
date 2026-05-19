import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PLATOS = [
  {
    name: 'Cuy Asado',
    emoji: '🐾',
    desc: 'El plato estrella de Nariño. Cuy cocido a las brasas, acompañado de papas saladas y maní. Una delicia ancestral que se sirve en celebraciones especiales.',
    origen: 'Ancestral indígena',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
  },
  {
    name: 'Fritada Nariñense',
    emoji: '🥩',
    desc: 'Cerdo frito en su propia manteca, dorado y crujiente. Se acompaña con mote, maduro frito y ají de maní. Sabor que reconforta el alma.',
    origen: 'Mestizaje colonial',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
  },
  {
    name: 'Tamales de Pipián',
    emoji: '🌽',
    desc: 'Masa de maíz rellena con pipián de maní y pollo, envuelta en hoja de plátano. La preparación es un ritual familiar que toma todo el día.',
    origen: 'Herencia prehispánica',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
  },
  {
    name: 'Champús',
    emoji: '🥤',
    desc: 'Bebida refrescante de maíz fermentado, panela, lulo y hierbabuena. Tradicional en los días de Corpus Christi y fiestas patronales.',
    origen: 'Colonial andina',
    img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=80',
  },
  {
    name: 'Sopa de Quinua',
    emoji: '🥣',
    desc: 'Quinua con papas, hierbas aromáticas de páramo y col. Nutritiva y reconfortante, herencia directa de los pueblos indígenas de los Andes.',
    origen: 'Indígena andina',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80',
  },
  {
    name: 'Panela y Aguapanela',
    emoji: '🍯',
    desc: 'La panela de caña de azúcar local, disuelta en agua caliente, es el desayuno diario del campesino guaitarillense. Dulce identidad.',
    origen: 'Campesina colonial',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80',
  },
]

export default function Gastronomy({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.15, onChange: v => v && onVisible?.('gastronomy') })

  return (
    <section id="gastronomy" ref={ref} className="min-h-screen bg-linear-to-b from-green-950 to-amber-950/30 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">🍽️</span>
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold">Sabores Ancestrales</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            Gastronom<span className="text-yellow-400">ía</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            La cocina de Guaitarilla es un viaje a través del tiempo. Recetas indígenas, coloniales
            y mestizas conviven en cada plato, contando la historia del pueblo nariñense.
          </p>
        </motion.div>

        {/* Platos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATOS.map((plato, i) => (
            <motion.article
              key={plato.name}
              className="group bg-green-900/30 border border-green-700/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-900/50 transition-all duration-400 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={plato.img}
                  alt={plato.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/90 to-transparent" />
                <span className="absolute top-3 right-3 text-2xl">{plato.emoji}</span>
                <span className="absolute bottom-3 left-3 text-xs bg-yellow-600/80 text-yellow-100 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {plato.origen}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">{plato.name}</h3>
                <p className="text-green-300 text-sm leading-relaxed">{plato.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div
          className="mt-14 text-center py-12 px-6 bg-linear-to-r from-amber-900/20 via-green-900/20 to-amber-900/20 border border-yellow-700/30 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <p className="font-script text-4xl text-yellow-300 mb-3">
            "Cocinar es recordar a los abuelos"
          </p>
          <p className="text-green-400 text-sm">
            — Dicho popular de las cocinas nariñenses
          </p>
        </motion.div>
      </div>
    </section>
  )
}

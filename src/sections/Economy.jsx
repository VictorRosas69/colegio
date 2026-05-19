import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PRODUCTOS = [
  {
    emoji: '☕', name: 'Café', color: 'from-amber-900/60 to-amber-800/40', border: 'border-amber-700/50',
    desc: 'El café nariñense de altura tiene reconocimiento nacional e internacional por su acidez y aroma únicos.',
    badge: 'Exportación',
  },
  {
    emoji: '🍫', name: 'Cacao', color: 'from-orange-900/60 to-orange-800/40', border: 'border-orange-700/50',
    desc: 'El cacao fino de aroma, cultivado en las zonas cálidas del municipio, es base de chocolates artesanales.',
    badge: 'Agroindustria',
  },
  {
    emoji: '🎋', name: 'Caña de Azúcar', color: 'from-green-800/60 to-green-700/40', border: 'border-green-600/50',
    desc: 'De la caña se producen panela, guarapo y aguardiente artesanal, pilares de la economía local.',
    badge: 'Tradicional',
  },
  {
    emoji: '🍌', name: 'Frutales', color: 'from-yellow-900/60 to-yellow-800/40', border: 'border-yellow-700/50',
    desc: 'Plátano, lulo, tomate de árbol y maracuyá crecen en las laderas cálidas del municipio.',
    badge: 'Mercados locales',
  },
  {
    emoji: '🏺', name: 'Artesanías', color: 'from-red-900/60 to-red-800/40', border: 'border-red-700/50',
    desc: 'Cerámica, tejidos en lana y talla en madera son expresiones artísticas que generan ingresos únicos.',
    badge: 'Cultural',
  },
  {
    emoji: '🐄', name: 'Ganadería', color: 'from-teal-900/60 to-teal-800/40', border: 'border-teal-700/50',
    desc: 'La producción de leche y carne sustenta a numerosas familias campesinas en las veredas.',
    badge: 'Subsistencia',
  },
]

export default function Economy({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.2, onChange: v => v && onVisible?.('economy') })

  return (
    <section id="economy" ref={ref} className="min-h-screen bg-linear-to-b from-emerald-950/80 to-green-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">🌿</span>
          <span className="text-green-500 uppercase tracking-[0.3em] text-sm font-semibold">Riqueza Local</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            Actividad <span className="text-green-400">Económica</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            La agricultura es el motor de Guaitarilla. Sus suelos fértiles y variados pisos térmicos
            permiten cultivar desde café de altura hasta frutas tropicales, sosteniendo a miles de familias.
          </p>
        </motion.div>

        {/* Productos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PRODUCTOS.map((p, i) => (
            <motion.div
              key={p.name}
              className={`bg-linear-to-br ${p.color} border ${p.border} rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 hover:shadow-xl group`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.emoji}</span>
                <span className="text-xs bg-green-900/60 border border-green-700/50 text-green-300 px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-green-300 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
            alt="Cafeteros en los Andes colombianos"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-950/95 via-green-900/80 to-transparent flex items-center px-10">
            <div>
              <p className="font-script text-3xl text-yellow-300 mb-2">El campo es nuestra riqueza</p>
              <p className="text-green-200 max-w-md text-sm leading-relaxed">
                Más del 70% de la población guaitarillense trabaja la tierra con amor y dedicación,
                manteniendo viva una tradición campesina de generaciones.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

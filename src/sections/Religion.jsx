import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FIESTAS = [
  { name: 'Carnaval de Negros y Blancos', date: 'Enero 4-6', desc: 'Patrimonio inmaterial de la humanidad (UNESCO)', icon: '🎭' },
  { name: 'Fiesta de San Juan Bautista', date: '24 de Junio', desc: 'Patrono del municipio — misas, procesiones y ferias', icon: '⛪' },
  { name: 'Semana Santa', date: 'Marzo/Abril', desc: 'Procesiones solemnes con siglos de tradición', icon: '✝️' },
  { name: 'Virgen del Rosario', date: 'Octubre', desc: 'Novenas, flores y devoción comunitaria', icon: '🌹' },
]

function Card({ item, i }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      className="bg-green-900/40 border border-green-700/50 rounded-2xl p-5 backdrop-blur-sm hover:bg-green-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-900/50"
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.6 }}
    >
      <div className="text-3xl mb-3">{item.icon}</div>
      <h3 className="font-display text-lg font-bold text-green-200 mb-1">{item.name}</h3>
      <p className="text-yellow-400 text-sm font-medium mb-2">{item.date}</p>
      <p className="text-green-400 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

export default function Religion({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.2, onChange: v => v && onVisible?.('religion') })

  return (
    <section id="religion" ref={ref} className="min-h-screen bg-linear-to-b from-green-950 via-green-900/30 to-green-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">⛪</span>
          <span className="text-green-500 uppercase tracking-[0.3em] text-sm font-semibold">Fe y Tradición</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            El Alma de <span className="text-green-400">Guaitarilla</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            La religiosidad popular es el eje de la identidad guaitarillense. Cada celebración une a familias,
            refuerza lazos y mantiene viva una herencia de más de cuatro siglos.
          </p>
        </motion.div>

        {/* Main image + text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <img
              src="/iglesia_1.png"
              alt="Parroquia San Juan Bautista de Guaitarilla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-green-950/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-display text-xl font-bold">Parroquia San Juan Bautista</p>
              <p className="text-green-300 text-sm">Corazón espiritual del municipio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-bold text-green-300 mb-4">
              Fe que mueve montañas
            </h3>
            <p className="text-green-100 leading-relaxed mb-4">
              Desde la época colonial, la Iglesia Católica ha sido el centro de la vida social y espiritual
              de Guaitarilla. La Parroquia de <strong className="text-green-300">San Juan Bautista</strong>,
              erigida en el corazón del municipio, es testigo de bodas, bautizos, primeras comuniones y
              celebraciones que marcan los ritmos de la comunidad.
            </p>
            <p className="text-green-100 leading-relaxed mb-6">
              La devoción a la <strong className="text-green-300">Virgen del Rosario</strong> y a los santos
              patronales se expresa en procesiones nocturnas con velas, flores perfumadas y cantos que
              resuenan entre las montañas andinas.
            </p>
            <div className="flex items-center gap-3 bg-green-900/50 rounded-xl p-4 border border-green-700/40">
              <span className="text-3xl">🕊️</span>
              <p className="text-green-300 text-sm italic">
                "La fe del pueblo guaitarillense no está solo en los templos,
                sino en cada hogar, cada vereda y cada corazón nariñense."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fiestas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FIESTAS.map((item, i) => <Card key={item.name} item={item} i={i} />)}
        </div>
      </div>
    </section>
  )
}

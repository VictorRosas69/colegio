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
      className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30"
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.6 }}
    >
      <div className="text-3xl mb-3">{item.icon}</div>
      <h3 className="font-display text-lg font-bold text-white mb-1">{item.name}</h3>
      <p className="text-yellow-300 text-sm font-medium mb-2">{item.date}</p>
      <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

export default function Religion({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.2, onChange: v => v && onVisible?.('religion') })

  return (
    <section
      id="religion"
      ref={ref}
      className="relative min-h-screen py-24 px-6"
      style={{
        backgroundImage: 'url(/iglesia.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Capa oscura sobre la imagen de fondo */}
      <div className="absolute inset-0 bg-green-950/45" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Encabezado */}
        <motion.div
          className="text-center mb-16 bg-black/40 backdrop-blur-sm rounded-3xl py-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">⛪</span>
          <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">Fe y Tradición</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            El Alma de <span className="text-green-400">Guaitarilla</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            La religiosidad popular es el eje de la identidad guaitarillense. Cada celebración une a familias,
            refuerza lazos y mantiene viva una herencia de más de cuatro siglos.
          </p>
        </motion.div>

        {/* Imagen principal + texto */}
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
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-7 border border-white/10"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Fe que mueve montañas
            </h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Desde la época colonial, la Iglesia Católica ha sido el centro de la vida social y espiritual
              de Guaitarilla. La Parroquia de <strong className="text-green-300">San Juan Bautista</strong>,
              erigida en el corazón del municipio, es testigo de bodas, bautizos, primeras comuniones y
              celebraciones que marcan los ritmos de la comunidad.
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              La devoción a la <strong className="text-green-300">Virgen del Rosario</strong> y a los santos
              patronales se expresa en procesiones nocturnas con velas, flores perfumadas y cantos que
              resuenan entre las montañas andinas.
            </p>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
              <span className="text-3xl">🕊️</span>
              <p className="text-white/90 text-sm italic">
                "La fe del pueblo guaitarillense no está solo en los templos,
                sino en cada hogar, cada vereda y cada corazón nariñense."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grilla de fiestas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FIESTAS.map((item, i) => <Card key={item.name} item={item} i={i} />)}
        </div>

      </div>
    </section>
  )
}

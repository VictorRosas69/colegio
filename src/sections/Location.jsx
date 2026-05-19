import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Thermometer, Mountain, Users } from 'lucide-react'

const DATOS = [
  { icon: MapPin, label: 'Departamento', value: 'Nariño', sub: 'Sur de Colombia' },
  { icon: Mountain, label: 'Altitud', value: '1.800 m', sub: 'Sobre el nivel del mar' },
  { icon: Thermometer, label: 'Temperatura', value: '18-22°C', sub: 'Clima templado ideal' },
  { icon: Users, label: 'Población', value: '~14.000', sub: 'Habitantes aprox.' },
]

const VEREDAS = [
  'El Rosario', 'La Chorrera', 'Cuaical', 'Botanilla', 'El Higuerón',
  'Santa Teresita', 'La Playa', 'Guaranguez', 'Yuquillo', 'Cabuyal',
]

export default function Location({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.2, onChange: v => v && onVisible?.('location') })

  return (
    <section id="location" ref={ref} className="min-h-screen bg-linear-to-b from-green-950 to-emerald-950/80 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">🗺️</span>
          <span className="text-green-500 uppercase tracking-[0.3em] text-sm font-semibold">Geografía</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            Ubicación <span className="text-green-400">Geográfica</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Enclavado en la cordillera de los Andes, Guaitarilla es un municipio del sur colombiano
            que combina paisajes montañosos, valles fértiles y una biodiversidad única.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {DATOS.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.label}
                className="bg-green-900/40 border border-green-700/40 rounded-2xl p-5 text-center backdrop-blur-sm hover:bg-green-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-700/50 flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-green-300" />
                </div>
                <p className="text-xs text-green-500 uppercase tracking-wider mb-1">{d.label}</p>
                <p className="font-display text-2xl font-bold text-white mb-0.5">{d.value}</p>
                <p className="text-green-400 text-xs">{d.sub}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Map embed + description */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden border border-green-700/50 shadow-2xl">
              <iframe
                title="Mapa de Guaitarilla, Nariño"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.8!2d-77.678!3d1.118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2e5d8b3f2f2f2f%3A0x1234567890abcdef!2sGuaitarilla%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-30 contrast-[1.1]"
              />
            </div>
            <p className="text-green-500 text-xs mt-2 text-center">
              📍 Guaitarilla, Nariño — Colombia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-bold text-green-300 mb-4">
              Un paraíso en los Andes colombianos
            </h3>
            <p className="text-green-100 leading-relaxed mb-4">
              Guaitarilla se ubica al occidente del departamento de Nariño, a 22 km de Pasto,
              la capital departamental. Limita con los municipios de <strong className="text-green-300">
              Ancuya, Samaniego, La Florida y Consacá</strong>.
            </p>
            <p className="text-green-100 leading-relaxed mb-4">
              Su territorio está atravesado por el <strong className="text-green-300">río Güítara</strong>,
              que ha esculpido cañones impresionantes a lo largo de milenios. La topografía ondulada
              y los diferentes pisos térmicos permiten una agricultura diversa y variada.
            </p>
            <p className="text-green-100 leading-relaxed">
              El municipio cuenta con un casco urbano y <strong className="text-green-300">múltiples veredas</strong>
              distribuidas en su área rural, cada una con su propia identidad y tradiciones.
            </p>
          </motion.div>
        </div>

        {/* Veredas */}
        <motion.div
          className="bg-green-900/30 border border-green-700/40 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="font-display text-2xl font-bold text-green-300 mb-6 text-center">
            Veredas del municipio 🌿
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {VEREDAS.map((v, i) => (
              <motion.span
                key={v}
                className="bg-green-800/50 border border-green-600/40 text-green-200 px-4 py-1.5 rounded-full text-sm hover:bg-green-700/50 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                📍 {v}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

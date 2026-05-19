import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { Play, MapPin, Star } from 'lucide-react'

const LUGARES = [
  {
    name: 'Chorros de Güítara',
    emoji: '💧',
    desc: 'Cascadas naturales que caen desde las montañas andinas hacia el cañón del río Güítara. Un espectáculo de agua y verde que deja sin aliento.',
    tags: ['Ecoturismo', 'Naturaleza', 'Fotografía'],
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    rating: 4.9,
  },
  {
    name: 'Cañón del Juanambú',
    emoji: '🏔️',
    desc: 'Majestuoso cañón formado por el río Juanambú, con paredes de roca que llegan a cientos de metros de altura. Destino de aventura y contemplación.',
    tags: ['Senderismo', 'Aventura', 'Vista panorámica'],
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    rating: 4.8,
  },
  {
    name: 'Parque Central',
    emoji: '🌳',
    desc: 'El corazón del municipio, rodeado de la iglesia colonial, casas históricas y la vida cotidiana del pueblo. Ideal para conocer la cultura local.',
    tags: ['Historia', 'Cultura', 'Gastronomía'],
    img: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80',
    rating: 4.7,
  },
  {
    name: 'Mirador La Chorrera',
    emoji: '🌄',
    desc: 'Desde este punto se contempla el valle del Güítara y las montañas que rodean Guaitarilla. Amanecer o atardecer, la vista es siempre mágica.',
    tags: ['Vistas', 'Fotografía', 'Trekking'],
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    rating: 4.9,
  },
  {
    name: 'Aguas Termales',
    emoji: '♨️',
    desc: 'Fuentes de agua termal natural en zonas rurales del municipio. Perfectas para relajarse y conectar con la naturaleza nariñense.',
    tags: ['Relax', 'Bienestar', 'Ecoturismo'],
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
    rating: 4.6,
  },
  {
    name: 'Santuario Ecológico',
    emoji: '🦋',
    desc: 'Zona de conservación de flora y fauna andina. Orquídeas, colibríes y bromelias aguardan a quienes se aventuran por sus senderos.',
    tags: ['Flora', 'Fauna', 'Conservación'],
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
    rating: 4.8,
  },
]

function TouristCard({ lugar, i, inView }) {
  return (
    <motion.article
      className="group bg-green-900/30 border border-green-700/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-900/60 transition-all duration-400 hover:-translate-y-2"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={lugar.img}
          alt={lugar.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-950/90 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-900/80 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-300 text-xs font-semibold">{lugar.rating}</span>
        </div>
        <span className="absolute top-3 right-3 text-2xl">{lugar.emoji}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-white mb-2">{lugar.name}</h3>
        <p className="text-green-300 text-sm leading-relaxed mb-4">{lugar.desc}</p>
        <div className="flex flex-wrap gap-2">
          {lugar.tags.map(tag => (
            <span key={tag} className="text-xs bg-green-800/60 border border-green-600/40 text-green-300 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Tourism({ onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.1, onChange: v => v && onVisible?.('tourism') })
  const [playing, setPlaying] = useState(false)

  return (
    <section id="tourism" ref={ref} className="min-h-screen bg-linear-to-b from-amber-950/30 to-green-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-6xl mb-4 block">🏔️</span>
          <span className="text-green-500 uppercase tracking-[0.3em] text-sm font-semibold">Explora el territorio</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mt-3 mb-4">
            Sitios <span className="text-green-400">Turísticos</span>
          </h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Guaitarilla es un destino que sorprende: cascadas cristalinas, cañones imponentes,
            miradores infinitos y una naturaleza que invita a quedarse para siempre.
          </p>
        </motion.div>

        {/* Video section */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-green-700/40"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {!playing ? (
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                alt="Naturaleza en Nariño"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/80 to-green-900/40 flex flex-col items-center justify-center">
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-green-500/90 hover:bg-green-400 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} className="text-white ml-1" fill="white" />
                </motion.button>
                <p className="text-white mt-4 font-display text-xl font-bold">Ver: Nariño, Tierra de Encantos</p>
                <p className="text-green-300 text-sm mt-1 flex items-center gap-1">
                  <MapPin size={14} /> Documental turístico oficial
                </p>
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
                config={{ youtube: { playerVars: { showinfo: 1 } } }}
              />
            </div>
          )}
        </motion.div>

        {/* Tourist grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LUGARES.map((lugar, i) => (
            <TouristCard key={lugar.name} lugar={lugar} i={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-green-400 mb-4 font-display text-xl">¿Listo para explorar Guaitarilla?</p>
          <a
            href="https://www.google.com/maps/search/Guaitarilla+Nariño"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            <MapPin size={18} />
            Cómo llegar a Guaitarilla
          </a>
        </motion.div>
      </div>
    </section>
  )
}

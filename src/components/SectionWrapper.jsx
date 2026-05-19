import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '', onVisible }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
    onChange: (visible) => { if (visible && onVisible) onVisible(id) },
  })

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

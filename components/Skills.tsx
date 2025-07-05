'use client'
import { skills } from '@/lib/constants'
import { motion } from 'framer-motion'
import CardSkill from './CardSkill'

const Skills = () => {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center px-6'>
      {/* Header */}
      <motion.h2
        className='text-3xl sm:text-4xl text-primary font-bold mb-2'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      <motion.p
        className='text-foreground/70 text-sm sm:text-base max-w-2xl text-center mb-8'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        From sleek UIs to scalable APIs — I use modern tools to build clean,
        fast, and reliable products.
      </motion.p>

      {/* Cards Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl'>
        {skills.map((skill, i) => (
          <CardSkill {...skill} index={i} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Skills

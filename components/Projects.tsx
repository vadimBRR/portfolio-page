import { projects } from '@/lib/constants'
import ProjectsCard from './ProjectsCard'
import { motion } from 'framer-motion'
import { fadeInUP } from './About'
const Projects = () => {
	return (
		<section className='w-full h-full flex flex-col items-center justify-center px-6'>
			<motion.h2
				className='text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-[#7B3FE4] to-[#754a9e] bg-clip-text drop-shadow mb-8'
				variants={fadeInUP}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				My Projects
			</motion.h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl gap-8'>
				{projects.map((project, i) => (
					<ProjectsCard {...project} index={i} key={i} />
				))}
			</div>

			<motion.p
				className='mt-8 text-xs text-foreground/40 italic text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 2 }}
				viewport={{ once: true }}
			>
				I start too much and finish too little. I know. I&apos;m working on it
				:3
			</motion.p>
		</section>
	)
}

export default Projects

'use client'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
type Props = {
	title: string
	description: string
	stack: string[]
	link: string
	index: number
}
const ProjectsCard = ({ title, description, stack, link, index }: Props) => {
	return (
		<motion.div
			className='group relative flex flex-col justify-between bg-gradient-to-br from-[#16151d] to-[#1d1b26] border border-white/10 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[-1px_8px_30px_rgba(123,63,228,0.3)] transition-all duration-300 hover:-translate-y-2 h-full min-h-[200px]'
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
			viewport={{ once: true }}
		>
      <div className="absolute pointer-events-none inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg bg-purple-800/5  ring-1 ring-transparent group-hover:ring-primary/10  "></div>
			<div className=''>
				<h3 className='text-white text-lg font-bold group-hover:text-primary transition mb-2'>
					{title}
				</h3>
				<p className='text-sm text-foreground/70 mb-4'>{description}</p>
				<div className='flex flex-wrap gap-2 text-xs text-white/80 mb-4'>
					{stack.map((tech, i) => (
						<span
							key={i}
							className='bg-white/10 px-2 py-1 rounded-md hover:bg-purple-500/30 transition cursor-pointer duration-200 scale-100 hover:scale-105'
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<a
				href={link}
				className='inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline hover:text-white transition-colors '
			>
				<ExternalLink size={16} />
				View on GitHub
			</a>
		</motion.div>
	)
}

export default ProjectsCard

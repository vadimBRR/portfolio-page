'use client'

import { motion } from 'framer-motion'

import {
	TypeIcon,
	TerminalSquare,
	GraduationCap,
	RectangleVerticalIcon,
} from 'lucide-react'

const About = () => {
	return (
		<section className='w-full h-full flex items-center justify-center'>
			<motion.div
				className='max-w-3xl text-center lg:text-left'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay:0.2 }}
				viewport={{ once: true }}
			>
				<h2 className='text-primary text-3xl sm:text-4xl font-bold mb-4'>
					About Me
				</h2>
				<div className='space-y-5 text-sm sm:text-base leading-relaxed'>
					<p className='text-foreground/80'>
						Hey, I'm <span className='text-white font-semibold'>Vadym</span> — a
						developer driven by curiosity. I love experimenting, building, and
						jumping into new ideas — not just for work, but because I genuinely
						enjoy it.
					</p>
					<p className='text-foreground/70'>
						Over the years, I’ve explored a wide range of projects:{' '}
						<span className='text-white font-medium'> web apps</span>,
						<span className='text-white font-medium'> browser extensions</span>,
						<span className='text-white font-medium'> game mods</span>,
						<span className='text-white font-medium'> IoT tools</span>, even{' '}
						<span className='text-white font-medium'>AI experiments</span> and{' '}
						<span className='text-white font-medium'> indie games</span>. I’ve
						never liked staying in one lane — and I’m not planning to stop
						exploring.
					</p>
					<p className='text-foreground/70'>
						Programming, to me, is more than a job — it’s a playground where I
						bring ideas to life. I’m passionate about building clean,
						performant, and intuitive experiences that feel as good as they
						look.
					</p>

					<p className='text-foreground/70'>
						Whether I’m writing backend logic or polishing a UI detail, I always
						keep one thing in mind:
						<span className='block mt-1 text-primary font-semibold  tracking-wide'>
							“Keep it simple, stupid ^.^”
						</span>
					</p>

					<p className='mt-6 text-xs text-foreground/50 italic'>
						Always learning, always building — and always up for something new.
					</p>
				</div>

				{/* Icons */}
				<motion.div
					className='flex gap-6 justify-center lg:justify-start mt-6 text-primary'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<RectangleVerticalIcon size={28} strokeWidth={2} />
					<TypeIcon size={28} strokeWidth={2} />
					<TerminalSquare size={28} strokeWidth={2} />
					<GraduationCap size={28} strokeWidth={2} />
				</motion.div>
			</motion.div>
		</section>
	)
}

export default About

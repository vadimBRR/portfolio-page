'use client'

import { useActiveSection } from '@/store/useActiveSection'
import { motion } from 'framer-motion'

import {
	TypeIcon,
	TerminalSquare,
	GraduationCap,
	RectangleVerticalIcon,
} from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'

const containerVariant = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
}

export const fadeInUP = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const About = () => {
	const isActive = useActiveSection(state => state.activeIndex === 1)

	return (
		<section className='w-full h-full flex items-center justify-center px-6'>
			<motion.div
				className='max-w-3xl text-center lg:text-left'
				variants={containerVariant}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<motion.h2
					className='text-primary text-3xl sm:text-4xl font-bold mb-4'
					variants={fadeInUP}
				>
					About Me
				</motion.h2>
				<div className='space-y-5 text-sm sm:text-base leading-relaxed'>
					<motion.p className='text-foreground/80' variants={fadeInUP}>
						Hey, I'm <span className='text-white font-semibold'>Vadym</span> — a
						developer driven by curiosity. I love experimenting, building, and
						jumping into new ideas — not just for work, but because I genuinely
						enjoy it.
					</motion.p>

					<motion.p className='text-foreground/70' variants={fadeInUP}>
						Over the years, I’ve explored a wide range of projects:{' '}
						<span className='text-white font-medium'>web apps</span>,
						<span className='text-white font-medium'> browser extensions</span>,
						<span className='text-white font-medium'> game mods</span>,
						<span className='text-white font-medium'> IoT tools</span>, even{' '}
						<span className='text-white font-medium'>AI experiments</span> and{' '}
						<span className='text-white font-medium'>indie games</span>. I’ve
						never liked staying in one lane — and I’m not planning to stop
						exploring.
					</motion.p>

					<motion.p className='text-foreground/70' variants={fadeInUP}>
						Programming, to me, is more than a job — it’s a playground where I
						bring ideas to life. I’m passionate about building clean,
						performant, and intuitive experiences that feel as good as they
						look.
					</motion.p>

					<motion.p className='text-foreground/70' variants={fadeInUP}>
						There’s a line I heard once that just clicked — and it’s been my
						go-to ever since:
						<span
							className='block mt-1 text-primary font-semibold tracking-wide drop-shadow hover:underline cursor-pointer '
							onClick={() => alert('🥚 You found 2/5 easter eggs')}
						>
							{isActive ? (
								<Typewriter
									words={['“Keep it simple, stupid ^.^”']}
									loop
									cursor
									cursorStyle='_'
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={1500}
								/>
							) : (
								'“Keep it simple, stupid ^.^”'
							)}
						</span>
					</motion.p>

					<motion.p
						className='mt-6 text-xs text-foreground/50 italic'
						variants={fadeInUP}
					>
						Always learning, always building — and always up for something new.
					</motion.p>
				</div>

				{/* Icons */}
				<div className='flex gap-6 justify-center lg:justify-start mt-6 text-primary'>
					{[RectangleVerticalIcon, TypeIcon, TerminalSquare, GraduationCap].map(
						(Icon, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.7 }}
								whileInView={{ opacity: 1, scale: 1 }}
								whileHover={{ scale: 1.2 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.6 + 0.2 * i }}
								className='drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]'
							>
								<motion.div
									animate={{
										scale: [1, isActive ? 1.15 : 1, 1],
									}}
									transition={{
										duration: 3,
										repeat: isActive ? Infinity : 0,
										repeatType: 'loop',
										delay: i * 0.3,
										ease: 'easeInOut',
									}}
								>
									<Icon
										size={28}
										strokeWidth={2}
										className='drop-shadow-[0_0_8px_#7c3aed80]'
									/>
								</motion.div>
							</motion.div>
						)
					)}
				</div>
			</motion.div>
		</section>
	)
}

export default About

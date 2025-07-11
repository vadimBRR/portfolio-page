import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useActiveSection } from '@/store/useActiveSection'

const Hero = () => {
	const isActive = useActiveSection(state => state.activeIndex === 0)

	return (
		<section className='w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center px-6 gap-10'>
			{/* Text */}
			<div className='lg:flex-1 max-w-xl '>
				<motion.h1
					className='text-4xl sm:text-6xl font-bold text-foreground text-center lg:text-left relative group'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span
						onClick={() => alert('🥚 You found 1/5 easter eggs')}
						className='cursor-pointer hover:underline'
					>
						Vadym Brovych
					</span>
					<span className='absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity'>
						hovered 👀
					</span>
				</motion.h1>

				<motion.h2
					className='text-xl sm:text-2xl text-primary font-semibold mt-2 lg:mt-4 text-center lg:text-left'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{isActive ? (
						<Typewriter
							words={[
								'Full Stack Developer',
								'React Engineer',
								'TypeScript Fan',
								'Express.js in Progress',
								'Meow <3',
								'Still typing...',
								'console.log("Hello World!")',
							]}
							loop
							cursor
							cursorStyle='_'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					) : (
						'Full Stack Developer'
					)}
				</motion.h2>
				<motion.p
					className='text-foreground/70 text-sm sm:text-base mt-3 lg:mt-6 text-center lg:text-left'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					I build performant and aesthetic web applications using React, Next.js
					and TypeScript. Passionate about clean code, elegant UI and modern
					tech.
				</motion.p>

				{/* Buttons */}
				<div className='flex gap-4 mt-8 w-full  justify-center items-center lg:justify-start'>
					<motion.div
						className='flex items-center'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.6 }}
					>
						<motion.a
							href='#contact'
							className='bg-primary text-white px-6 py-3 rounded-full hover:brightness-105 transition-colors text-center'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Contact Me
						</motion.a>
					</motion.div>

					<motion.div
						className='flex items-center'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.7 }}
					>
						<motion.a
							href='/CV_Vadym_Brovych.pdf'
							download
							className='border border-primary text-primary hover:text-white hover:border-white transition-colors px-6 py-3 rounded-full text-center'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Download CV
						</motion.a>
					</motion.div>
				</div>
			</div>

			{/* Photo */}
			<motion.div
				className='relative flex lg:h-full items-center lg:items-center z-10'
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: [0, isActive ? -15 : 0, 0] }}
				transition={{
					opacity: { duration: 0.6, delay: 0.6 },
					y: {
						duration: 6,
						repeat: isActive ? Infinity : 0,
						repeatType: 'loop',
						ease: 'easeInOut',
					},
				}}
			>
				<div className='relative w-[250px] sm:w-[300px] lg:w-[400px] aspect-square rounded-full flex items-center justify-center before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-[#7B3FE4] before:to-[#FF61C7] before:blur-xl before:opacity-30'>
					<div className='z-10 rounded-full overflow-hidden border-2 border-purple-400/30'>
						<Image
							src='/images/avatar.png'
							alt='Vadym Brovych photo'
							width={400}
							height={400}
							className='object-cover w-full h-full select-none pointer-events-none'
							priority
						/>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Hero

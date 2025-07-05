import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
	return (
		<section className='w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center px-6'>
			{/* Text */}
			<div className='flex-1 max-w-xl'>
				<motion.h1
					className='text-4xl sm:text-6xl font-bold text-foreground text-center lg:text-left relative group'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span
						onClick={() => alert("🥚 You found 1/5 easter eggs")}
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
				<div className='flex gap-4 mt-8'>
					<motion.div
						className='flex items-center'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.6 }}
					>
						<motion.a
							href='#contact'
							className='bg-primary text-white px-6 py-3 rounded-full hover:brightness-105 transition-colors'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Contact Me
						</motion.a>
					</motion.div>

					<motion.div
						className='flex items-center '
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.7 }}
					>
						<motion.a
							href='/Vadym_Brovych_CV.pdf'
							download
							className='border border-primary text-primary hover:text-white hover:border-white transition-colors px-6 py-3 rounded-full'
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
				className='flex-1 relative flex h-full items-center lg:items-end z-10 '
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: [0, -15, 0] }}
				transition={{
					opacity: { duration: 0.6, delay: 0.6 },
					y: {
						duration: 6,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'easeInOut',
					},
				}}
			>
				<Image
					src='/images/avatar.png'
					alt='Vadym Brovych photo'
					width={500}
					height={500}
					className='w-auto h-[40vh] sm:h-[60vh] lg:h-[90vh] object-contain drop-shadow-[0_0_60px_rgba(123,63,228,0.3)] select-none pointer-events-none'
					priority
				/>
			</motion.div>
		</section>
	)
}

export default Hero

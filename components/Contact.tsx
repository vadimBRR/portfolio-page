import { contact_links } from '@/lib/constants'
import ContactCard from './ContactCard'
import { motion } from 'framer-motion'
import { fadeInUP } from './About'
const Contact = () => {
	return (
		<section className='w-full h-full flex flex-col items-center justify-center px-6'>
			{/* Header */}
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r t-to-r from-[#7B3FE4] to-[#754a9e] bg-clip-text drop-shadow mb-4' variants={fadeInUP} initial="hidden" whileInView="show" viewport={{once:true}} transition={{duration:0.5, delay:0.3}}>
				Contact Me
			</motion.h2>

			<motion.p className='text-foreground/70 text-sm sm:text-base text-center max-w-xl mb-8' variants={fadeInUP} initial="hidden" whileInView="show" viewport={{once:true}} transition={{duration:0.5, delay:0.5}}>
				Let’s connect — whether it’s about work, ideas, or just vibes.
			</motion.p>

			{/* Contact Container */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl'>
				{contact_links.map((contact, i) => (
					<ContactCard key={i} {...contact} index={i} />
				))}
			</div>

			{/* Comment */}
			<motion.p
				className='text-xs text-foreground/40 italic text-center mt-8'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 2 }}
        viewport={{once:true}}
			>
				Sometimes I code. Sometimes I answer. Both are valid.
			</motion.p>
		</section>
	)
}

export default Contact

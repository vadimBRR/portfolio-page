import { motion } from 'framer-motion'
type Props = {
	label: string
	icon: React.ElementType
	href: string
	color: string
	index: number
}
const ContactCard = ({ label, icon: Icon, href, color, index }: Props) => {
	return (
		<motion.a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='group flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-br from-[#16151d] to-[#1d1b26] rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-[rgba(123,63,228,0.1)] shadow hover:shadow-[0_0_20px_rgba(123,63,228,0.2)] transition duration-300 scale-100 hover:scale-103'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
			viewport={{ once: true }}
		>
			<Icon
				size={18}
				className={`${color} group-hover:scale-110 transition-transform`}
			/>

			{label}
		</motion.a>
	)
}

export default ContactCard

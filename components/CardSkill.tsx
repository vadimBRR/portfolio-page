import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { motion } from 'framer-motion'
type Props = {
	title: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
	items: string[]
	index: number
}
const CardSkill = ({ title, icon: Icon, items, index }: Props) => {
  const handleClick = (item:string) => {
    if(item === 'Tailwind CSS'){
       alert('🥚 You found 3/5 easter eggs')
    }
  }
	return (
		<motion.div
			className='group relative p-6 bg-gradient-to-br from-[#1e1b2f]/80 to-[#2a2540]/60 rounded-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_30px_rgba(123,63,228,0.2)] transition duration-300 hover:-translate-y-1 hover:border-purple-500/10'
			initial={{ opacity: 0, y: 30, scale: 0.9 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
			viewport={{ once: true }}
		>
			<div className='animate-pulse'>
				<Icon className='text-primary w-7 h-7 mb-3' />
			</div>
			<h3 className='text-white font-semibold text-lg mb-3'>{title}</h3>
			<div className='flex flex-wrap gap-2 text-sm'>
				{items.map((item, i) => (
					<span
						key={i}
						className={`bg-white/10 text-white/80 px-2 py-1 rounded-md hover:bg-purple-500/20 cursor-pointer transition duration-200 scale-100 hover:scale-105 ${item==='Tailwind CSS' ? 'hover:bg-red-500/20' : 'hover:bg-purple-500/20'}`}
            onClick={()=>handleClick(item)}
					>
						{item}
					</span>
				))}
			</div>
		</motion.div>
	)
}

export default CardSkill

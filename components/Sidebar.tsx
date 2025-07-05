import { motion } from 'framer-motion'
import { navLinks } from '@/lib/constants'
import { useSidebarNavigation } from '@/hooks/useSidebarNavigation'
import Image from 'next/image'

type Props = {
	scrollContainerRef: React.RefObject<HTMLDivElement | null>
}
const Sidebar = ({ scrollContainerRef }: Props) => {
	const { activeIndex, handleClick, liquidX, refs } =
		useSidebarNavigation(scrollContainerRef)

	return (
		<>
			<div className='min-h-screen bg-background w-24 border-r custom-border flex-col items-center gap-8 pt-5 md:flex hidden'>
				{/* Logo */}
				<div className='bg-primary size-10 rounded-full text-white text-xl flex items-center justify-center font-bold hover:bg-purple-400/40 transition duration-200 hover:scale-95'>
					<Image src={'/icon.png'} width={40} height={40} alt='logo'/>
				</div>

				{/* Nav */}
				<nav className='relative flex flex-col items-center gap-10 mt-10'>
					{/* Liquid */}
					<motion.div
						layoutId='liquid-nav'
						className='absolute w-12 h-12 z-0'
						initial={false}
						animate={{ top: `${activeIndex * 88}px` }}
						transition={{ type: 'spring', stiffness: 300, damping: 25 }}
					>
						<motion.div
							key={activeIndex}
							className='w-full h-full rounded-2xl bg-gradient-to-tr from-[#4C3575] to-[#724F96] shadow-[0_0_10px_#4C357588] ring-1 ring-white/5 backdrop-blur-sm origin-center'
							initial={false}
							animate={{
								scaleY: [1, 1.3, 1],
								borderRadius: ['0.75rem', '1.5rem', '0.75rem'],
							}}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
						></motion.div>
					</motion.div>

					{/* Icons */}
					{navLinks.map((link, i) => {
						const Icon = link.icon
						const isActive = link.id === activeIndex

						return (
							<div
								key={link.id}
								className='group w-12 h-12 z-10 flex flex-col items-center justify-center cursor-pointer'
								onClick={() => handleClick(link.id, link.name)}
							>
								<Icon
									size={20}
									className={`transition-colors duration-300  drop-shadow-[0_0_6px_var(--color-primary)] ${
										isActive
											? 'text-white '
											: 'text-foreground/50 group-hover:text-foreground'
									}`}
								/>

								<span
									className={`text-xs mt-1 font-medium transition-colors duration-300 ${
										isActive
											? ''
											: 'text-foreground/50 group-hover:text-foreground'
									}`}
								>
									{link.name}
								</span>
							</div>
						)
					})}
				</nav>
			</div>

			{/* Mobile */}
			<div className='fixed bottom-0 inset-x-0 bg-background border-t custom-border flex flex-row justify-around items-center md:hidden py-2 z-50'>
				<motion.div
					layoutId='liquid-nav-mobile'
					className='w-12 h-12 absolute'
					animate={{ left: liquidX }}
					initial={false}
					transition={{ type: 'spring', stiffness: 300, damping: 25 }}
				>
					<motion.div
						key={activeIndex}
						className='w-full h-full rounded-2xl bg-gradient-to-tr from-[#4C3575] to-[#724F96] shadow-[0_0_10px_#4C357588] ring-1 ring-white/5 backdrop-blur-sm origin-center'
						animate={{
							scaleX: [1, 1.4, 1],
							borderRadius: ['0.75rem', '1.5rem', '0.75rem'],
						}}
					></motion.div>
				</motion.div>

				{navLinks.map((link, i) => {
					const Icon = link.icon
					const isActive = link.id === activeIndex

					return (
						<div
							key={link.id}
							ref={el => {
								refs.current[link.id] = el
							}}
							className='group flex flex-col items-center cursor-pointer z-10'
							onClick={() => handleClick(link.id, link.name)}
						>
							<Icon
								size={22}
								className={`transition-colors duration-300 ${
									isActive
										? 'text-white'
										: 'text-foreground/50 group-hover:text-foreground'
								}`}
							/>
							<span
								className={`transition-colors duration-300 text-[10px] ${
									isActive
										? 'text-white'
										: 'text-foreground/50 group-hover:text-foreground'
								}`}
							>
								{link.name}
							</span>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Sidebar

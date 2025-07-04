'use client'

import { useState } from 'react'
import { motion, spring } from 'framer-motion'
import { Home, User, FolderGit2, Mail, Code } from 'lucide-react'

const Sidebar = () => {
	const links = [
		{ id: 0, name: 'Home', icon: Home },
		{ id: 1, name: 'About', icon: User },
		{ id: 2, name: 'Skills', icon: Code },
		{ id: 3, name: 'Projects', icon: FolderGit2 },
		{ id: 4, name: 'Contact', icon: Mail },
	]

	const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (id:number, name:string) => {
    setActiveIndex(id);
    document.getElementById(name.toLowerCase())?.scrollIntoView({behavior: 'smooth'})
  }

	return (
		<div className='min-h-screen bg-background w-24 border-r custom-border flex flex-col items-center gap-8 pt-5'>
			{/* Logo */}
			<div className='bg-primary size-10 rounded-full text-white text-xl flex items-center justify-center font-bold'>
				V
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
				{links.map((link, i) => {
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
	)
}

export default Sidebar

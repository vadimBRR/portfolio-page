'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import Sidebar from '@/components/Sidebar'
import Skills from '@/components/Skills'
import { useRef } from 'react'

export default function Home() {
	const scrollRef = useRef<HTMLDivElement | null>(null)

	return (
		<div className='flex flex-row min-h-screen'>
			<Sidebar scrollContainerRef={scrollRef} />
			<div className='flex-1 '>
        {/* sm:snap-y sm:snap-proximity snap-none  */}
				<main
					ref={scrollRef}
					className='overflow-y-scroll h-screen bg-gradient-to-br from-[#0a0a0a] to-[#111019]'
				>
					<section id='home' className='h-screen snap-start relative'>
						<Hero />
					</section>
					<SectionDivider />
					<section
						id='about'
						className='min-h-screen snap-start flex items-center justify-center'
					>
						<About />
					</section>
					<SectionDivider />

					<section
						id='skills'
						className='min-h-screen snap-start my-12 md:my-6  flex items-center justify-center'
					>
						<Skills />
					</section>
					<SectionDivider />

					<section id='projects' className='min-h-screen snap-start my-6  flex items-center justify-center'>
						<Projects />
					</section>
					<section id='contact' className='h-screen snap-start'>
						<Contact />
					</section>
				</main>
			</div>
		</div>
	)
}

"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Sidebar from '@/components/Sidebar'
import Skills from '@/components/Skills'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
	const scrollRef = useRef<HTMLDivElement | null>(null)
	return (
		<div className='flex flex-row min-h-screen'>
			<Sidebar scrollContainerRef={scrollRef}/>
			<div className='flex-1 '>
				<main
					ref={scrollRef}
					className='snap-y snap-proximity overflow-y-scroll h-screen scroll-smooth bg-gradient-to-br from-[#0a0a0a] to-[#111019]'
				>
					<section id='home' className='h-screen snap-start relative'>
						<Hero />
					</section>
					<section id='about' className='h-screen snap-start'>
						<About />
					</section>
					<section id='skills' className='h-screen snap-start'>
						<Skills />
					</section>
					<section id='projects' className='h-screen snap-start'>
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

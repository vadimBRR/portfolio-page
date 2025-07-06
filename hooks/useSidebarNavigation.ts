import { navLinks } from '@/lib/constants'
import { useActiveSection } from '@/store/useActiveSection'
import { useEffect, useRef, useState } from 'react'

export function useSidebarNavigation(
	scrollContainerRef: React.RefObject<HTMLDivElement | null>
) {
	const activeIndex = useActiveSection(state => state.activeIndex)
	const setActiveIndex = useActiveSection.getState().setActiveIndex
	const [liquidX, setLiquidX] = useState(0)
	const [logoClickedCount, setLogoClickedCount] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	const refs = useRef<(HTMLDivElement | null)[]>([])
	let rafId: number | null = null
	const activeIndexRef = useRef(activeIndex)
	const isManuallyScroll = useRef(false)

	const handleClickLogo = () => {
		if (logoClickedCount !== 5) setLogoClickedCount(logoClickedCount + 1)
		else {
			alert('🥚 You found 5/5 easter eggs')
			setLogoClickedCount(0)
		}
	}

	const updateLiquid = (id: number) => {
	const el = refs.current[id]
	if (el) {
		const rect = el.getBoundingClientRect()
		setLiquidX(rect.left + rect.width / 2 - 24)
	}
}

	const handleClick = (id: number, name: string) => {
	if (isTransitioning) return
	setIsTransitioning(true)
	setActiveIndex(id)
	isManuallyScroll.current = true

	updateLiquid(id) // 🟢 одразу перемістити indicator

	document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

	const scrollEl = scrollContainerRef.current
	if (scrollEl) {
		const onScrollEnd = () => {
			updateLiquid(id) // 🔁 ще раз підтвердити після скролу
			isManuallyScroll.current = false
			setIsTransitioning(false)
			scrollEl.removeEventListener('scrollend', onScrollEnd as any)
		}
		scrollEl.addEventListener('scrollend', onScrollEnd as any)

		// fallback
		setTimeout(() => {
			updateLiquid(id)
			isManuallyScroll.current = false
			setIsTransitioning(false)
			scrollEl.removeEventListener('scrollend', onScrollEnd as any)
		}, 600)
	}
}



	useEffect(() => {
		activeIndexRef.current = activeIndex
	}, [activeIndex])

	useEffect(() => {
		const scrollEl = scrollContainerRef.current
		if (!scrollEl) return

		const handleScroll = () => {
			if (isManuallyScroll.current) return
			const containerRect = scrollEl.getBoundingClientRect()

			for (let i = 0; i < navLinks.length; i++) {
				const section = document.getElementById(navLinks[i].name.toLowerCase())
				if (!section) continue

				const rect = section.getBoundingClientRect()
				const triggerPoint = containerRect.top + containerRect.height * 0.3

				const isVisible = rect.top <= triggerPoint && rect.bottom > triggerPoint
				if (isVisible) {
					if (i !== activeIndexRef.current) {
						setActiveIndex(i)
						updateLiquid(i)
					}
					break
				}
			}
		}

		scrollEl.addEventListener('scroll', handleScroll, { passive: true })
		return () => scrollEl.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			updateLiquid(activeIndexRef.current)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		updateLiquid(0)
	}, [])

	return {
		activeIndex,
		liquidX,
		handleClick,
		refs,
		handleClickLogo,
		logoClickedCount,
	}
}

import { create } from 'zustand'

type ActiveSectionStore = {
	activeIndex: number
	setActiveIndex: (index: number) => void
}

export const useActiveSection = create<ActiveSectionStore>(set => ({
	activeIndex: 0,
	setActiveIndex: index => set({ activeIndex: index }),
}))

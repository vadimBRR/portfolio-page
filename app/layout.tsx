import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Vadym Brovych Portfolio',
	description: 'Junior Full Stack Developer Portfolio',
	icons: {
		icon: '/icon.ico',
		shortcut: '/icon.png',
		apple: '/icon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} antialiased bg-background text-foreground`}
			>
				{children}
			</body>
		</html>
	)
}

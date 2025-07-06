import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Vadym Brovych Portfolio',
	description:
		'Personal portfolio of Vadym Brovych: showcasing projects, skills and contact info',
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

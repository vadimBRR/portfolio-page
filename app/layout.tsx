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
	title: 'Vadym Brovych',
	description: 'Junior Full Stack Developer Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} antialiased bg-background text-foreground`}
			>
				<div className='flex flex-row min-h-screen'>
					<Sidebar />
					{children}
				</div>
			</body>
		</html>
	)
}

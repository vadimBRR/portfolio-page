import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Sidebar'
import SidebarMy from '@/components/SidebarMy'

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
				className={`${poppins.className} antialiased bg-background text-foreground`}
			>
				<div className='flex flex-row min-h-screen'>
					<SidebarMy />
          <div className="flex-1 ">
					{children}

          </div>
				</div>
			</body>
		</html>
	)
}

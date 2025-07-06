import {
	Home,
	User,
	FolderGit2,
	Code,
	Code2,
	Server,
	Database,
	ToolCase,
	Mail,
	Github,
	Linkedin,
	Instagram,
	Facebook,
} from 'lucide-react'
import {} from 'lucide-react'
import { SiTelegram, SiThreads, SiX } from 'react-icons/si'

export const navLinks = [
	{ id: 0, name: 'Home', icon: Home },
	{ id: 1, name: 'About', icon: User },
	{ id: 2, name: 'Skills', icon: Code },
	{ id: 3, name: 'Projects', icon: FolderGit2 },
	{ id: 4, name: 'Contact', icon: Mail },
]

export const skills = [
	{
		title: 'Frontend',
		icon: Code2,
		items: [
			'React',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Redux',
			'Framer Motion',
		],
	},
	{
		title: 'Backend',
		icon: Server,
		items: [
			'Node.js',
			'Express.js',
			'FastAPI',
			'JWT',
			'REST API',
			'Zod',
			'Prisma',
		],
	},
	{
		title: 'Databases',
		icon: Database,
		items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase'],
	},
	{
		title: 'Other',
		icon: ToolCase,
		items: [
			'Python',
			'Java',
			'Docker',
			'MQTT',
			'Git',
			'Vite',
			'Figma',
			'Photoshop',
		],
	},
]

export const projects = [
	{
		title: 'Personal Portfolio',
		description:
			'This site you’re browsing is a live, in-progress portfolio with dark mode, scroll snapping, motion, and easter eggs :)',
		stack: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Framer Motion',
			'Zustand',
			'Vite',
		],
		link: 'https://github.com/vadimBRR/portfolio-page',
	},

	{
		title: 'EverStock – Inventory App',
		description:
			'Cross-platform inventory system with real-time stock control, team management, analytics, and secure login.',
		stack: [
			'React Native',
			'Supabase',
			'Clerk',
			'Zustand',
			'TanStack Query',
			'TypeScript',
			'Tailwind CSS',
		],
		link: 'https://github.com/vadimBRR/EverStock',
	},
	{
		title: '1024 Game – with Superpowers',
		description:
			'Modern 2048 remake with new mechanics, leaderboard, login system, and responsive UI.',
		stack: [
			'React',
			'Spring Boot',
			'SCSS',
			'Vite',
			'Axios',
			'React Hook Form',
			'Bootstrap',
		],
		link: 'https://github.com/vadimBRR/1024-game',
	},
	{
		title: 'Magic Puzzle Solver',
		description:
			'Full-stack visualization of A*, Greedy, and DFS algorithms solving 8/15-puzzles with performance metrics.',
		stack: [
			'React',
			'TypeScript',
			'FastAPI',
			'Tailwind CSS',
			'Vite',
			'SQLite',
			'SQLAlchemy',
		],
		link: 'https://github.com/vadimBRR/15Puzzle-ISI',
	},
	{
		title: 'SmartAttendance – IoT Attendance System',
		description:
			'ISIC-based classroom attendance system using RFID, MQTT, and custom FSM logic.',
		stack: [
			'React',
			'FastAPI',
			'MQTT',
			'Tailwind CSS',
			'TypeScript',
			'SQLite',
			'SQLAlchemy',
			'Vite',
		],
		link: 'https://github.com/vadimBRR/SmartAttendance',
	},
	{
		title: 'Legends of the Blade – RPG Game',
		description:
			'Stylized action RPG with waves of enemies, sword/magic combat, and in-game upgrades.',
		stack: ['Unity (URP)', 'C#'],
		link: 'https://github.com/vadimBRR/legends-of-the-blade-unity',
	},
]

export const contact_links = [
	{
		label: 'vadmabos.programming@gmail.com',
		icon: Mail,
		href: 'mailto:vadmabos.programming@gmail.com',
		color: 'text-primary',
	},

	{
		label: '@vadimBRR',
		icon: Github,
		href: 'https://github.com/vadimBRR',
		color: 'text-primary',
	},
	{
		label: 'Vadym Brovych',
		icon: Linkedin,
		href: 'https://www.linkedin.com/in/vadym-brovych-23366b321/',
		color: 'text-primary',
	},
	{
		label: '@naymmess',
		icon: Instagram,
		href: 'https://www.instagram.com/naymmess/',
		color: 'text-pink-400',
	},
	{
		label: '@naymmess',
		icon: Facebook,
		href: 'https://www.facebook.com/naymmess',
		color: 'text-blue-400',
	},
	{
		label: '@vadimbrovich_',
    icon:SiX,
		href: 'https://x.com/vadimbrovich_',
		color: 'text-white',
	},
  {
		label: '@vadimbrovich',
		icon: SiTelegram,
		href: 'https://t.me/vadimbrovich',
		color: 'text-sky-400',
	},
	{
		label: '@naymmess',
		icon: SiThreads,
		href: 'https://www.threads.net/@naymmess',
		color: 'text-white',
	},
]

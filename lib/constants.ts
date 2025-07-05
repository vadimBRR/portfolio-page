import {
	Home,
	User,
	FolderGit2,
	Mail,
	Code,
	Code2,
	Server,
	Database,
	ToolCase,
} from 'lucide-react'
import {} from 'lucide-react'

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
		items: ['Node.js', 'Express.js', 'FastAPI', 'JWT', 'REST API', "Zod", "Prisma"],
	},
	{
		title: 'Databases',
		icon: Database,
		items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase'],
	},
	{
		title: 'Other',
		icon: ToolCase,
		items: ['Python', 'Java', 'Docker', 'MQTT', 'Git', 'Vite', 'Figma', "Photoshop"],
	},
]

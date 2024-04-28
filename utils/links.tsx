import { AppWindow, AreaChart, Layers } from 'lucide-react';

type NavLink = {
	label: string;
	href: string;
	icon: React.ReactNode;
};

export const links: NavLink[] = [
	{
		label: 'add job',
		href: '/add-job',
		icon: <Layers />,
	},
	{
		label: 'jobs',
		href: '/jobs',
		icon: <AppWindow />,
	},
	{
		label: 'stats',
		href: '/stats',
		icon: <AreaChart />,
	},
];

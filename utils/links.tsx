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
		label: 'my jobs',
		href: '/jobs',
		icon: <AppWindow />,
	},
	{
		label: 'my stats',
		href: '/stats',
		icon: <AreaChart />,
	},
];

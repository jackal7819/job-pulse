'use client';

import Link from 'next/link';
import { links } from '@/utils/links';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import { Button } from './ui/button';

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className='h-full px-8 py-4 bg-muted'>
			<div className='flex justify-center'><Logo /></div>
			<div className='flex flex-col mt-20 gap-y-4'>
				{links.map((link) => (
					<Button
						asChild
						key={link.label}
						variant={pathname === link.href ? 'default' : 'link'}
					>
						<Link
							href={link.href}
							className='flex items-center text-lg gap-x-2'
						>
							{link.icon}{' '}
							<span className='capitalize'>{link.label}</span>
						</Link>
					</Button>
				))}
			</div>
		</aside>
	);
}

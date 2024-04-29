import Link from 'next/link';
import { AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { links } from '@/utils/links';

export default function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='lg:hidden'>
				<Button variant='outline' size='icon'>
					<AlignLeft />
					<span className='sr-only'>Toggle Links</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-40 p-2 lg:hidden'
				align='start'
				sideOffset={25}
			>
				<DropdownMenuLabel className='text-base font-normal'>
					Dashboard
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{links.map((link) => (
					<DropdownMenuItem key={link.label}>
						<Link
							href={link.href}
							className='flex items-center gap-x-2'
						>
							{link.icon}{' '}
							<span className='capitalize'>{link.label}</span>
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

import { UserButton } from '@clerk/nextjs';

import LinksDropdown from './LinksDropdown';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
	return (
		<nav className='flex items-center justify-between px-4 py-4 bg-muted sm:px-16 lg:px-24'>
			<LinksDropdown />
			<div className='flex items-center gap-x-4'>
				<ThemeToggle />
				<UserButton afterSignOutUrl='/' />
			</div>
		</nav>
	);
}

import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import Providers from './providers';

export const metadata: Metadata = {
	title: 'JobPulse',
	description: 'Job application tracking system for job hunters',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body>
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}

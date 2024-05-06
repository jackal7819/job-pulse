'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from './ui/button';

type ButtonContainerProps = {
	currentPage: number;
	totalPages: number;
};

export default function ButtonContainer({
	currentPage,
	totalPages,
}: ButtonContainerProps) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathName = usePathname();

	const pageButtons = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	const handlePageChange = (page: number) => {
		const defaultParams = {
			search: searchParams.get('search') || '',
			jobStatus: searchParams.get('jobStatus') || '',
			page: String(page),
		};

		let params = new URLSearchParams(defaultParams);

		router.push(`${pathName}?${String(params)}`);
	};

	return (
		<div className='flex gap-x-2'>
			{pageButtons.map((page) => (
				<Button
					key={page}
					size='icon'
					variant={page === currentPage ? 'default' : 'outline'}
					onClick={() => handlePageChange(page)}
				>
					{page}
				</Button>
			))}
		</div>
	);
}

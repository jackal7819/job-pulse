'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from './ui/button';

type ComplexButtonContainerProps = {
	currentPage: number;
	totalPages: number;
};

type ButtonProps = {
	page: number;
	activeClass: boolean;
};

export default function ComplexButtonContainer({
	currentPage,
	totalPages,
}: ComplexButtonContainerProps) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathName = usePathname();

	const handlePageChange = (page: number) => {
		const defaultParams = {
			search: searchParams.get('search') || '',
			jobStatus: searchParams.get('jobStatus') || '',
			page: String(page),
		};

		let params = new URLSearchParams(defaultParams);

		router.push(`${pathName}?${String(params)}`);
	};

	const addPageButton = ({ page, activeClass }: ButtonProps) => {
		return (
			<Button
				key={page}
				size='icon'
				variant={activeClass ? 'default' : 'outline'}
				onClick={() => handlePageChange(page)}
				className={activeClass ? '' : 'hidden md:flex'}
			>
				{page}
			</Button>
		);
	};

	const renderPageButtons = () => {
		const pageButtons = [];
		// FIRST PAGE
		pageButtons.push(
			addPageButton({ page: 1, activeClass: currentPage === 1 })
		);
		// DOTS
		if (currentPage > 3) {
			pageButtons.push(
				<Button
					className='items-center hidden md:flex gap-x-2'
					variant='outline'
					key='dots-1'
				>
					...
				</Button>
			);
		}
		// ONE PAGE BEFORE CURRENT PAGE
		if (currentPage !== 1 && currentPage !== 2) {
			pageButtons.push(
				addPageButton({ page: currentPage - 1, activeClass: false })
			);
		}
		// CURRENT PAGE
		if (currentPage !== 1 && currentPage !== totalPages) {
			pageButtons.push(
				addPageButton({ page: currentPage, activeClass: true })
			);
		}
		// ONE PAGE AFTER CURRENT PAGE
		if (currentPage !== totalPages && currentPage !== totalPages - 1) {
			pageButtons.push(
				addPageButton({ page: currentPage + 1, activeClass: false })
			);
		}
		// DOTS
		if (currentPage < totalPages - 2) {
			pageButtons.push(
				<Button
					className='items-center hidden md:flex gap-x-2'
					variant='outline'
					key='dots-2'
				>
					...
				</Button>
			);
		}
		// LAST PAGE
		pageButtons.push(
			addPageButton({
				page: totalPages,
				activeClass: currentPage === totalPages,
			})
		);
		return pageButtons;
	};

	return (
		<div className='flex gap-x-2'>
			<Button
				className='flex items-center gap-x-2'
				variant='outline'
				disabled={currentPage === 1}
				onClick={() => {
					let prevPage = currentPage - 1;
					if (prevPage < 1) prevPage = totalPages;
					handlePageChange(prevPage);
				}}
			>
				<ChevronLeft /> prev
			</Button>
			{renderPageButtons()}
			<Button
				className='flex items-center gap-x-2'
				variant='outline'
				disabled={currentPage === totalPages}
				onClick={() => {
					let nextPage = currentPage + 1;
					if (nextPage > totalPages) nextPage = 1;
					handlePageChange(nextPage);
				}}
			>
				next <ChevronRight />
			</Button>
		</div>
	);
}

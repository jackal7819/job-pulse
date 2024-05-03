'use client';

import { JobStatus } from '@/utils/types';
import { Input } from './ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchForm() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const search = searchParams.get('search') || '';
	const jobStatus = searchParams.get('jobStatus') || 'all';

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const search = formData.get('search') as string;
		const jobStatus = formData.get('jobStatus') as string;
		let params = new URLSearchParams();
		params.set('search', search);
		params.set('jobStatus', jobStatus);

		router.push(`${pathname}?${params.toString()}`);
	}
	return (
		<form
			className='grid gap-4 p-8 mb-16 rounded-lg bg-muted sm:grid-cols-2 md:grid-cols-3'
			onSubmit={handleSubmit}
		>
			<Input
				name='search'
				type='text'
				placeholder='Search Jobs'
				defaultValue={search}
			/>
			<Select name='jobStatus' defaultValue={jobStatus}>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{['all', ...Object.values(JobStatus)].map((status) => (
						<SelectItem key={status} value={status}>
							{status}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Button type='submit'>Search</Button>
		</form>
	);
}

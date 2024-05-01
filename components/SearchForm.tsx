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

export default function SearchForm() {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const search = formData.get('search') as string;
		const jobStatus = formData.get('jobStatus') as string;
		console.log(search, jobStatus);
	}
	return (
		<form
			className='grid gap-4 p-8 mb-16 rounded-lg bg-muted sm:grid-cols-2 md:grid-cols-3'
			onSubmit={handleSubmit}
		>
			<Input name='search' type='text' placeholder='Search Jobs' />
			<Select name='jobStatus'>
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

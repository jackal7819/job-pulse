'use client';

import { getAllJobsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import ComplexButtonContainer from './ComplexButtonContainer';
import JobCard from './JobCard';

export default function JobList() {
	const searchParams = useSearchParams();

	const search = searchParams.get('search') || '';
	const jobStatus = searchParams.get('jobStatus') || 'all';
	const pageNumber = Number(searchParams.get('page')) || 1;

	const { data, isPending } = useQuery({
		queryKey: ['jobs', search, jobStatus, pageNumber],
		queryFn: () =>
			getAllJobsAction({ search, jobStatus, page: pageNumber }),
	});

	const jobs = data?.jobs || [];
	const count = data?.count || 0;
	const page = data?.page || 1;
	const totalPages = data?.totalPages || 0;

	if (isPending) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (jobs.length < 1) {
		return (
			<div>
				<h1>No Jobs Found...</h1>
			</div>
		);
	}

	return (
		<>
			<div className='flex flex-col items-center justify-between gap-8 mb-8 md:flex-row'>
				<h2 className='text-xl font-semibold capitalize'>
					{count} jobs found
				</h2>
				{totalPages > 1 && (
					<ComplexButtonContainer
						currentPage={page}
						totalPages={totalPages}
					/>
				)}
			</div>
			<div className='grid gap-8 md:grid-cols-2'>
				{jobs.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</div>
		</>
	);
}

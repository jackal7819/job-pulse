'use client';

import { getAllJobsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
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
			<div className='grid gap-8 md:grid-cols-2'>
				{jobs.map((job) => <JobCard key={job.id} job={job} />)}
			</div>
		</>
	);
}

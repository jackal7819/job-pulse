'use client';

import { getStatsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';

import StatsCard from './StatsCard';

export default function StatsContainer() {
	const { data } = useQuery({
		queryKey: ['stats'],
		queryFn: () => getStatsAction(),
	});

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<StatsCard title='pending jobs' value={data?.pending || 0} />
			<StatsCard title='interview jobs' value={data?.interview || 0} />
			<StatsCard title='declined jobs' value={data?.declined || 0} />
		</div>
	);
}

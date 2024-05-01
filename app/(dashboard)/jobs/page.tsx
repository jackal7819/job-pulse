import JobsList from '@/components/JobsList';
import SearchForm from '@/components/SearchForm';
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';
import { getAllJobsAction } from '@/utils/actions';

export default async function JobsPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['jobs', '', 'all', 1],
		queryFn: () => getAllJobsAction({}),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SearchForm />
			<JobsList />
		</HydrationBoundary>
	);
}

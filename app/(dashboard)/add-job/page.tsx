import CreateJobForm from '@/components/CreateJobForm';
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';

export default function AddJobsPage() {
	const queryClient = new QueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CreateJobForm />
		</HydrationBoundary>
	);
}

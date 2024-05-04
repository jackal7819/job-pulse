import EditJobForm from '@/components/EditJobForm';
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from '@tanstack/react-query';
import { getSingleJobAction } from '@/utils/actions';

type JobDetailProps = {
	id: string;
};

export default async function JobDetailPage({
	params,
}: {
	params: JobDetailProps;
}) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['jobs', params.id],
		queryFn: () => getSingleJobAction(params.id),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<EditJobForm jobId={params.id} />
		</HydrationBoundary>
	);
}

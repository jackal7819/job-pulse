import { Skeleton } from '@/components/ui/skeleton';

export default function JobsLoadingPage() {
	return (
		<div className='grid gap-4 p-8 border rounded-lg md:grid-cols-2 lg:grid-cols-3'>
			<Skeleton className='h-10' />
			<Skeleton className='h-10' />
			<Skeleton className='h-10' />
		</div>
	);
}

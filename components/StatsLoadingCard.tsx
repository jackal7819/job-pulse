import { Card, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export default function StatsLoadingCard() {
	return (
		<Card className='w-full h-[88px] flex items-center'>
			<CardHeader className='flex flex-row items-center justify-between w-full'>
				<Skeleton className='h-6 w-44' />
				<Skeleton className='rounded-full size-10' />
			</CardHeader>
		</Card>
	);
}

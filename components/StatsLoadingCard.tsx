import { Card, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export default function StatsLoadingCard() {
	return (
		<Card className='w-[330px] h-[88px]'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<div className='flex items-center space-x-4'>
					<Skeleton className='w-12 h-12 rounded-full' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[150px]' />
						<Skeleton className='h-4 w-[100px]' />
					</div>
				</div>
			</CardHeader>
		</Card>
	);
}

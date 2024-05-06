import StatsLoadingCard from '@/components/StatsLoadingCard';

export default function StatsLoadingPage() {
	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<StatsLoadingCard />
			<StatsLoadingCard />
			<StatsLoadingCard />
		</div>
	);
}

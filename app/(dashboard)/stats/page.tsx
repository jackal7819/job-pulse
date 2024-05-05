import { getStatsAction } from '@/utils/actions';

export default async function StatsPage() {
	const stats = await getStatsAction();
	return (
		<div>
			<h1>Stats</h1>
		</div>
	);
}

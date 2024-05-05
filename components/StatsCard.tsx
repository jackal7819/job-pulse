import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

type StatsCardProps = {
	title: string;
	value: number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
	return (
		<Card className='bg-muted'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle className='capitalize'>{title}</CardTitle>
				<CardDescription className='!mt-0 text-4xl font-extrabold text-primary'>
					{value}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}

import { JobType } from '@/utils/types';

interface JobCardProps {
	job: JobType;
}

export default function JobCard({ job }: JobCardProps) {
	return (
		<div>
			<h1>JobCard</h1>
		</div>
	);
}

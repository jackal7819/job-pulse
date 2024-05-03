import { JobType } from '@/utils/types';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import Link from 'next/link';
import DeleteJobBtn from './DeleteJobBtn';

interface JobCardProps {
	job: JobType;
}

export default function JobCard({ job }: JobCardProps) {
	return (
		<Card className='bg-muted'>
			<CardHeader>
				<CardTitle>{job.position}</CardTitle>
				<CardDescription>{job.company}</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent></CardContent>
			<CardFooter className='flex gap-4'>
				<Button asChild size='sm'>
					<Link href={`/jobs/${job.id}`}>Edit</Link>
				</Button>
				<DeleteJobBtn />
			</CardFooter>
		</Card>
	);
}

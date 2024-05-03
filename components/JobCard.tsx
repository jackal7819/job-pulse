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
import JobInfo from './JobInfo';
import { Briefcase, CalendarDays, MapPin, RadioTower } from 'lucide-react';
import { Badge } from './ui/badge';

interface JobCardProps {
	job: JobType;
}

export default function JobCard({ job }: JobCardProps) {
	const date = new Date(job.updatedAt).toLocaleString('en-US', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	});

	return (
		<Card className='bg-muted'>
			<CardHeader>
				<CardTitle>{job.position}</CardTitle>
				<CardDescription>{job.company}</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent className='grid grid-cols-2 gap-4 mt-4 capitalize'>
				<JobInfo icon={<Briefcase />} text={job.mode} />
				<JobInfo icon={<MapPin />} text={job.location} />
				<JobInfo icon={<CalendarDays />} text={date} />
				<Badge className='justify-center w-32'>
					<JobInfo
						icon={<RadioTower className='w-4 h-4' />}
						text={job.status}
					/>
				</Badge>
			</CardContent>
			<CardFooter className='flex gap-4'>
				<Button asChild size='sm'>
					<Link href={`/jobs/${job.id}`}>Edit</Link>
				</Button>
				<DeleteJobBtn id={job.id} />
			</CardFooter>
		</Card>
	);
}

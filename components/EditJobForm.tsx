'use client';

import {
	CreateAndEditJobType,
	JobMode,
	JobStatus,
	createAndEditJobSchema,
} from '@/utils/types';
import { getSingleJobAction, updateJobAction } from '@/utils/actions';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from './ui/button';
import { CustomFormField, CustomFormSelect } from './FormComponents';
import { Form } from './ui/form';
import { useToast } from './ui/use-toast';

export default function EditJobForm({ jobId }: { jobId: string }) {
	const queryClient = useQueryClient();
	const { toast } = useToast();
	const router = useRouter();

	const { data } = useQuery({
		queryKey: ['job', jobId],
		queryFn: () => getSingleJobAction(jobId),
	});

	const { mutate, isPending } = useMutation({
		mutationFn: (values: CreateAndEditJobType) =>
			updateJobAction(jobId, values),
		onSuccess: (data) => {
			if (!data) {
				toast({ description: 'Something went wrong' });
				return;
			}
			toast({
				description: 'Job updated',
			});
			queryClient.invalidateQueries({ queryKey: ['jobs'] });
			queryClient.invalidateQueries({ queryKey: ['job', jobId] });
			queryClient.invalidateQueries({ queryKey: ['stats'] });
			router.push('/jobs');
		},
	});

	const form = useForm<CreateAndEditJobType>({
		resolver: zodResolver(createAndEditJobSchema),
		defaultValues: {
			position: data?.position || '',
			company: data?.company || '',
			location: data?.location || '',
			status: (data?.status as JobStatus) || JobStatus.Pending,
			mode: (data?.mode as JobMode) || JobMode.FullTime,
		},
	});

	function onSubmit(values: CreateAndEditJobType) {
		mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='p-8 rounded bg-muted'
			>
				<h2 className='mb-6 text-4xl font-semibold capitalize'>
					edit job
				</h2>
				<div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<CustomFormField name='position' control={form.control} />
					<CustomFormField name='company' control={form.control} />
					<CustomFormField name='location' control={form.control} />
					<CustomFormSelect
						name='status'
						control={form.control}
						labelText='Job Status'
						items={Object.values(JobStatus)}
					/>
					<CustomFormSelect
						name='mode'
						control={form.control}
						labelText='Job Mode'
						items={Object.values(JobMode)}
					/>
					<Button
						type='submit'
						className='self-end capitalize'
						disabled={isPending}
					>
						{isPending ? 'editing...' : 'edit job'}
					</Button>
				</div>
			</form>
		</Form>
	);
}

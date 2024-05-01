'use client';

import { Button } from '@/components/ui/button';
import {
	CreateAndEditJobType,
	JobMode,
	JobStatus,
	createAndEditJobSchema,
} from '@/utils/types';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomFormField, CustomFormSelect } from './FormComponents';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { createJobAction } from '@/utils/actions';
import { useRouter } from 'next/navigation';

export default function CreateJobForm() {
	const form = useForm<CreateAndEditJobType>({
		resolver: zodResolver(createAndEditJobSchema),
		defaultValues: {
			position: '',
			company: '',
			location: '',
			status: JobStatus.Pending,
			mode: JobMode.FullTime,
		},
	});

	const queryClient = useQueryClient();
	const router = useRouter();
	const { toast } = useToast();

	const { mutate, isPending } = useMutation({
		mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
		onSuccess: (data) => {
			if (!data) {
				toast({ description: 'Something went wrong' });
				return;
			}
			toast({
				title: 'Job created',
			});
			queryClient.invalidateQueries({ queryKey: ['jobs'] });
			queryClient.invalidateQueries({ queryKey: ['stats'] });
			queryClient.invalidateQueries({ queryKey: ['charts'] });
			router.push('/jobs');
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
				<h2 className='mb-6 text-4xl font-semibold capitalize font'>
					add job
				</h2>
				<div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<CustomFormField name='position' control={form.control} />
					<CustomFormField name='company' control={form.control} />
					<CustomFormField name='location' control={form.control} />
					<CustomFormSelect
						name='status'
						control={form.control}
						labelText='job status'
						items={Object.values(JobStatus)}
					/>
					<CustomFormSelect
						name='mode'
						control={form.control}
						labelText='job mode'
						items={Object.values(JobMode)}
					/>
					<Button
						type='submit'
						className='self-end capitalize'
						disabled={isPending}
					>
						{isPending ? 'creating...' : 'create job'}
					</Button>
				</div>
			</form>
		</Form>
	);
}

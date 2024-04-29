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

	function onSubmit(values: CreateAndEditJobType) {
		console.log(values);
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
					<Button type='submit' className='self-end capitalize'>
						create job
					</Button>
				</div>
			</form>
		</Form>
	);
}

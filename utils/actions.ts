'use server';

import dayjs from 'dayjs';
import { Prisma } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import prisma from './db';
import { CreateAndEditJobType, JobType, createAndEditJobSchema } from './types';

function authenticateAndRedirect(): string {
	const { userId } = auth();
	if (!userId) {
		redirect('/');
	}
	return userId;
}

export async function createJobAction(
	values: CreateAndEditJobType
): Promise<JobType | null> {
	const userId = authenticateAndRedirect();
	try {
		await new Promise((resolve) => setTimeout(resolve, 3000));
		createAndEditJobSchema.parse(values);
		const job: JobType = await prisma.job.create({
			data: {
				...values,
				clerkId: userId,
			},
		});
		return job;
	} catch (error) {
		console.log(error);
		return null;
	}
}

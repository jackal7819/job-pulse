import { ReactNode } from 'react';

type JobInfoProps = {
	icon: ReactNode;
	text: string;
};

export default function JobInfo({ icon, text }: JobInfoProps) {
	return (
		<div className='flex items-center gap-x-2'>
			{icon}
			{text}
		</div>
	);
}

import Link from 'next/link';

export default function Logo() {
	return (
		<div className='flex'>
			<Link
				href='/'
				className='flex items-center justify-center p-1 text-xl font-semibold duration-500 bg-black rounded-md group hover:bg-amber-500'
			>
				<span className='ml-1 mr-2 text-white duration-300 group-hover:text-white'>
					Job
				</span>
				<span className='flex items-center justify-center w-16 h-8 text-black duration-300 bg-white rounded group-hover:text-amber-500'>
					Pulse
				</span>
			</Link>
		</div>
	);
}

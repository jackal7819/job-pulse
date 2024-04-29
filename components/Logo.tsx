export default function Logo() {
	return (
		<div className='flex'>
			<div className='flex items-center justify-center p-1 text-xl font-semibold duration-500 bg-black rounded-md cursor-default group hover:bg-[#f97316]'>
				<span className='ml-1 mr-2 text-white duration-300 group-hover:text-white'>
					Job
				</span>
				<span className='flex items-center justify-center w-16 h-8 text-black duration-300 bg-white rounded group-hover:text-[#f97316]'>
					Pulse
				</span>
			</div>
		</div>
	);
}

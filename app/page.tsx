import Logo from '@/components/Logo';
import Image from 'next/image';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<header className='h-[88px] max-w-6xl px-4 py-6 mx-auto sm:px-8'>
				<Logo />
			</header>
			<section className='grid h-screen max-w-6xl px-4 py-6 mx-auto -mt-[88px] sm:px-8 lg:grid-cols-[1fr,400px] items-center'>
				<div>
					<h1 className='text-4xl font-bold capitalize md:text-7xl'>
						job <span className='text-primary'>tracking</span> app
					</h1>
					<p className='max-w-md mt-4 leading-loose'>
						Welcome to JobPulse – Your Ultimate Job Search
						Companion! Discover, apply, and manage job opportunities
						effortlessly. Elevate your career journey with
						user-friendly features and personalized insights. Get
						started today for a seamless job search experience!
					</p>
					<Button asChild className='mt-4'>
						<Link href='/add-job'>Get Started</Link>
					</Button>
				</div>
				<Image
					src={LandingImg}
					alt='landing'
					className='hidden lg:block'
				/>
			</section>
		</main>
	);
}

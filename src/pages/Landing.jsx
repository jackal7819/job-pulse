import logo from '../assets/heart.svg';
import main from '../assets/main.svg';

const Landing = () => {
	return (
		<main>
			<nav className='navbar'>
				<img src={logo} alt='jobpulse logo' className='logo' />
				<h4 className='navbar_title'>JobPulse</h4>
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Welcome to JobPulse – Your Ultimate Job Search
						Companion! Discover, apply, and manage job opportunities
						effortlessly. Elevate your career journey with
						user-friendly features and personalized insights. Get
						started today for a seamless job search experience!
					</p>
					<button className='btn-hero btn'>Login/Register</button>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</main>
	);
};

export default Landing;

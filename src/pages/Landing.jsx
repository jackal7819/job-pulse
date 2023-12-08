import logo from '../assets/heart.svg';
import main from '../assets/main.svg';
import styled from 'styled-components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='jobpulse logo' className='logo' />
				<h4>JobPulse</h4>
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
		</Wrapper>
	);
};

const Wrapper = styled.main`
	nav {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
	}
	h4 {
		margin-bottom: 0;
		font-weight: 800;
		color: var(--primary-500);
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
        margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
	}
	span {
		color: var(--primary-500);
	}
	p {
		color: var(--grey-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
`;

export default Landing;

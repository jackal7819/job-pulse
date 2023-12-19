import { Link } from 'react-router-dom';
import img from '../assets/not-found.svg';
import styled from 'styled-components';

const Error = () => {
	return (
		<Wrapper className='full-page'>
			<div>
				<img src={img} alt='not found' />
				<h3>Ohh! page not found</h3>
				<p>We can&#39;t seem to find the page you&#39;re looking for</p>
				<Link to='/'>back home</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	div {
		width: 90vw;
		text-align: center;
	}
	img {
		width: 90vw;
		max-width: 600px;
		display: block;
		margin: auto;
		margin-bottom: 2rem;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin: 0 auto;
		margin-bottom: 0.5rem;
		color: var(--grey-500);
	}
	a {
		color: var(--primary-500);
		text-decoration: underline;
		text-transform: capitalize;
	}
`;

export default Error;

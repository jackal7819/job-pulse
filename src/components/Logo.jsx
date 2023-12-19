import styled from 'styled-components';
import logo from '../assets/heart.svg';

const Logo = () => {
	return (
		<Wrapper>
			<img src={logo} alt='jobpulse logo' className='logo' />
			<h4>JobPulse</h4>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: var(--fluid-width);
	max-width: var(--max-width);
	margin: 0 auto;
	height: var(--nav-height);
`;

export default Logo;

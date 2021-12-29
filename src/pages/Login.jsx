import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/auth/LoginForm';
import loginBg from '../assets/images/login-bg.png';
const Login = () => {
	let navigate = useNavigate();
	const { auth } = useSelector((state) => state.user);

	useEffect(() => {
		if (auth) {
			navigate('/', { replace: true });
		}
	}, [auth, navigate]);
	return (
		<Container>
			<div style={{ height: '70%', width: '100%' }}>
				<Wrap>
					<FormWrap>
						<LoginForm />
					</FormWrap>

					<ImageWrap>
						<Img src={loginBg} />
					</ImageWrap>
				</Wrap>
			</div>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
	background-color: #e5e5e5;
`;
const Wrap = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	margin: auto;
`;

const ImageWrap = styled.div`
	flex: 1;
	height: 100%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;
const FormWrap = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

export default Login;

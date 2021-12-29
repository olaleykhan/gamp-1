import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/gamp-logo.svg';
import { loginAction } from '../../store/actions';

const LoginForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: 't+a291121@getgamp.com',
		password: 'abc123',
	});
	const [error, setError] = useState(<></>);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await dispatch(loginAction(formData));
		if (res && res.status === false) {
			setError(res.message);
		}
	};
	return (
		<Wrap>
			<StyledLogo />
			<Form onSubmit={handleSubmit}>
				{error.length && (
					<p style={{ color: 'red' }}>
						{error} <span onClick={() => setError(<></>)}> X</span>{' '}
					</p>
				)}
				<FormControl>
					<Input
						type='text'
						value={formData.email}
						onChange={handleChange}
						name='email'
						placeholder='Email Address or Phone Number'
					/>
				</FormControl>
				<FormControl>
					<Input type='text' value={formData.password} onChange={handleChange} name='password' placeholder='Password' />
				</FormControl>
				<Button type='submit' value='Log In' />
			</Form>

			<p style={{ textAlign: 'center' }}> forget password ?</p>

			<P> &copy; Gamp</P>
		</Wrap>
	);
};

const Wrap = styled.div`
	background-color: #fff;
	border-radius: 10px;
	height: 80%;
	width: 80%;
	margin-left: auto;
	@media only screen and (max-width: 600px) {
		margin: auto;
		height: 100%;
	}
`;

const StyledLogo = styled(Logo)`
	display: block;
	height: 90px;
	padding: 15px;
	margin: 0px auto;
`;
const Form = styled.form`
	width: 80%;
	margin: 10px auto 100px auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	 @media only screen and (max-width: 600px) {
		margin: 10px auto 20px auto;

`;
const Input = styled.input`
	border: 1px solid #858585;
	height: 40px;
	border-radius: 10px;
	outline: none;
	width: 100%;
	padding: 10px 20px;
	margin: 10px auto;
`;
const FormControl = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Button = styled.input`
	display: block;
	color: white;
	background-color: #49a05c;
	border-radius: 10px;
	width: 100%;
	height: 50px;
	border: none;
	outline: none;
	margin: 10px auto;
`;

const P = styled.p`
	color: #858585;
	text-align: center;
	font-weight: bold;
	margin-top: 20px;

	@media only screen and (min-width: 600px) {
		margin-top: 80px;
	}
`;
export default LoginForm;

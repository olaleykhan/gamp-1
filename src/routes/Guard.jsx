import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Guard = ({ children }) => {
	let navigate = useNavigate();
	const { auth } = useSelector((state) => state.user);

	useEffect(() => {
		if (!auth) {
			navigate('/login', { replace: true });
		}
	}, [auth, navigate]);
	return <>{children}</>;
};

export default Guard;

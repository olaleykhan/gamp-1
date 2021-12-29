import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
	// const navigate = useNavigate();

	// navigate('../success', { replace: true });
	return <Navigate to='/dashboard/' replace={true} />;
};

export default Home;

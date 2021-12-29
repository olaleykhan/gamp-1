import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/dashboard/Home';
import ProtectionPlans from '../pages/dashboard/ProtectionPlans';
import ToggleAside from '../components/ui/ToggleAside';

const dashboardMenuList = [
	{
		title: 'Shipments',
		url: '/dashboard/shipments',
		// icon: shipments,
	},
];

export const DashboardRoutes = () => {
	return (
		<Container>
			<ToggleAside />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/plans' element={<ProtectionPlans />} />
				<Route element={<> You are lost</>} />

				{/* <Route element={<> Page does not exist</>} /> */}
			</Routes>
		</Container>
	);
};

const Container = styled.div`
	background-color: #fff;
	height: 100%;
	border-radius: 10px;
	padding: 20px;
	position: relative;
	> div {
		min-height: 100%;
	}
`;

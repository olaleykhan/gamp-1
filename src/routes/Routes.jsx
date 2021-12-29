import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
// import { DashboardRoutes } from './DashboardRoutes';
import Dashboard from '../pages/dashboard/Index';
import Home from '../pages/Home';

const RouteWrap = (props) => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard/*' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />

				{/* <Route element={<> Page does not exist</>} /> */}
			</Routes>
		</Router>
	);
};

export default RouteWrap;

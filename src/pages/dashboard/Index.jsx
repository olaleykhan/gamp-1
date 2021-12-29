import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { DashboardRoutes } from '../../routes/DashboardRoutes';
import Navbar from '../../components/layouts/Navbar';
import SideBar from '../../components/layouts/SideBar';

import Guard from '../../routes/Guard';

const Dashboard = () => {
	const { showAside } = useSelector((state) => state.user);
	return (
		<Container>
			<Guard>
				<Navbar />
				<Wrap showAside={showAside}>
					<SideBar showAside={showAside} />
					<DashboardRoutes />
				</Wrap>
			</Guard>
		</Container>
	);
};

const Container = styled.div`
	background-color: #e2edf8;
	min-height: 100vh;

	@media only screen and (min-width: 600px) {
		height: 100vh;
	}
`;
const Protect = styled.div``;
const Wrap = styled.div`
	display: grid;
	grid-template-columns: ${(props) => (props.showAside ? '250px auto' : 'auto')};
	gap: 1.5rem;
	width: 85%;
	height: 80%;
	margin: 0 auto;
`;
export default Dashboard;

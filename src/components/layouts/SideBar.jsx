import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button, StyledAvatar } from '../ui/Shared';

import { ReactComponent as Home } from '../../assets/images/home-icon.svg';
import { ReactComponent as Plans } from '../../assets/images/protection-plan-icon.svg';
import { ReactComponent as LinkedDevices } from '../../assets/images/linked-devices-icon.svg';
import { ReactComponent as Repairs } from '../../assets/images/repairs-icon.svg';
import { ReactComponent as Claims } from '../../assets/images/claims-icon.svg';
import { logoutAction } from '../../store/actions';

const dashboardMenuList = [
	{
		title: 'Home',
		url: '/dashboard/',
		Icon: Home,
	},
	{
		title: 'Protection Plans',
		url: '/dashboard/plans',
		Icon: Plans,
	},
	{
		title: 'Linked Device',
		url: '/dashboard/devices',
		Icon: LinkedDevices,
	},
	{
		title: 'Repairs',
		url: '/dashboard/repairs',
		Icon: Repairs,
	},
	{
		title: 'Claims',
		url: '/dashboard/claims',
		Icon: Claims,
	},
];

const SideBar = ({ showAside }) => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutAction());
	};
	return (
		<Aside showAside={showAside}>
			<Profile>
				<StyledAvatar />
				<div className='details'>
					{' '}
					<p className='title'> My Profile</p> <p className='name'> Paul Omotayo</p>
				</div>
			</Profile>
			<Nav>
				<div style={{ width: '100%' }}>
					<Ul>
						{dashboardMenuList.map(({ title, url, Icon }, i) => (
							<NavItem to={url} key={title + i} activeClassName='active'>
								<Icon />
								<p> {title}</p>
							</NavItem>
						))}
					</Ul>
				</div>
			</Nav>
			<LogoutWrap>
				{' '}
				<Button onClick={handleLogout} style={{ margin: '0 auto' }}>
					{' '}
					Logout
				</Button>
			</LogoutWrap>
		</Aside>
	);
};

const Aside = styled.aside`
	background-color: #fff;
	height: 100%;
	display: ${(props) => (props.showAside === true ? 'block' : 'none')};
	/* position: fixed; */
	/* z-index: 5; */
	@media only screen and (max-width: 600px) {
		height: 100vh;
	}
`;
const Nav = styled.nav`
	display: flex;
	width: 100%;
	/* justfiy-content: space-between; */
`;
const Ul = styled.ul`
	li {
		list-style: none;
	}
`;
// const StyledAvatar = styled(Avatar)`
// 	padding: 8px;
// 	height: 36px;
// 	width: 36px;
// 	border-radius: 50%;
// 	background-color: #dcfce8;
// 	margin-right: 20px;
// `;
const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1px solid #49a05c;
	padding: 10px;

	.details {
		.title {
			color: #49a05c;
			font-size: 12px;
			font-weight: 500;
		}
		.name {
		}
	}
`;

const NavItem = styled(NavLink)`
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 15px 20px;
	width: 100%;

	p {
		color: #161c26;
		font-size: 18px;
		margin-left: 20px;
		/* font-weight: bold; */
	}

	&.active {
		background-color: #dcfce8;
	}
`;

const LogoutWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;
export default SideBar;

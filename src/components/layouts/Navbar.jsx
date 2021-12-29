import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledAvatar } from '../ui/Shared';

import { ReactComponent as DownIcon } from '../../assets/images/dropdown-icon.svg';

import { ReactComponent as Logo } from '../../assets/images/gamp-logo.svg';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Nav>
			<Logo />
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				<MenuLink href=''>Repair </MenuLink>
				<MenuLink href=''>Business</MenuLink>
				<MenuLink href='' className='special'>
					Protect Device
				</MenuLink>
				<MenuLink href='' className='avatar'>
					<StyledAvatar style={{ marginRight: 5 }} /> Hi, Omotolla <DownIcon />
				</MenuLink>
			</Menu>
		</Nav>
	);
};

const MenuLink = styled.a`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #161c26;
	transition: all 0.3s ease-in;
	font-size: 1.1rem;
	&:hover {
		color: #67bc98;
	}
	&.special {
		border: 1px solid #00b600;
		border-radius: 5px;
	}
	&.avatar {
		display: flex;
		align-items: center;
		align-content: center;
	}
`;

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 86%;
	margin: 0px auto 30px auto;
	padding: 20px;
	height: 80px;
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	@media (max-width: 600px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: max-height 0.3s ease-in;
		min-idth: 50%;
		height: 100%;
		position: absolute;
		top: 70px;
		right: 0px;
		background-color: #fff;
		z-index: 10;
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	padding: 5px;
	span {
		height: 3px;
		width: 25px;
		background: #000000;
		margin-bottom: 4px;
		border-radius: 5px;
	}
	@media (max-width: 768px) {
		display: flex;
	}
`;

export default Navbar;

import styled from 'styled-components';
import { ReactComponent as Avatar } from '../../assets/images/profile-icon.svg';

export const Button = styled.button`
	color: #ffffff;
	background-color: #49a05c;
	border-radius: 5px;
	text-transform: uppercase;
	width: 150px;
	max-height: 60px;
	padding: 15px 20px;
	border: none;
	outline: none;
	cursor: pointer;
`;

export const StyledAvatar = styled(Avatar)`
	padding: 8px;
	height: 36px;
	width: 36px;
	border-radius: 50%;
	background-color: #dcfce8;
	margin-right: 20px;
`;

export const Header = styled.div`
	padding: 5px 20px;
	color: black;
	border-bottom: 1px solid #49a05c;
	font-size: 18px;
	font-weight: 600;
	margin: auto -20px;
	padding-left: 60px;
`;

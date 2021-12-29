import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleAside } from '../../store/actions';

const ToggleAside = () => {
	const { showAside } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return <Toggle onClick={() => dispatch(toggleAside())}> {showAside ? <>&#8592;</> : <>&#8594;</>}</Toggle>;
};
const Toggle = styled.span`
	font-weight: bolder;
	font-size: 26px;
	line-height: 100%;
	margin-right: 20px;
	cursor: pointer;
	position: absolute;
`;

export default ToggleAside;

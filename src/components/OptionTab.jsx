import React from 'react';
import styled from 'styled-components';

const OptionTab = ({ data, onClick, active }) => {
	const handleSetActive = (title) => {
		onClick(title);
	};
	return (
		<Wrap>
			{data?.map(({ title, count }, i) => (
				<TabItem className={active === title ? 'active' : ''} key={i} onClick={() => handleSetActive(title)}>
					{' '}
					{title} ({count})
				</TabItem>
			))}
		</Wrap>
	);
};
const Wrap = styled.div`
	display: flex;

	border-bottom: 1px solid #858585;
`;
const TabItem = styled.div`
	color: #858585;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
	padding: 20px 0 10px 0;
	&.active {
		color: #49a05c;
		border-bottom: 2px solid #49a05c;
	}
`;

export default OptionTab;

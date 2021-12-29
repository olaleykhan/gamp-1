import React from 'react';
import styled from 'styled-components';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
	const pageNumbers = [];
	const maxPage = Math.ceil(totalItems / itemsPerPage);

	for (let i = 1; i <= maxPage; i++) {
		pageNumbers.push(i);
	}
	const handlePrev = () => {
		if (currentPage > 1) {
			paginate(currentPage - 1);
		}
	};
	const handleNext = () => {
		if (currentPage < maxPage) paginate(currentPage + 1);
	};
	return (
		<Nav>
			<ul>
				<li onClick={handlePrev}> &#65308;</li>
				{pageNumbers.map((number, i) => (
					<li onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''} key={i}>
						{number}
					</li>
				))}
				<li onClick={handleNext}> &#65310;</li>
			</ul>
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	justify-content: end;

	ul {
		display: flex;
		li {
			list-style: none;
			margin: 5px;
			padding: 2px 5px;
			cursor: pointer;
			&.active {
				background-color: #defae8;
				color: #49a05c;
				border-radius: 5px;
			}
		}
	}
`;
export default Pagination;

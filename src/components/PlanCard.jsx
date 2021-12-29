import React from 'react';
import styled from 'styled-components';

import { currencyFomatter, formatDate, splitDate } from '../utils/functions';

import { Button } from './ui/Shared';

const PlanCard = ({ data }) => {
	const { activatedLaptops, activatedPhones, createdAt, price } = data;
	return (
		<Wrap>
			<div>
				<div>
					<p>Date Purchased</p>
					<p className='green'> {splitDate(createdAt)}</p>
				</div>
				<div>
					<p>Amount Paid</p>
					<p className='green'> N {currencyFomatter(price)}</p>
				</div>
			</div>
			<div>
				<div>
					<p>Phones Covered</p>
					<p className='green'>{activatedPhones} </p>
				</div>
				<div>
					<p>Laptops Covered</p>
					<p className='green'> {activatedLaptops} </p>
				</div>
			</div>
			{/* <div> */}
			<Button> VIEW DEtails</Button>
			{/* </div> */}
		</Wrap>
	);
};

const Wrap = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	width: 100%;
	text-align: center;
	border: 1px solid #49a05c;
	border-radius: 5px;
	padding: 20px;
	margin: 20px 0;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		padding: 10px;
		margin: 10px 0;
	}

	> div {
		display: flex;
		justify-content: space-between;
		width: 35%;
		/* margin: 0 10%; */
		@media only screen and (max-width: 600px) {
			margin: 0px auto 10px auto;
			width: 90%;
		}
		> div {
			> p {
				font-weight: 400;
				font-size: 18px;
				@media only screen and (max-width: 600px) {
					font-size: 14px;
				}
			}
		}
	}
	> button {
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.green {
		color: #0d7010;
		margin-top: 10px;
		font-weight: 500;
		@media only screen and (max-width: 600px) {
			margin-top: 5px;
		}
	}
`;

export default PlanCard;

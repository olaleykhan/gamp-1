import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getPlans } from '../../api';
import { loginAction, logoutAction } from '../../store/actions';

import PlanCard from '../../components/PlanCard';
import OptionTab from '../../components/OptionTab';
import { Header, Button, StyledAvatar } from '../../components/ui/Shared';
import Pagination from '../../components/Pagination';
const tabData = [
	{ title: 'SCREEN PROTECTION ', count: 3 },
	{ title: 'SERVICE CONTRACT ', count: 0 },
];

const ProtectionPlans = () => {
	const dispatch = useDispatch();
	const [activeTab, setActiveTab] = useState(tabData[0].title);
	const [planData, setPlanData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(3);
	useEffect(() => {
		(async () => {
			setLoading(true);
			const res = await getPlans();
			if (!res) {
				dispatch(loginAction());
			} else if (res && res.status === false) {
				alert(res.message);
				dispatch(logoutAction());
			} else {
				setPlanData(res);
				setLoading(false);
			}
		})();
	}, []);

	// get current Posta

	const indexOfLastItem = currentPage * perPage;
	const indexOfFirstItem = indexOfLastItem - perPage;
	const currentItems = planData.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (number) => {
		setCurrentPage(number);
	};
	return (
		<div>
			<Header>Protection plans</Header>
			<OptionTab data={tabData} active={activeTab} onClick={setActiveTab} />

			<CardsWrap>
				{!loading ? currentItems.map((item) => <PlanCard data={item} key={item._id} />) : 'loading...'}
			</CardsWrap>
			{!loading && planData.length > 1 && (
				<Pagination itemsPerPage={perPage} totalItems={planData.length} paginate={paginate} currentPage={currentPage} />
			)}
		</div>
	);
};

const CardsWrap = styled.div`
	/* margin: 10px; */
`;

export default ProtectionPlans;

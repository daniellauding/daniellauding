import React from 'react';
import Client from '../components/client';
import { useNavigate } from 'react-router-dom';
import { work } from '../constant';

const ClientPage = ({ item }) => {
	const navigate = useNavigate();

	return (
		<Client
			item={item}
			selectedChanged={(clientId) => {
				const selectedClient = work.find(
					(client) => client.id === clientId
				);
				if (selectedClient?.slug) {
					console.log('Navigating to client:', selectedClient.slug);
					navigate(`/${selectedClient.slug}`);
				}
			}}
			selectedCaseChanged={(caseId) => {
				const selectedCase = item?.cases?.find((c) => c.id === caseId);
				if (selectedCase?.case) {
					console.log('Navigating to case:', selectedCase.case);
					navigate(`/${item.slug}/${selectedCase.case}`);
				}
			}}
			clearActive={() => navigate('/')}
		/>
	);
};

export default ClientPage;

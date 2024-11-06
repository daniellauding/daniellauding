import React from 'react';
import { Case } from '../components/case';
import { useNavigate } from 'react-router-dom';
import { work } from '../constant';

const CasePage = ({ client, clientCase }) => {
	const navigate = useNavigate();

	return (
		<Case
			item={clientCase}
			work={client}
			selectedChanged={(clientId) => {
				const selectedClient = work.find(
					(client) => client.id === clientId
				);
				if (selectedClient?.slug) {
					console.log(
						'Navigating to client from case:',
						selectedClient.slug
					);
					navigate(`/${selectedClient.slug}`);
				}
			}}
			selectedCaseChanged={(caseId) => {
				const selectedCase = client?.cases?.find(
					(c) => c.id === caseId
				);
				if (selectedCase?.case) {
					console.log(
						'Navigating to case from case:',
						selectedCase.case
					);
					navigate(`/${client.slug}/${selectedCase.case}`);
				}
			}}
			clearActive={() => navigate('/')}
		/>
	);
};

export default CasePage;

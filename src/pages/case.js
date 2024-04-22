import React from 'react';
import { Case } from '../components/case';

const CasePage = ({ clientCase, client }) => {
	return <Case item={clientCase} work={client} />;
};

export default CasePage;

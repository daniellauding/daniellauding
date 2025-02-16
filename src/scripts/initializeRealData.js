import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const clientsData = [
	{
		id: '1',
		name: 'Asteria',
		role: 'Co-Founder & Lead Product Design',
		location: 'Remote / Sweden',
		featured: true,
	},
	{
		id: '5',
		name: 'Länsförsäkringar',
		role: 'Lead Product Design',
		location: 'Stockholm',
		featured: true,
	},
	{
		id: '6',
		name: 'KLM',
		role: 'Product Design',
		location: 'Amsterdam',
		featured: false,
	},
	{
		id: '7',
		name: 'Instinctly',
		role: 'Lead Product Design',
		location: 'Stockholm',
		featured: true,
	},
];

const initializeRealData = async () => {
	try {
		console.log('Initializing real client data...');

		// Add all clients
		for (const client of clientsData) {
			const clientRef = doc(db, 'clients', client.id);
			await setDoc(clientRef, {
				name: client.name,
				role: client.role,
				location: client.location,
				featured: client.featured,
			});
			console.log(`Added client: ${client.name}`);
		}

		console.log('Real client data initialized successfully');
	} catch (error) {
		console.error('Error initializing real data:', error);
	}
};

export { initializeRealData };

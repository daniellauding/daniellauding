import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const initializeTestData = async () => {
	try {
		// Add a test client
		const clientId = '6kJU09qFsonOvG5ZWcIQ';
		const clientRef = doc(db, 'clients', clientId);
		await setDoc(clientRef, {
			name: 'Test Client',
			role: 'Test Role',
			location: 'Test Location',
			featured: true,
		});

		// Add a test project for this client
		const projectRef = doc(collection(db, 'projects'));
		await setDoc(projectRef, {
			clientId: clientId,
			title: 'Test Project',
			description: 'This is a test project',
			createdAt: new Date(),
			status: 'active',
		});

		console.log('Test data initialized successfully');
	} catch (error) {
		console.error('Error initializing test data:', error);
	}
};

export { initializeTestData };

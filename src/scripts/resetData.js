import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export const resetData = async () => {
	if (
		!window.confirm(
			'Are you sure you want to delete all clients and projects? This cannot be undone.'
		)
	) {
		return;
	}

	try {
		console.log('Starting data reset...');

		// Delete all clients
		const clientsSnapshot = await getDocs(collection(db, 'clients'));
		console.log(`Found ${clientsSnapshot.size} clients to delete`);

		for (const document of clientsSnapshot.docs) {
			await deleteDoc(doc(db, 'clients', document.id));
			console.log(`Deleted client: ${document.id}`);
		}

		// Delete all projects
		const projectsSnapshot = await getDocs(collection(db, 'projects'));
		console.log(`Found ${projectsSnapshot.size} projects to delete`);

		for (const document of projectsSnapshot.docs) {
			await deleteDoc(doc(db, 'projects', document.id));
			console.log(`Deleted project: ${document.id}`);
		}

		console.log('Data reset completed successfully');
		return true;
	} catch (error) {
		console.error('Error resetting data:', error);
		throw error;
	}
};

import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const verifyDataStructure = async () => {
	try {
		console.log('Verifying data structure...');

		// Check clients collection
		const clientsSnapshot = await getDocs(collection(db, 'clients'));
		console.log('Clients:', clientsSnapshot.size);
		clientsSnapshot.forEach((doc) => {
			console.log('Client:', {
				id: doc.id,
				data: doc.data(),
			});

			// For each client, check their projects
			const projectsQuery = query(
				collection(db, 'projects'),
				where('clientId', '==', doc.id)
			);

			getDocs(projectsQuery).then((projectsSnapshot) => {
				console.log(
					`Projects for client ${doc.id}:`,
					projectsSnapshot.size
				);
				projectsSnapshot.forEach((projectDoc) => {
					console.log('Project:', {
						id: projectDoc.id,
						data: projectDoc.data(),
					});
				});
			});
		});
	} catch (error) {
		console.error('Error verifying data:', error);
	}
};

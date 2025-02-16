import { db } from '../firebase';
import { collection } from 'firebase/firestore';

const createIndexes = async () => {
	try {
		// Get reference to the projects collection
		const projectsRef = collection(db, 'projects');

		// Log collection path to verify
		console.log('Creating index for collection:', projectsRef.path);

		// The actual index creation happens in the Firebase Console
		// This is just to verify the collection exists
		console.log('Please create the following index in Firebase Console:');
		console.log(`
    Collection: projects
    Fields to index:
    1. clientId (Ascending)
    2. createdAt (Descending)
    `);
	} catch (error) {
		console.error('Error checking collection:', error);
	}
};

export { createIndexes };

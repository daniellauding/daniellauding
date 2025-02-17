import { db } from '../firebase';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { work } from '../constant';

export const initializeRealData = async () => {
	try {
		console.log('Starting real data initialization...');

		// First create all clients
		for (const client of work) {
			const clientDocRef = doc(collection(db, 'clients'));

			// Prepare client data - include ALL fields from constant.js
			const clientData = {
				// Basic info
				name: client.client,
				id: client.id, // Keep original numeric ID
				slug: client.slug || '',
				role: client.role || '',
				date: client.date || '', // Keep as string for clients
				location: client.location || '',
				url: client.url || '',

				// Flags and status
				featured: client.featured || false,
				protected: client.protected || false,
				index: client.index || false,
				isExternal: client.isExternal || false,
				soon: client.soon || false,

				// Media and visuals
				background: client.background || {},
				thumbnail: client.thumbnail || [],

				// Preserve any additional fields
				...client, // This ensures we don't miss any fields
			};

			// Remove cases array from client (will be separate documents)
			delete clientData.cases;

			await setDoc(clientDocRef, clientData);
			console.log(
				`Created client: ${client.client} with ID: ${clientDocRef.id}`
			);

			// Create projects for this client if they exist
			if (client.cases && client.cases.length > 0) {
				for (const project of client.cases) {
					const projectDocRef = doc(collection(db, 'projects'));

					// Convert date string to Timestamp for projects
					const projectDate = new Date();

					// Process content sections to handle image loops
					const processedContent =
						project.content?.map((section) => {
							// Handle image loop sections
							if (
								section.image?.folder &&
								section.image.variant === 'loop'
							) {
								// Generate image paths based on folder structure
								const imageBasePath = `/images/${section.image.folder}`;
								const imageNames = [
									'01.png',
									'02.png',
									'03.png',
									'04.png',
									'05.png',
									'06.png',
									'07.png',
									'08.png',
									'09.png',
									'10.png',
								];

								return {
									...section,
									image: {
										...section.image,
										paths: imageNames.map(
											(name) => `${imageBasePath}/${name}`
										),
										count: imageNames.length,
									},
								};
							}
							return section;
						}) || [];

					const projectData = {
						// Reference fields
						clientId: clientDocRef.id,
						clientName: client.client,
						originalClientId: client.id,

						// Basic project info
						id: project.id,
						case: project.case,
						title: project.title,
						slug: project.slug || project.case,

						// Arrays
						tags: project.tags || [],
						technologies: project.technologies || [],
						images: project.images || [],

						// Content sections with processed image loops
						content: processedContent,

						// Add proper timestamp
						date: Timestamp.fromDate(projectDate),

						// Preserve any additional fields
						...project,
					};

					await setDoc(projectDocRef, projectData);
					console.log(
						`Created project: ${project.title} for client: ${client.client}`,
						`with ${
							processedContent.filter(
								(s) => s.image?.variant === 'loop'
							).length
						} image loops`
					);
				}
			}
		}

		console.log('Real data initialization completed successfully');
		return true;
	} catch (error) {
		console.error('Error initializing real data:', error);
		throw error;
	}
};

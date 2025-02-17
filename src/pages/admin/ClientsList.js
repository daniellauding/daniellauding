import React, { useState, useEffect } from 'react';
import {
	collection,
	getDocs,
	query,
	orderBy,
	where,
	doc,
	getDoc,
} from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeTestData } from '../../scripts/initializeData';
import { createIndexes } from '../../scripts/createIndexes';
import { verifyDataStructure } from '../../scripts/verifyData';
import { initializeRealData } from '../../scripts/initializeRealData';
import { resetData } from '../../scripts/resetData';

export default function ClientsList() {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		// Monitor auth state
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log(
				'Auth state changed:',
				user ? 'logged in' : 'logged out'
			);
			if (!user) {
				navigate('/admin/login');
			}
		});

		return () => unsubscribe();
	}, [navigate]);

	useEffect(() => {
		const fetchClientsAndProjects = async () => {
			try {
				if (!auth.currentUser) {
					console.log('No authenticated user');
					return;
				}

				console.log('Current auth state:', auth.currentUser);
				console.log('Fetching clients and their projects...');
				setLoading(true);

				// Try listing all collections first
				const collections = await getDocs(collection(db, '_'));
				console.log('Available collections:', collections);

				// Test direct document access with full path logging
				const testId = '6kJU09qFsonOvG5ZWcIQ';
				console.log('Attempting to fetch document with ID:', testId);
				const testClientRef = doc(db, 'clients', testId);
				console.log('Document reference path:', testClientRef.path);

				const testDoc = await getDoc(testClientRef);
				console.log('Test document exists:', testDoc.exists());
				console.log('Test document metadata:', testDoc.metadata);

				// Try listing all documents in clients collection
				const clientsRef = collection(db, 'clients');
				console.log('Clients collection path:', clientsRef.path);

				// Try without query first
				const rawSnapshot = await getDocs(clientsRef);
				console.log(
					'Raw documents:',
					rawSnapshot.docs.map((doc) => ({
						id: doc.id,
						exists: doc.exists(),
						path: doc.ref.path,
						metadata: doc.metadata,
					}))
				);

				// Log any metadata
				console.log('Snapshot metadata:', {
					fromCache: rawSnapshot.metadata.fromCache,
					hasPendingWrites: rawSnapshot.metadata.hasPendingWrites,
				});

				console.log('Number of clients found:', rawSnapshot.size);
				console.log('Client docs:', rawSnapshot.docs);

				// Log each document
				rawSnapshot.forEach((doc) => {
					console.log('Document ID:', doc.id);
					console.log('Document data:', doc.data());
				});

				// First, let's log all projects with full details
				console.log('Fetching all projects...');
				const allProjectsSnapshot = await getDocs(
					collection(db, 'projects')
				);
				console.log('All projects:', {
					count: allProjectsSnapshot.size,
					projects: allProjectsSnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
						rawData: doc.data(), // Include raw data for inspection
					})),
				});

				// Then fetch projects for each client
				const clientsWithProjects = await Promise.all(
					rawSnapshot.docs.map(async (clientDoc) => {
						const clientData = clientDoc.data();
						console.log('\n=== Client Details ===');
						console.log('Client ID:', clientDoc.id);
						console.log('Client Data:', {
							...clientData,
							rawData: clientData, // Include raw data
						});

						try {
							// Fetch projects for this client
							const projectsQuery = query(
								collection(db, 'projects'),
								where('clientId', '==', parseInt(clientDoc.id))
							);

							let projectsSnapshot = await getDocs(projectsQuery);
							console.log(
								'\n=== Projects for',
								clientData.name,
								'==='
							);
							console.log(
								'Projects found:',
								projectsSnapshot.size
							);

							// Log each project's full details
							projectsSnapshot.docs.forEach((doc, index) => {
								console.log(`\nProject ${index + 1}:`, {
									id: doc.id,
									data: doc.data(),
									content: doc.data().content,
									images: doc.data().images,
									technologies: doc.data().technologies,
									rawData: doc.data(), // Include raw data
								});
							});

							return {
								...clientData,
								id: clientDoc.id,
								firebaseId: clientDoc.id,
								projectCount: projectsSnapshot.size,
								projects: projectsSnapshot.docs.map((doc) => ({
									id: doc.id,
									...doc.data(),
									rawData: doc.data(), // Include raw data
								})),
							};
						} catch (error) {
							console.error(
								`Error fetching projects for ${clientData.name}:`,
								error
							);
							return {
								...clientData,
								id: clientDoc.id,
								firebaseId: clientDoc.id,
								projectCount: 0,
								projects: [],
								error: error.message,
							};
						}
					})
				);

				// Log final result with full details
				console.log('\n=== Final Data Structure ===');
				clientsWithProjects.forEach((client) => {
					console.log(`\nClient: ${client.name}`);
					console.log('Client Details:', {
						...client,
						projects: client.projects.map((p) => ({
							id: p.id,
							title: p.title,
							content: p.content,
							images: p.images,
							technologies: p.technologies,
							rawData: p.rawData,
						})),
					});
				});

				setClients(clientsWithProjects);
			} catch (err) {
				console.error('Detailed error:', err);
				setError('Failed to load clients and projects');
			} finally {
				setLoading(false);
			}
		};

		fetchClientsAndProjects();
	}, []);

	const handleReset = async () => {
		try {
			const success = await resetData();
			if (success) {
				// Refresh the page to show empty state
				window.location.reload();
			}
		} catch (error) {
			console.error('Error resetting data:', error);
			setError('Failed to reset data');
		}
	};

	if (loading) {
		return (
			<div className="p-4">
				<div className="animate-pulse">
					<div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
					<div className="space-y-3">
						<div className="h-20 bg-gray-200 rounded"></div>
						<div className="h-20 bg-gray-200 rounded"></div>
						<div className="h-20 bg-gray-200 rounded"></div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="p-4">
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
					{error}
				</div>
			</div>
		);
	}

	return (
		<div className="p-4">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Clients & Projects</h1>
				<div className="space-x-4">
					<button
						onClick={initializeRealData}
						className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
					>
						Initialize Real Data
					</button>
					<button
						onClick={handleReset}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
					>
						Reset All Data
					</button>
					<Link
						to="/admin/clients/new"
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
					>
						Add New Client
					</Link>
				</div>
			</div>

			{clients.length === 0 ? (
				<div className="text-center py-8">
					<p className="text-gray-500 mb-4">No clients found</p>
					<div className="space-x-4">
						<button
							onClick={initializeRealData}
							className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
						>
							Initialize Real Data
						</button>
						<button
							onClick={createIndexes}
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
						>
							Create Indexes
						</button>
						<button
							onClick={verifyDataStructure}
							className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
						>
							Verify Data
						</button>
						<Link
							to="/admin/clients/new"
							className="text-blue-500 hover:underline"
						>
							Add your first client
						</Link>
					</div>
				</div>
			) : (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{clients.map((client) => (
						<Link
							key={client.firebaseId}
							to={`/admin/clients/${client.firebaseId}`}
							className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
						>
							<div className="flex items-start justify-between">
								<div>
									<h2 className="text-lg font-semibold text-gray-900">
										{client.name}
									</h2>
									<p className="text-sm text-gray-500">
										{client.role}
									</p>
									<p className="text-sm text-gray-500">
										{client.location}
									</p>
									<p className="text-xs text-gray-400">
										Firebase ID: {client.firebaseId}
									</p>
								</div>
								{client.featured && (
									<span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
										Featured
									</span>
								)}
							</div>

							{client.thumbnail && client.thumbnail[0] && (
								<div className="mt-4">
									<img
										src={client.thumbnail[0]}
										alt={client.name}
										className="w-full h-32 object-cover rounded"
									/>
								</div>
							)}

							<div className="mt-4 flex flex-wrap gap-2">
								{client.protected && (
									<span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
										Protected
									</span>
								)}
								{client.isExternal && (
									<span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
										External
									</span>
								)}
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

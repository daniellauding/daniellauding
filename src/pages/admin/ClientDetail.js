import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
	doc,
	getDoc,
	collection,
	query,
	where,
	getDocs,
	Timestamp,
	deleteDoc,
	writeBatch,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase';

const ClientDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [client, setClient] = useState(null);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [projectAction, setProjectAction] = useState('');
	const [targetClient, setTargetClient] = useState('');
	const [availableClients, setAvailableClients] = useState([]);
	const [deleting, setDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editedClient, setEditedClient] = useState(null);

	useEffect(() => {
		const fetchClientData = async () => {
			try {
				console.log('=== Starting client detail fetch ===');
				console.log('Requested client ID:', id);
				console.log(
					'Current auth state:',
					auth.currentUser ? 'Logged in' : 'Not logged in'
				);

				// First, list all clients to see what's available
				const allClientsSnapshot = await getDocs(
					collection(db, 'clients')
				);
				console.log(
					'Available clients:',
					allClientsSnapshot.docs.map((doc) => ({
						id: doc.id,
						name: doc.data().name,
					}))
				);

				// Fetch client
				const clientRef = doc(db, 'clients', id);
				console.log(
					'Attempting to fetch client at path:',
					clientRef.path
				);

				const clientDoc = await getDoc(clientRef);
				console.log('Client document exists:', clientDoc.exists());
				console.log('Client document metadata:', clientDoc.metadata);

				if (clientDoc.exists()) {
					const clientData = {
						id: clientDoc.id,
						...clientDoc.data(),
					};
					console.log('Found client data:', clientData);
					setClient(clientData);
					setEditedClient(clientData);

					// Fetch client's projects - try both string and number ID
					const projectsQuery = query(
						collection(db, 'projects'),
						where('clientId', 'in', [id, parseInt(id)]) // Try both string and number
					);

					console.log('Projects query:', {
						path: 'projects',
						filters: [`clientId in [${id}, ${parseInt(id)}]`],
					});

					const projectsSnapshot = await getDocs(projectsQuery);
					console.log('Projects found:', projectsSnapshot.size);

					// Log each project's details
					projectsSnapshot.docs.forEach((doc) => {
						console.log('Project details:', {
							firebaseId: doc.id,
							data: doc.data(),
							title: doc.data().title,
						});
					});

					const projectsList = projectsSnapshot.docs.map((doc) => ({
						id: doc.id,
						firebaseId: doc.id,
						...doc.data(),
					}));

					console.log('Final projects list:', {
						count: projectsList.length,
						projects: projectsList,
					});
					setProjects(projectsList);
				} else {
					console.log('=== Client not found ===');
					console.log('Requested ID:', id);
					console.log('Document path:', clientRef.path);
					console.log(
						'Available client IDs:',
						allClientsSnapshot.docs.map((doc) => doc.id).join(', ')
					);
					console.log(
						'Client names by ID:',
						Object.fromEntries(
							allClientsSnapshot.docs.map((doc) => [
								doc.id,
								doc.data().name,
							])
						)
					);
					setError(
						`Client not found. Available clients are: ${allClientsSnapshot.docs
							.map((doc) => `${doc.data().name} (${doc.id})`)
							.join(', ')}`
					);
				}
			} catch (error) {
				console.error('=== Error in client detail fetch ===');
				console.error('Error details:', {
					message: error.message,
					code: error.code,
					stack: error.stack,
				});
				console.error('Request context:', {
					clientId: id,
					path: `clients/${id}`,
					auth: !!auth.currentUser,
				});
				setError('Error loading client data: ' + error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchClientData();
	}, [id]);

	const handleDeleteClient = () => {
		// Implement the delete logic here
		console.log('Deleting client:', id);
	};

	const handleSave = () => {
		// Implement the save logic here
		console.log('Saving client:', editedClient);
	};

	if (loading) {
		return (
			<div className="text-gray-600 dark:text-gray-400">Loading...</div>
		);
	}

	if (error) {
		return (
			<div className="p-4">
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
					<strong className="font-bold">Error: </strong>
					<span className="block sm:inline">{error}</span>
					<button
						onClick={() => navigate('/admin/clients')}
						className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
					>
						Back to Clients List
					</button>
				</div>
			</div>
		);
	}

	if (!client || !editedClient) {
		return (
			<div className="text-gray-600 dark:text-gray-400">
				Client not found
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
					{client?.name}
				</h1>
				<div className="space-x-4">
					<Link
						to="/admin/clients"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
					>
						← Back to Clients
					</Link>
					<button
						onClick={() => setIsEditing(!isEditing)}
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
					>
						Edit Client
					</button>
					<button
						onClick={handleDeleteClient}
						className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
					>
						Delete Client
					</button>
				</div>
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mt-6">
				{isEditing ? (
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Name
							</label>
							<input
								type="text"
								value={editedClient?.name || ''}
								onChange={(e) =>
									setEditedClient({
										...editedClient,
										name: e.target.value,
									})
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Location
							</label>
							<input
								type="text"
								value={editedClient?.location || ''}
								onChange={(e) =>
									setEditedClient({
										...editedClient,
										location: e.target.value,
									})
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
								Website
							</label>
							<input
								type="text"
								value={editedClient?.url || ''}
								onChange={(e) =>
									setEditedClient({
										...editedClient,
										url: e.target.value,
									})
								}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
							/>
						</div>
						<div className="flex justify-end space-x-4">
							<button
								onClick={() => {
									setIsEditing(false);
									setEditedClient(client);
								}}
								className="px-4 py-2 text-gray-600 dark:text-gray-400"
							>
								Cancel
							</button>
							<button
								onClick={handleSave}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Save Changes
							</button>
						</div>
					</div>
				) : (
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Location
							</dt>
							<dd className="mt-1 text-sm text-gray-900 dark:text-white">
								{client.location}
							</dd>
						</div>
						<div>
							<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Website
							</dt>
							<dd className="mt-1 text-sm text-gray-900 dark:text-white">
								<a
									href={client.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary dark:text-primary-light hover:underline"
								>
									{client.url}
								</a>
							</dd>
						</div>
					</dl>
				)}
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
				<div className="flex justify-between items-center mb-6">
					<h3 className="text-lg font-medium text-gray-900 dark:text-white">
						Projects
					</h3>
					<button
						onClick={() =>
							navigate(`/admin/clients/${id}/projects/new`)
						}
						className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
					>
						Add Project
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<div
							key={project.firebaseId || project.id}
							className="border dark:border-gray-700 rounded-lg p-4"
						>
							<h4 className="font-medium text-gray-900 dark:text-white mb-2">
								{project.title}
							</h4>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
								{project.description}
							</p>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500 dark:text-gray-400">
									{project.date instanceof Timestamp
										? new Date(
											project.date.toDate()
										  ).toLocaleDateString()
										: project.date}
								</span>
								<button
									onClick={() => {
										const projectDocId =
											project.firebaseId || project.id;
										console.log('Navigating to project:', {
											clientId: id,
											projectId: projectDocId,
											projectData: project,
										});
										navigate(
											`/admin/clients/${id}/projects/${projectDocId}`
										);
									}}
									className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter text-sm"
								>
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ClientDetail;

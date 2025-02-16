import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	doc,
	getDoc,
	collection,
	query,
	where,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';

const ClientDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [client, setClient] = useState(null);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchClientData = async () => {
			try {
				console.log('Fetching client and projects for ID:', id);

				// Fetch client
				const clientDoc = await getDoc(doc(db, 'clients', id));
				console.log('Client doc snapshot:', clientDoc);

				if (clientDoc.exists()) {
					const clientData = {
						id: clientDoc.id,
						...clientDoc.data(),
					};
					console.log('Client data:', clientData);
					setClient(clientData);

					// Fetch client's projects - try both string and number ID
					const projectsQuery = query(
						collection(db, 'projects'),
						where('clientId', 'in', [id, parseInt(id)]) // Try both string and number
					);

					console.log('Projects query:', projectsQuery);
					const projectsSnapshot = await getDocs(projectsQuery);
					console.log('Projects snapshot:', projectsSnapshot);
					console.log('Number of projects:', projectsSnapshot.size);

					// Log each project
					projectsSnapshot.forEach((doc) => {
						console.log('Project:', {
							id: doc.id,
							data: doc.data(),
						});
					});

					const projectsList = projectsSnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));

					console.log('Final projects list:', projectsList);
					setProjects(projectsList);
				} else {
					console.log('No client found with ID:', id);
					console.log('Available client IDs are: 1, 5, 6, 7');
					setError(
						`Client not found. Available clients are: Asteria (1), Länsförsäkringar (5), KLM (6), Instinctly (7)`
					);
				}
			} catch (error) {
				console.error('Error fetching client data:', error);
				setError('Error loading client data');
			} finally {
				setLoading(false);
			}
		};

		fetchClientData();
	}, [id]);

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

	if (!client) {
		return (
			<div className="text-gray-600 dark:text-gray-400">
				Client not found
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					{client.name}
				</h2>
				<button
					onClick={() => navigate('/admin/clients')}
					className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
				>
					← Back to clients
				</button>
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
				<dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
							key={project.id}
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
									{new Date(
										project.date.toDate()
									).toLocaleDateString()}
								</span>
								<button
									onClick={() =>
										navigate(
											`/admin/clients/${id}/projects/${project.id}`
										)
									}
									className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter text-sm"
								>
									Edit
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

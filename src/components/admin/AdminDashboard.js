import React, { useState, useEffect } from 'react';
import {
	getFirestore,
	collection,
	query,
	orderBy,
	getDocs,
} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import ProjectModal from './ProjectModal';

const AdminDashboard = () => {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = async () => {
		try {
			const db = getFirestore();
			const q = query(
				collection(db, 'projectRequests'),
				orderBy('createdAt', 'desc')
			);
			const querySnapshot = await getDocs(q);
			const projectsData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
				createdAt: doc.data().createdAt?.toDate(),
			}));
			setProjects(projectsData);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching projects:', error);
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		const auth = getAuth();
		try {
			await signOut(auth);
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="flex justify-between items-center mb-6">
						<h1 className="text-2xl font-bold text-gray-900">
							Project Submissions
						</h1>
						<button
							onClick={handleLogout}
							className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
						>
							Logout
						</button>
					</div>

					{loading ? (
						<div className="text-center">Loading...</div>
					) : (
						<div className="bg-white shadow overflow-hidden sm:rounded-md">
							<ul className="divide-y divide-gray-200">
								{projects.map((project) => (
									<li key={project.id}>
										<div
											className="px-6 py-4 cursor-pointer hover:bg-gray-50"
											onClick={() =>
												setSelectedProject(project)
											}
										>
											<div className="flex items-center justify-between">
												<div className="flex-1">
													<h3 className="text-lg font-medium text-gray-900">
														{project.projectName}
													</h3>
													<p className="mt-1 text-sm text-gray-500">
														{
															project.contact
																.fullName
														}{' '}
														-{' '}
														{project.contact.email}
													</p>
												</div>
												<div className="text-sm text-gray-500">
													{project.createdAt?.toLocaleDateString()}
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</div>
	);
};

export default AdminDashboard;

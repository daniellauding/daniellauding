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
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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
						<div className="space-y-4">
							{projects.map((request) => (
								<button
									key={request.id}
									className="w-full text-left border rounded p-4 hover:bg-gray-50"
									onClick={() =>
										navigate(
											`/admin/submissions/${request.id}`
										)
									}
								>
									<h4 className="font-medium text-gray-900">
										{request.projectName}
									</h4>
									<div className="space-y-1">
										<p className="text-sm text-gray-500">
											{request.contact.fullName} -{' '}
											{request.contact.email}
										</p>
										{request.contact.company && (
											<p className="text-sm text-gray-500">
												Company:{' '}
												{request.contact.company}
											</p>
										)}
										<p className="text-xs text-gray-400">
											Budget: {request.budget.range}
											{request.budget.description &&
												` (${request.budget.description})`}
											{request.budget.exactAmount &&
												` - ${request.budget.exactAmount}`}
										</p>
										<p className="text-xs text-gray-400">
											Payment Method:{' '}
											{request.paymentMethod}
										</p>
										<p className="text-xs text-gray-400">
											Files:{' '}
											{request.fileUrls?.length || 0}
										</p>
									</div>
								</button>
							))}
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

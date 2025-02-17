import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const ProjectsList = () => {
	const navigate = useNavigate();
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const q = query(
					collection(db, 'projects'),
					orderBy('date', 'desc')
				);
				const querySnapshot = await getDocs(q);
				const projectsList = querySnapshot.docs.map((doc) => {
					const data = doc.data();
					return {
						...data,
						id: doc.id,
						firebaseId: doc.id,
						numericId: data.id,
					};
				});
				console.log('Projects list with IDs:', projectsList);
				setProjects(projectsList);
			} catch (error) {
				console.error('Error fetching projects:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) return <div>Loading projects...</div>;

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					All Projects
				</h2>
			</div>

			<div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Project
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Client
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Tags
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Date
								</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{projects.map((project) => (
								<tr
									key={project.id}
									className="hover:bg-gray-50 dark:hover:bg-gray-700"
								>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm font-medium text-gray-900 dark:text-white">
											{project.title}
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											{project.case}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{project.clientId ? (
											<div className="text-sm text-gray-900 dark:text-white">
												{project.clientName}
											</div>
										) : (
											<span className="text-sm text-gray-500 dark:text-gray-400 italic">
												No client
											</span>
										)}
									</td>
									<td className="px-6 py-4">
										<div className="flex flex-wrap gap-2">
											{project.tags?.map((tag) => (
												<span
													key={tag}
													className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
												>
													{tag}
												</span>
											))}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
										{project.date?.toDate
											? new Date(
													project.date.toDate()
											  ).toLocaleDateString()
											: 'No date'}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
										<button
											onClick={() => {
												console.log(
													'Navigating to project:',
													{
														projectId: project.id,
														clientId:
															project.clientId,
														project: project,
													}
												);
												navigate(
													project.clientId
														? `/admin/clients/${project.clientId}/projects/${project.id}`
														: `/admin/projects/${project.id}`
												);
											}}
											className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-lighter"
										>
											View Details →
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ProjectsList;

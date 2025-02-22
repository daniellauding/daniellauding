import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import {
	HomeIcon,
	BriefcaseIcon,
	InboxIcon,
	FolderIcon,
	ArrowRightOnRectangleIcon,
	Bars3Icon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [recentSubmissions, setRecentSubmissions] = useState([]);
	const [recentProjects, setRecentProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		let mounted = true;

		const fetchRecentData = async () => {
			try {
				// Fetch recent projects
				const projectsQuery = query(
					collection(db, 'projects'),
					orderBy('date', 'desc'),
					limit(5)
				);
				const projectsSnap = await getDocs(projectsQuery);
				const projects = projectsSnap.docs.map((doc) => {
					const data = doc.data();
					return {
						...data,
						id: doc.id,
						firebaseId: doc.id,
						numericId: data.id,
					};
				});

				if (mounted) {
					console.log('Recent projects with IDs:', projects);
					setRecentProjects(projects);
				}

				// Project requests
				const requestsQuery = query(
					collection(db, 'projectRequests'),
					orderBy('createdAt', 'desc'),
					limit(5)
				);
				const requestsSnap = await getDocs(requestsQuery);
				const requests = requestsSnap.docs.map((doc) => {
					const data = doc.data();
					console.log('Project request data:', {
						id: doc.id,
						data: data,
						contact: data.contact,
					});
					return {
						id: doc.id,
						...data,
					};
				});

				if (mounted) {
					console.log('Recent project requests:', requests);
					setRecentSubmissions(requests);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching recent data:', error);
				if (mounted) {
					setLoading(false);
				}
			}
		};

		fetchRecentData();

		// Cleanup function
		return () => {
			mounted = false;
		};
	}, []);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (!user) {
				navigate('/admin/login', {
					state: { from: location },
					replace: true,
				});
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [navigate, location]);

	// Disable keyboard shortcuts in admin
	useEffect(() => {
		const isAdminRoute = location.pathname.startsWith('/admin');
		if (isAdminRoute) {
			// Store original keydown handlers
			const originalKeydown = window.onkeydown;

			// Disable keydown events
			window.onkeydown = (e) => {
				// Still allow basic functionality like tab navigation
				if (e.key === 'Tab') return true;
				// Prevent other keyboard shortcuts
				if (e.key.length === 1 || e.key === 'Escape') {
					e.stopPropagation();
				}
			};

			// Cleanup
			return () => {
				window.onkeydown = originalKeydown;
			};
		}
	}, [location]);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate('/admin'); // Redirect to admin instead of login
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			{/* Top Bar */}
			<div className="bg-white dark:bg-gray-800 shadow">
				<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
						Admin Dashboard
					</h1>
					<button
						onClick={handleLogout}
						className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
					>
						<ArrowRightOnRectangleIcon className="h-5 w-5" />
						Logout
					</button>
				</div>
			</div>

			{/* Side Navigation */}
			<div className="flex">
				{/* Mobile menu button */}
				<button
					className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<Bars3Icon className="h-6 w-6" />
				</button>

				{/* Sidebar */}
				<div
					className={`
						${sidebarOpen ? 'w-64' : 'w-16'} 
						${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
						fixed md:static inset-y-0 left-0 z-10
						transition-all duration-300 ease-in-out
						bg-white dark:bg-gray-800 shadow-sm h-[calc(100vh-64px)]
					`}
				>
					{/* Toggle button */}
					<button
						className="hidden md:block absolute -right-3 top-10 bg-white dark:bg-gray-800 p-1 rounded-full shadow-md"
						onClick={() => setSidebarOpen(!sidebarOpen)}
					>
						{sidebarOpen ? (
							<ChevronLeftIcon className="h-4 w-4" />
						) : (
							<ChevronRightIcon className="h-4 w-4" />
						)}
					</button>

					<nav className="space-y-2 p-4">
						<Link
							to="/admin"
							className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${
								sidebarOpen
									? 'px-4 py-2 justify-start'
									: 'px-0 py-2 justify-center'
							}`}
						>
							<HomeIcon className="h-5 w-5" />
							{sidebarOpen && (
								<span className="ml-2">Dashboard</span>
							)}
						</Link>
						<Link
							to="/admin/clients"
							className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${
								sidebarOpen
									? 'px-4 py-2 justify-start'
									: 'px-0 py-2 justify-center'
							}`}
						>
							<BriefcaseIcon className="h-5 w-5" />
							{sidebarOpen && (
								<span className="ml-2">Clients</span>
							)}
						</Link>
						<Link
							to="/admin/projects"
							className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${
								sidebarOpen
									? 'px-4 py-2 justify-start'
									: 'px-0 py-2 justify-center'
							}`}
						>
							<FolderIcon className="h-5 w-5" />
							{sidebarOpen && (
								<span className="ml-2">Projects</span>
							)}
						</Link>
						<Link
							to="/admin/submissions"
							className={`flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${
								sidebarOpen
									? 'px-4 py-2 justify-start'
									: 'px-0 py-2 justify-center'
							}`}
						>
							<InboxIcon className="h-5 w-5" />
							{sidebarOpen && (
								<span className="ml-2">Submissions</span>
							)}
						</Link>
					</nav>
				</div>

				{/* Main Content */}
				<div className="flex-1 p-8 bg-gray-100 dark:bg-gray-900">
					{location.pathname === '/admin' ? (
						// Dashboard Home Content
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Recent Projects */}
							<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
								<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
									Recent Projects
								</h3>
								<div className="space-y-4">
									{recentProjects.map((project) => (
										<button
											key={project.id}
											className="w-full text-left border dark:border-gray-700 rounded p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
											onClick={() => {
												// Make sure we're using the Firebase document ID
												const projectDocId =
													project.firebaseId ||
													project.id;
												console.log(
													'Navigating to project:',
													{
														projectDocId,
														clientId:
															project.clientId,
														originalId:
															project.numericId,
														project: project,
													}
												);
												navigate(
													`/admin/clients/${project.clientId}/projects/${projectDocId}`
												);
											}}
										>
											<h4 className="font-medium text-gray-900 dark:text-white">
												{project.title}
											</h4>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												{project.clientName}
											</p>
											<div className="mt-2 flex gap-2">
												{project.tags?.map((tag) => (
													<span
														key={tag}
														className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
													>
														{tag}
													</span>
												))}
											</div>
										</button>
									))}
								</div>
							</div>

							{/* Recent Submissions */}
							<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
								<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
									Recent Project Requests
								</h3>
								<div className="space-y-4">
									{recentSubmissions.length > 0 ? (
										recentSubmissions.map((request) => (
											<button
												key={request.id}
												onClick={() =>
													navigate(
														`/admin/submissions/${request.id}`
													)
												}
												className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
											>
												<div className="flex justify-between items-start">
													<div>
														<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
															{
																request.projectName
															}
														</h3>
														<p className="text-sm text-gray-600 dark:text-gray-300">
															{request.fullName} (
															{request.email})
														</p>
														<div className="mt-2 space-y-1">
															<p className="text-sm text-gray-500">
																<span className="font-medium">
																	Help Types:
																</span>{' '}
																{request.helpTypes?.join(
																	', '
																)}
															</p>
															<p className="text-sm text-gray-500">
																<span className="font-medium">
																	Project
																	Type:
																</span>{' '}
																{request.projectTypes?.join(
																	', '
																)}
															</p>
														</div>
														<div className="mt-2 flex items-center gap-2">
															<span
																className={`text-xs px-2 py-1 rounded-full ${
																	request.paymentMethod ===
																	'stripe'
																		? 'bg-green-100 text-green-800'
																		: 'bg-blue-100 text-blue-800'
																}`}
															>
																{request.paymentMethod ||
																	'Invoice'}
															</span>
															<span className="text-xs text-gray-500">
																{request.createdAt
																	?.toDate()
																	.toLocaleString()}
															</span>
														</div>
													</div>
													<div className="text-right">
														<div className="text-sm font-medium text-gray-900">
															{request.budget
																?.range ||
																request.budget}
														</div>
														{request.budget
															?.description && (
															<div className="text-xs text-gray-500">
																{
																	request
																		.budget
																		.description
																}
															</div>
														)}
													</div>
												</div>
											</button>
										))
									) : (
										<p className="text-gray-500 dark:text-gray-400">
											No recent project requests
										</p>
									)}
								</div>
							</div>
						</div>
					) : (
						// Nested route content
						<div className="p-4">
							<Outlet />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import { About } from './components/about';
import WorkPage from './pages/work';
import './styles/main.scss';
import Contact, {
	Offert,
	ContactSplash,
	NewProject,
} from './components/contact';
import { work } from './constant';
import './styles/animate.min.css';
import ClientPage from './pages/client';
import CasePage from './pages/case';
// import FloatingButton from './components/FloatingButton';
import PortfolioViewer from './components/PortfolioViewer';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Dashboard from './pages/admin/Dashboard';
import ClientsList from './pages/admin/ClientsList';
import ClientDetail from './pages/admin/ClientDetail';
import SubmissionsList from './pages/admin/SubmissionsList';
import SubmissionDetail from './pages/admin/SubmissionDetail';
import Login from './pages/admin/Login';
import DataMigration from './components/admin/DataMigration';

// Create a wrapper component to handle location-based rendering
// const FloatingButtonWrapper = ({
// 	openContactModal,
// 	openOffertModal,
// 	openNewProjectModal,
// 	stopMovement,
// }) => {
// 	const location = useLocation();

// 	// Only show on home page
// 	if (location.pathname !== '/') {
// 		return null;
// 	}

// 	return (
// 		<FloatingButton
// 			openContactModal={openContactModal}
// 			openOffertModal={openOffertModal}
// 			openNewProjectModal={openNewProjectModal}
// 			stopMovement={stopMovement}
// 		/>
// 	);
// };

// Create a keyboard navigation component
const KeyboardNavigation = ({
	openContactModal,
	isContactModalOpen,
	closeContactModal,
	openNewProjectModal
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const handleKeyPress = (e) => {
			// Ignore key presses if:
			// 1. User is typing in an input or textarea
			// 2. New project modal is open (#newproject in URL)
			// 3. Any modal with class modal-newproject exists
			if (
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA' ||
				window.location.hash.includes('newproject') ||
				document.querySelector('.modal-newproject')
			) {
				return;
			}

			switch (e.key.toLowerCase()) {
				case 'h':
					// Close contact modal if open and navigate home
					if (isContactModalOpen) {
						closeContactModal();
					}
					if (location.pathname === '/') return;
					navigate('/');
					break;
				case 'w':
					// Open new project modal instead of work page
					if (isContactModalOpen) {
						closeContactModal();
					}
					openNewProjectModal();
					break;
				case 'a':
					// Close contact modal if open
					if (isContactModalOpen) {
						closeContactModal();
					}
					// If already on about page, go home
					if (location.pathname === '/about') {
						navigate('/');
					} else {
						navigate('/about');
					}
					break;
				case 'c':
					// Toggle contact modal
					if (isContactModalOpen) {
						closeContactModal();
					} else {
						openContactModal();
					}
					break;
				default:
					break;
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [
		navigate,
		openContactModal,
		closeContactModal,
		isContactModalOpen,
		location.pathname,
		openNewProjectModal
	]);

	return null;
};

const PrivateRoute = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				setIsAdmin(true);
			} else {
				setIsAdmin(false);
				navigate('/login');
			}
			setLoading(false);
		});
		return unsubscribe;
	}, [navigate]);

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-100 flex items-center justify-center">
				<div className="text-lg">Loading...</div>
			</div>
		);
	}

	return isAdmin ? children : null;
};

function App() {
	const [isPortfolioOpen, setIsPortfolioOpen] = useState(() => {
		// Initialize state based on URL hash
		return window.location.hash === '#selectedwork';
	});

	// Handle hash changes
	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash;
			console.log('Hash changed to:', hash);
			setIsPortfolioOpen(hash === '#selectedwork');
		};

		// Listen for hash changes
		window.addEventListener('hashchange', handleHash);
		return () => window.removeEventListener('hashchange', handleHash);
	}, []);

	const openPortfolio = () => {
		console.log('Opening portfolio...');
		console.log('Current hash before opening:', window.location.hash);
		setIsPortfolioOpen(true);
		window.location.replace(`${window.location.pathname}#selectedwork`);
		console.log('Hash after opening:', window.location.hash);
	};

	const closePortfolio = () => {
		console.log('Closing portfolio...');
		setIsPortfolioOpen(false);

		// Check if we have #newproject hash before closing portfolio
		const currentHash = window.location.hash;
		const hasNewProjectHash = currentHash.includes('newproject');
		console.log('Current hash:', currentHash);
		console.log('Has newproject hash:', hasNewProjectHash);

		// If we're coming from #newproject, keep it, otherwise just remove the hash
		if (hasNewProjectHash) {
			console.log('Preserving #newproject hash');
			window.location.replace(`${window.location.pathname}#newproject`);
		} else {
			console.log('Removing hash');
			window.location.replace(window.location.pathname);
		}
	};

	return (
		<Router>
			<AppContent 
				openPortfolio={openPortfolio} 
				isPortfolioOpen={isPortfolioOpen} 
				closePortfolio={closePortfolio}
			/>
			<PortfolioViewer
				isOpen={isPortfolioOpen}
				onClose={closePortfolio}
			/>
		</Router>
	);
}

// Move all the main app logic to a new component
function AppContent({ openPortfolio, isPortfolioOpen, closePortfolio }) {
	const [active, setActive] = useState(null);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isOffertModalOpen, setIsOffertModalOpen] = useState(false);
	const [isSplashModalOpen, setIsSplashModalOpen] = useState(false);
	const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
	const location = useLocation();
	const isAdminRoute = location.pathname.startsWith('/admin');

	// Handle URL hash changes
	useEffect(() => {
		const hash = location.hash.toLowerCase();
		switch (hash) {
			case '#contact':
				setIsContactModalOpen(true);
				setIsOffertModalOpen(false);
				setIsSplashModalOpen(false);
				setIsNewProjectModalOpen(false);
				break;
			case '#offer':
				setIsOffertModalOpen(true);
				setIsContactModalOpen(false);
				setIsSplashModalOpen(false);
				setIsNewProjectModalOpen(false);
				break;
			case '#splash':
				setIsSplashModalOpen(true);
				setIsContactModalOpen(false);
				setIsOffertModalOpen(false);
				setIsNewProjectModalOpen(false);
				break;
			case '#newproject':
				setIsNewProjectModalOpen(true);
				setIsContactModalOpen(false);
				setIsOffertModalOpen(false);
				setIsSplashModalOpen(false);
				break;
			case '':
				setIsContactModalOpen(false);
				setIsOffertModalOpen(false);
				setIsSplashModalOpen(false);
				setIsNewProjectModalOpen(false);
				break;
			default:
				break;
		}
	}, [location.hash]);

	// Disable keyboard navigation in admin routes
	useEffect(() => {
		if (isAdminRoute) {
			// Disable the keyboard navigation component
			return;
		}
		// Your existing keyboard navigation logic
	}, [isAdminRoute]);

	const openContactModal = () => {
		window.location.hash = 'contact';
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		if (window.location.hash === '#contact') {
			window.location.hash = '';
		}
		setIsContactModalOpen(false);
	};

	const openOffertModal = () => {
		window.location.hash = 'offer';
		setIsOffertModalOpen(true);
	};

	const closeOffertModal = () => {
		if (window.location.hash === '#offer') {
			window.location.hash = '';
		}
		setIsOffertModalOpen(false);
	};

	const openNewProjectModal = () => {
		window.location.hash = 'newproject';
		setIsNewProjectModalOpen(true);
		// Make sure other modals are closed
		setIsContactModalOpen(false);
		setIsOffertModalOpen(false);
		setIsSplashModalOpen(false);
	};

	const closeNewProjectModal = () => {
		if (window.location.hash === '#newproject') {
			window.location.hash = '';
		}
		setIsNewProjectModalOpen(false);
	};

	// Handle clicking outside modals
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (e.target.classList.contains('modal-backdrop')) {
				if (isContactModalOpen) {
					closeContactModal();
				}
				if (isOffertModalOpen) {
					closeOffertModal();
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isContactModalOpen, isOffertModalOpen]);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				if (isContactModalOpen) {
					closeContactModal();
				}
				if (isOffertModalOpen) {
					closeOffertModal();
				}
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isContactModalOpen, isOffertModalOpen]);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							setActive={setActive}
							active={active}
							setIsContactModalOpen={setIsContactModalOpen}
							setIsOffertModalOpen={setIsOffertModalOpen}
						/>
					}
				/>
				<Route
					path="/about"
					element={
						<About
							active={active}
							openContactModal={openContactModal}
							openOffertModal={openOffertModal}
						/>
					}
				/>
				<Route path="/work" element={<WorkPage />} />
				{work
					.filter(({ slug }) => slug)
					.map((client) => (
						<Route key={client.id} path={client.slug}>
							{(client?.cases ?? [])
								.filter(({ case: clientCase }) => clientCase)
								.map((clientCase) => (
									<Route
										key={clientCase.id}
										path={clientCase.case}
										element={
											<CasePage
												client={client}
												clientCase={clientCase}
											/>
										}
									/>
								))}
							<Route
								index
								element={<ClientPage item={client} />}
							/>
						</Route>
					))}
				<Route path="/login" element={<Login />} />
				<Route 
					path="/admin/*" 
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					} 
				/>
				<Route path="/admin/migrate" element={<DataMigration />} />
			</Routes>

			{!isAdminRoute && (
				<>
					<KeyboardNavigation
						openContactModal={openContactModal}
						closeContactModal={closeContactModal}
						isContactModalOpen={isContactModalOpen}
						openNewProjectModal={openNewProjectModal}
					/>
					{isContactModalOpen && (
						<Contact
							closeContactModal={closeContactModal}
							isContactModalOpen={isContactModalOpen}
						/>
					)}
					{isOffertModalOpen && (
						<Offert closeOffertModal={closeOffertModal} />
					)}
					{isSplashModalOpen && (
						<ContactSplash
							closeModal={closeContactModal}
							openContactModal={openContactModal}
							openNewProjectModal={openNewProjectModal}
						/>
					)}
					{isNewProjectModalOpen && (
						<NewProject
							closeNewProjectModal={closeNewProjectModal}
							openPortfolio={openPortfolio}
						/>
					)}
				</>
			)}
		</>
	);
}

export { AppContent };
export default App;

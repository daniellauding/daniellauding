import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import { About } from './components/about';
import WorkPage from './pages/work';
import './styles/main.scss';
import Contact, { Offert } from './components/contact';
import { work } from './constant';
import './styles/animate.min.css';
import ClientPage from './pages/client';
import CasePage from './pages/case';
import FloatingButton from './components/FloatingButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactSplash from './components/ContactSplash';

// Create a wrapper component to handle location-based rendering
const FloatingButtonWrapper = ({
	openContactModal,
	openOffertModal,
	stopMovement,
}) => {
	const location = useLocation();

	// Only show on home page
	if (location.pathname !== '/') {
		return null;
	}

	return (
		<FloatingButton
			openContactModal={openContactModal}
			openOffertModal={openOffertModal}
			stopMovement={stopMovement}
		/>
	);
};

// Create a keyboard navigation component
const KeyboardNavigation = ({
	openContactModal,
	isContactModalOpen,
	closeContactModal,
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const handleKeyPress = (e) => {
			// Ignore key presses if user is typing in an input or textarea
			if (
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA'
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
					// Close contact modal if open
					if (isContactModalOpen) {
						closeContactModal();
					}
					// If already on work page, go home
					if (location.pathname === '/work') {
						navigate('/');
					} else {
						navigate('/work');
					}
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
	]);

	return null;
};

function App() {
	const [active, setActive] = useState(null);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isOffertModalOpen, setIsOffertModalOpen] = useState(false);
	const [isSplashModalOpen, setIsSplashModalOpen] = useState(false);
	const location = useLocation();

	// Handle URL hash changes
	useEffect(() => {
		const hash = location.hash.toLowerCase();
		switch (hash) {
			case '#contact':
				setIsContactModalOpen(true);
				setIsOffertModalOpen(false);
				setIsSplashModalOpen(false);
				break;
			case '#offer':
				setIsOffertModalOpen(true);
				setIsContactModalOpen(false);
				setIsSplashModalOpen(false);
				break;
			case '#splash':
				setIsSplashModalOpen(true);
				setIsContactModalOpen(false);
				setIsOffertModalOpen(false);
				break;
			case '':
				setIsContactModalOpen(false);
				setIsOffertModalOpen(false);
				setIsSplashModalOpen(false);
				break;
			default:
				break;
		}
	}, [location.hash]);

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

	const openSplashModal = () => {
		window.location.hash = 'splash';
		setIsSplashModalOpen(true);
	};

	const closeSplashModal = () => {
		if (window.location.hash === '#splash') {
			window.location.hash = '';
		}
		setIsSplashModalOpen(false);
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
			<Router>
				<KeyboardNavigation
					openContactModal={openContactModal}
					closeContactModal={closeContactModal}
					isContactModalOpen={isContactModalOpen}
				/>
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
									.filter(
										({ case: clientCase }) => clientCase
									)
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
				</Routes>

				<FloatingButtonWrapper
					openContactModal={openContactModal}
					openOffertModal={openOffertModal}
					stopMovement={
						isContactModalOpen ||
						isOffertModalOpen ||
						isSplashModalOpen
					}
				/>
			</Router>

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
					closeModal={closeSplashModal}
					openContactModal={openContactModal}
					openOffertModal={openOffertModal}
				/>
			)}
		</>
	);
}

export default App;

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

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	const openOffertModal = () => {
		setIsOffertModalOpen(true);
	};

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
							/>
						}
					/>
					<Route
						path="/about"
						element={
							<About
								active={active}
								openContactModal={() =>
									setIsContactModalOpen(true)
								}
								openOffertModal={() =>
									setIsOffertModalOpen(true)
								}
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
					stopMovement={isContactModalOpen || isOffertModalOpen}
				/>
			</Router>

			{isContactModalOpen && (
				<Contact
					closeContactModal={closeContactModal}
					isContactModalOpen={isContactModalOpen}
				/>
			)}
			{isOffertModalOpen && (
				<Offert closeOffertModal={() => setIsOffertModalOpen(false)} />
			)}
		</>
	);
}

export default App;

import React, { useState } from 'react';
import HomePage from './pages/home';
import { About } from './components/about';
import './styles/main.scss';
import Contact, { Offert } from './components/contact';
import { work } from './constant';
import './styles/animate.min.css';
import ClientPage from './pages/client';
import CasePage from './pages/case';
import FloatingButton from './components/FloatingButton';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';

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

function App() {
	const [active, setActive] = useState(null);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isOffertModalOpen, setIsOffertModalOpen] = useState(false);

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const openOffertModal = () => {
		setIsOffertModalOpen(true);
	};

	return (
		<>
			<Router>
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
					closeContactModal={() => setIsContactModalOpen(false)}
				/>
			)}
			{isOffertModalOpen && (
				<Offert closeOffertModal={() => setIsOffertModalOpen(false)} />
			)}
		</>
	);
}

export default App;

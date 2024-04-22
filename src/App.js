import React, { useState } from 'react';
import HomePage from './pages/home';
import { About } from './components/about';
import './styles/main.scss';
import Contact, { Offert } from './components/contact';
import { work } from './constant';
import './styles/animate.min.css';
import ClientPage from './pages/client';
import CasePage from './pages/case';

// React Router DOM imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const [active, setActive] = useState(null);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isOffertModalOpen, setIsOffertModalOpen] = useState(false);

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
					></Route>
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
					></Route>
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
										></Route>
									))}
								<Route
									index
									element={<ClientPage item={client} />}
								></Route>
							</Route>
						))}
				</Routes>
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

	// return (
	// 	<Router>
	// 		<Routes>
	// 			<Route
	// 				path="/"
	// 				element={
	// 					<div className="wrapper box-border">
	// 						{active && active.client && (
	// 							<Client
	// 								item={active}
	// 								clearActive={clearActive}
	// 								selectedCase={selectedCase}
	// 								selectedChanged={selectedChanged}
	// 								selectedCaseChanged={selectedCaseChanged}
	// 							/>
	// 						)}
	// 						{active && !active.client && (
	// 							<div className="cases flex flex-col">
	// 								<Logo />
	// 								<div className="case-header flex flex-row p-6 gap-8">
	// 									<button
	// 										className="relative whitespace-nowrap pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
	// 										onClick={clearActive}
	// 									>
	// 										← Back
	// 									</button>
	// 									<div className="case-filters flex w-full items-center justify-center">
	// 										<TagsList
	// 											tags={tags}
	// 											selectedChanged={
	// 												selectedChanged
	// 											}
	// 											active={active}
	// 										/>
	// 									</div>
	// 								</div>
	// 								<div className="case-container grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
	// 									{work.map((workItem, index) => (
	// 										<div key={index}>
	// 											{workItem.protected ? (
	// 												<Protected
	// 													item={workItem}
	// 													work={workItem}
	// 												/>
	// 											) : (
	// 												<>
	// 													{cases.map(
	// 														(item, index) => (
	// 															<CaseSelector
	// 																titleClassName="mb-4 text-2xl md:text-4xl font-medium"
	// 																key={index}
	// 																item={item}
	// 																work={
	// 																	workItem
	// 																}
	// 																clearActive={
	// 																	clearActive
	// 																}
	// 																onSelect={
	// 																	selectCase
	// 																}
	// 																selectedChanged={
	// 																	selectedChanged
	// 																}
	// 															/>
	// 														)
	// 													)}
	// 												</>
	// 											)}
	// 										</div>
	// 									))}
	// 								</div>
	// 							</div>
	// 						)}
	// 						{showProfile && !active && (
	// 							<div className="profile-header">
	// 								<About
	// 									setShowProfile={setShowProfile}
	// 									active={active}
	// 									setActive={setActive}
	// 									selectedChanged={selectedChanged}
	// 									openContactModal={() =>
	// 										setIsContactModalOpen(true)
	// 									}
	// 									openOffertModal={() =>
	// 										setIsOffertModalOpen(true)
	// 									}
	// 								/>
	// 							</div>
	// 						)}
	// 						{!active && !showProfile && (
	// 							<div
	// 								className={classNames(
	// 									'grid auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr md:h-screen md:overflow-hidden'
	// 								)}
	// 							>
	// 								<AboutShort
	// 									active={active}
	// 									setActive={setActive}
	// 									previewCase={previewCase}
	// 									selectedChanged={selectedChanged}
	// 									setPreviewCase={setPreviewCase}
	// 									clearPreview={clearPreview}
	// 									clearActive={clearActive}
	// 									setShowProfile={setShowProfile}
	// 									showProfile={showProfile}
	// 									openContactModal={() =>
	// 										setIsContactModalOpen(true)
	// 									}
	// 								/>

	// 								{!showTimeline && (
	// 									<button
	// 										onClick={() =>
	// 											setShowTimeline(true)
	// 										}
	// 										className="text-white font-bold p-2 w-2 h-2 rounded-full fixed top-4 right-8 z-10 invisible"
	// 									>
	// 										<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
	// 									</button>
	// 								)}

	// 								<Timeline
	// 									showTimeline={showTimeline}
	// 									setShowTimeline={setShowTimeline}
	// 								/>
	// 								<Timeline
	// 									showTimeline={showTimeline}
	// 									setShowTimeline={setShowTimeline}
	// 									direction="vertical"
	// 								/>
	// 							</div>
	// 						)}

	// 						<Timeline
	// 							showTimeline={showTimeline}
	// 							setShowTimeline={setShowTimeline}
	// 						/>

	// 						{/* Modals */}
	// 						{isContactModalOpen && (
	// 							<Contact
	// 								closeContactModal={() =>
	// 									setIsContactModalOpen(false)
	// 								}
	// 							/>
	// 						)}
	// 						{isOffertModalOpen && (
	// 							<Offert
	// 								closeOffertModal={() =>
	// 									setIsOffertModalOpen(false)
	// 								}
	// 							/>
	// 						)}
	// 					</div>
	// 				}
	// 			/>
	// 			<Route
	// 				path="/about"
	// 				element={
	// 					<About
	// 						setShowProfile={setShowProfile}
	// 						active={active}
	// 						selectedChanged={selectedChanged}
	// 						openContactModal={() => setIsContactModalOpen(true)}
	// 						openOffertModal={() => setIsOffertModalOpen(true)}
	// 					/>
	// 				}
	// 			/>
	// 			<Route path="/case/:caseName" element={<Case />} />
	// 			<Route path="/client/:clientId" element={<Client />} />
	// 			<Route path="*" element={<Navigate to="/" replace />} />
	// 		</Routes>
	// 	</Router>
	// );
}

export default App;

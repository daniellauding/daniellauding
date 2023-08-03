import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import lodash from 'lodash';
import AboutShort, { About } from './components/about';
import { NavClient } from './components/nav';

import { work } from './constant';

import './styles/main.scss';
import CaseSelector from './components/case';
import TagsList from './components/tags';
import Logo from './components/logo';

import Timeline from './components/timeline';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

import './styles/animate.min.css';

function App() {
	const [previewCase, setPreviewCase] = useState(null);
	const [active, setActive] = useState(null);
	const [selectedCase, setCase] = useState(null);
	const clearPreview = useCallback(
		() => setPreviewCase(null),
		[setPreviewCase]
	);

	const [showTimeline, setShowTimeline] = useState(null);

	const [showProfile, setShowProfile] = useState(null);

	const clearActive = useCallback(() => {
		setActive(null);
		setPreviewCase(null);
		setCase(null);
	}, [setActive]);

	const selectedChanged = useCallback(
		(value) => {
			setActive(value || null);
			setPreviewCase(null);
		},
		[setActive]
	);

	const selectCase = useCallback((selectedCase) => {
		setCase(selectedCase);
		setActive(
			work.find((client) => {
				if (client?.cases?.includes(selectedCase)) {
					return true;
				}
				return false;
			})
		);
	}, []);

	const cases = useMemo(() => {
		return work.flatMap(({ cases = [] }) =>
			cases.filter(({ tags = [] }) => tags.includes(active))
		);
	}, [active]);

	const tags = useMemo(() => {
		return lodash.uniq(
			work.flatMap(({ cases = [] }) => {
				return cases.flatMap(({ tags = [] }) => tags);
			})
		);
	}, []);

	return (
		<div className="wrapper box-border">
			{active && active.client && (
				<NavClient
					item={active}
					clearActive={clearActive}
					selectedCase={selectedCase}
					selectedChanged={selectedChanged}
				/>
			)}
			{active && !active.client && (
				<div className="cases flex flex-col">
					<Logo />
					<div className="case-header flex flex-row p-6 gap-8">
						<button
							className="relative whitespace-nowrap pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
							onClick={clearActive}
						>
							← Back
						</button>
						<div className="case-filters flex w-full items-center justify-center">
							<TagsList
								tags={tags}
								selectedChanged={selectedChanged}
								active={active}
							/>
						</div>
					</div>
					<div className="case-container grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
						{cases.map((item, index) => (
							<CaseSelector
								titleClassName="mb-4 text-2xl md:text-4xl font-medium"
								key={index}
								item={item}
								clearActive={clearActive}
								onSelect={selectCase}
								selectedChanged={selectedChanged}
							/>
						))}
					</div>
				</div>
			)}
			{showProfile && !active && (
				<div className="profile-header flex flex-row p-6 gap-8">
					<About
						setShowProfile={setShowProfile}
						active={active}
						setActive={setActive}
						selectedChanged={selectedChanged}
					/>
				</div>
			)}
			{!active && !showProfile && (
				<div
					className={classNames(
						'grid auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr md:h-screen md:overflow-hidden'
					)}
				>
					<AboutShort
						active={active}
						setActive={setActive}
						previewCase={previewCase}
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						clearPreview={clearPreview}
						clearActive={clearActive}
						setShowProfile={setShowProfile}
						showProfile={showProfile}
					/>

					{!showTimeline && (
						<button
							onClick={() => setShowTimeline(true)}
							className="text-white font-bold p-2 w-2 h-2 rounded-full fixed top-4 right-8 z-10 invisible"
						>
							<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
						</button>
					)}

					<Timeline
						showTimeline={showTimeline}
						setShowTimeline={setShowTimeline}
					/>
					<Timeline
						showTimeline={showTimeline}
						setShowTimeline={setShowTimeline}
						direction="vertical"
					/>
				</div>
			)}

			<Timeline
				showTimeline={showTimeline}
				setShowTimeline={setShowTimeline}
			/>
		</div>
	);
}

export default App;

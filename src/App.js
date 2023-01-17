import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import lodash from 'lodash';
import About from './components/about';
import Client from './components/client';

import { work } from './constant';

import './styles/main.scss';
import CaseSelector from './components/case';
import TagsList from './components/tags';

function App() {
	const [previewCase, setPreviewCase] = useState(null);
	const [active, setActive] = useState(null);
	const [selectedCase, setCase] = useState(null);
	const clearPreview = useCallback(
		() => setPreviewCase(null),
		[setPreviewCase]
	);

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

	// Fun: Press arrow on keyboard swappes layout of avatar and image top left right bottom

	return (
		<div className="wrapper box-border">
			{active && active.client && (
				<Client
					item={active}
					clearActive={clearActive}
					selectedCase={selectedCase}
					selectedChanged={selectedChanged}
				/>
			)}
			{active && !active.client && (
				<div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden">
					<button
						className="fixed top-8 left-8 pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
						onClick={clearActive}
					>
						← Back
					</button>
					<TagsList
						tags={tags}
						selectedChanged={selectedChanged}
						active={active}
					/>
					{cases.map((item, index) => (
						<CaseSelector
							key={index}
							item={item}
							clearActive={clearActive}
							onSelect={selectCase}
							selectedChanged={selectedChanged}
						/>
					))}
				</div>
			)}
			{!active && (
				<div
					className={classNames(
						// 'flex flex-col md:flex-row justify-center md:h-screen w-screen md:fixed'
						// 'flex flex-col md:flex-row justify-center w-screen h-screen'
						'grid auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr md:h-screen md:overflow-hidden'
						// {
						//   [`client-${active?.client?.toLowerCase()} case-active md:relative justify-start h-auto`]:
						//     active,
						// }
					)}
				>
					<About
						active={active}
						setActive={setActive}
						previewCase={previewCase}
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						clearPreview={clearPreview}
						clearActive={clearActive}
					/>
				</div>
			)}

			{/* clear up this file, can we use react router ?  */}

			{/* {!active ? (

        <Avatar />

      ) : null} */}

			{/* <div className={classNames("description align-center", active ? 'justify-start' : 'md:w-1/2 flex md:flex-col justify-center')} onMouseEnter={clearPreview}>
        {!active && (
          <About />
        )}
        {active && (
          <div className="wrapper">
            <Content item={active} clearActive={clearActive} />
          </div>
        )}
      </div> */}
		</div>
	);
}

export default App;

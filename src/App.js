import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import About from './components/about';
import Client from './components/client';

import { work } from './constant';

import './styles/main.scss';
import CaseSelector from './components/case';

function App() {
	const [previewCase, setPreviewCase] = useState(null);
	const [active, setActive] = useState(null);
	const clearPreview = useCallback(
		() => setPreviewCase(null),
		[setPreviewCase]
	);

	const clearActive = useCallback(() => {
		setActive(null);
		setPreviewCase(null);
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

	console.log(active, cases, active && !active.client);

	// Fun: Press arrow on keyboard swappes layout of avatar and image top left right bottom

	return (
		<div className="wrapper box-border">
			{active && active.client && (
				<Client item={active} clearActive={clearActive} />
			)}
			{active && !active.client && (
				<div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden bg-blue-100">
					<button onClick={clearActive}>Back</button>
					{cases.map((item, index) => (
						<CaseSelector
							key={index}
							item={item}
							clearActive={clearActive}
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

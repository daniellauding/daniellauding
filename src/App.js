import React, { useState, useCallback } from 'react';

import classNames from 'classnames';

// import Content from "./components/content";
import About from './components/about';
import Case from './components/case';

// import Pages from "./components/pages";

import './App.css';

// TODO
// https://codepen.io/tutsplus/pen/oqpyBE
// 1. Hur gör jag en accordion som jag kan använda utanför arrayn? Nu gjort i content if satsen
// 2. Hur gör jag om jag vill ha ett bildspel som kan återanvändas på samma sätt

// ! REM CSS FONT SCALING
// ! MOBILE FIRST
// Om jag klickar på ett case och fyller i rätt lösenord, byta ut vänstra bilden till en hero img om det finns en (sixten ?)
// ! ADD CONTENT
// ! ??
// * SETUP ESLINT OCH PRETTIER
// ? asd
// Filter på taggarna visar de projekten ?

function App() {
	// function App({active, clearActive, clearPreview}) {
	const [previewCase, setPreviewCase] = useState(null);
	const [active, setActive] = useState(null);
	const clearPreview = useCallback(() => setPreviewCase(null), [setPreviewCase]);

	const clearActive = useCallback(() => {
		setActive(null);
		setPreviewCase(null);
	}, [setActive]);

	const selectedChanged = useCallback(
		(value) => {
			setActive(value || null);
			setPreviewCase(null);
		},
		[setActive],
	);

	// console.log(cases.map(content => content.accordion));

	// const [readMore, setReadMore] = useState(true);

	// const selectReadMore = () => {
	//   setReadMore(!readMore);
	// };

	return (
		<div className="wrapper box-border">
			<div
				className={classNames(
					'flex flex-col md:flex-row justify-center md:h-screen w-screen md:fixed',
					// {
					//   [`client-${active?.client?.toLowerCase()} case-active md:relative justify-start h-auto`]:
					//     active,
					// }
				)}>
				{active ? (
					// place case page here, maybe use react router
					<>
						{/* Swap profile to case on click */}
						{/* Loop case + deep */}
						<Case item={active} clearActive={clearActive} />
					</>
				) : (
					<>
						<About
							active={active}
							setActive={setActive}
							previewCase={previewCase}
							selectedChanged={selectedChanged}
							setPreviewCase={setPreviewCase}
							clearPreview={clearPreview}
							clearActive={clearActive}
						/>
					</>
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
		</div>
	);
}

export default App;

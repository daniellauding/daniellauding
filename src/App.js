import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import About from './components/about';
import Client from './components/client';

import './styles/main.scss';

function App() {
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
    [setActive]
  );

  return (
    <div className="wrapper box-border">
      <div>
        {active ? (
          // place case page here, maybe use react router
          <Client item={active} clearActive={clearActive} />
        ) : (
          <div
          className={classNames(
            // 'flex flex-col md:flex-row justify-center md:h-screen w-screen md:fixed'
            'flex flex-col md:flex-row justify-center w-screen h-screen '
            // {
            //   [`client-${active?.client?.toLowerCase()} case-active md:relative justify-start h-auto`]:
            //     active,
            // }
          )}>
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
    </div>
  );
}

export default App;

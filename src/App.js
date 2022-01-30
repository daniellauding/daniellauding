import React, { useCallback, useState } from 'react';
import { about, cases } from './constant';

import classNames from 'classnames';

import Case from './components/case';
import Content from './components/content';
import Social from './components/social';

import './App.css';

function App() {

  const [previewCase, setPreviewCase] = useState(null);
  const clearPreview = useCallback(() => setPreviewCase(null), [setPreviewCase]);
  
  const heroImg = about.map(intro => intro.hero);

  const [active, setActive] = useState(null);

  const selectedChanged = useCallback((value) => {
      setActive(value || null);
      setPreviewCase(null);
  }, [setActive]);

  const clearActive = useCallback(() => {
    setActive(null);
    setPreviewCase(null);
  }, [setActive]);

  const [readMore, setReadMore] = useState(true);

  const selectReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="wrapper box-border">
      <div className={classNames("flex flex-row justify-center h-screen w-screen fixed", {[`client-${active?.client?.toLowerCase()} case-active relative justify-start h-auto`]: active})}>

        <div className="cover w-1/2 bg-cover">
          <img
            src={active?.bg || previewCase?.bg || heroImg}
            className={classNames("object-cover w-full h-full", { [`client-${active?.client?.toLowerCase()}`] : active})}
            alt=""
            onClick={() => selectedChanged(previewCase || null)}
          />
        </div>

        <div className={classNames("description w-1/2 flex flex-col align-center", active ? 'justify-start' : 'justify-center')} onMouseEnter={clearPreview}>
          {!active && (
            <div className="overflow-y-scroll h-100 py-8">

              {about.map(intro => (
                <div key={intro.id} intro={intro} active={active === intro.id}>
                  <img src={intro.logo} className="logo mx-auto" alt="logo" />
                  <h1 className="pt-0 mt-8 mb-0 text-3xl text-center text-black lg:font-bold">{intro.name}</h1>
                  <p className="pt-0 mb-0 text-center text-black lg:font-light">
                    <a href={`mailto:${intro.email}`}>{intro.email}</a>
                  </p>
                  <p className="pt-0 mb-8 mx-32 mt-16 text-center text-black lg:font-light text-4xl leading-snug font-serif">{intro.description}</p>
                </div>
              ))}

              <div className="about w-2/4 m-auto flex flex-col align-center justify-center">
                <button onClick={selectReadMore}>Read more</button>

                {!readMore && (
                  <p>Spotta ut content grej som i case, dölj allt annat, gör en höger swipe / scroll story</p>
                )}
              </div>

              <ul className="flex flex-col justify-center align-center px-32 mt-16">

                {cases.map(item => (
                  <Case key={item.id} item={item} active={active === item.id} setActive={selectedChanged} onHover={setPreviewCase} />
                ))}

              </ul>

              <p className="pt-0 mb-0 mt-16 text-center text-black text-sm lg:font-light"
                ><a href="https://www.linkedin.com/in/daniellauding">Visit my LinkedIn</a>
              </p>

              <Social />
            </div>
          )}
          {active && (
            <Content item={active} clearActive={clearActive} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;

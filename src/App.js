import React, { useCallback, useState } from 'react';
import { about, cases } from './constant';

import classNames from 'classnames';

import Case from './components/case';
import Content from './components/content';
import Social from './components/social';

import Pages from "./components/pages";

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

  // console.log(cases.map(content => content.accordion));

  // const [readMore, setReadMore] = useState(true);

  // const selectReadMore = () => {
  //   setReadMore(!readMore);
  // };

  return (

    <div className="wrapper box-border">
      <Pages />
      <div className={classNames("flex flex-col md:flex-row justify-center md:h-screen w-screen md:fixed", {[`client-${active?.client?.toLowerCase()} case-active md:relative justify-start h-auto`]: active})}>

        {/* <div className={classNames("cover bg-cover", active ? 'col-span-2' : 'md:w-1/2' )}>
          <img
            src={active?.bg || previewCase?.bg || heroImg}
            className={classNames("object-cover", active ? 'w-full h-auto' : 'w-full h-full')}
            alt=""
            onClick={() => selectedChanged(previewCase || null)}
          />
        </div> */}

        {!active ? (

          <div className={classNames("cover bg-cover", active ? 'col-span-2' : 'md:w-1/2' )}>
            <img
              src={active?.bg || previewCase?.bg || heroImg}
              className={classNames("object-cover", active ? 'w-full h-auto' : 'w-full h-full')}
              alt=""
              onClick={() => selectedChanged(previewCase || null)}
            />
          </div>

        ) : null}

        <div className={classNames("description align-center", active ? 'justify-start' : 'md:w-1/2 flex md:flex-col justify-center')} onMouseEnter={clearPreview}>
          {!active && (
            <div className="md:overflow-y-scroll md:h-100 py-8">
              {about.map(intro => (
                <div key={intro.id} intro={intro} active={active === intro.id}>
                  <img src={intro.logo} className="logo mx-auto" alt="logo" />
                  <h1 className="pt-0 mt-8 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">{intro.name}</h1>
                  <p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
                    <a href={`mailto:${intro.email}`}>{intro.email}</a>
                  </p>
                  <p className="pt-0 mb-8 sm:mx-8 mx-8 md:mx-32 mt-16 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
                    {intro.text}
                  </p>
                </div>
              ))}

              {/* <div className="about w-2/4 m-auto flex flex-col align-center justify-center">
                <button onClick={selectReadMore}>Read more</button>

                {!readMore && (
                  <p>Spotta ut content grej som i case, dölj allt annat, gör en höger swipe / scroll story</p>
                )}
              </div> */}

              <ul className="flex flex-col justify-center align-center px-8 md:px-16 mt-16">

                {cases.map(item => (
                  <Case key={item.id} item={item} active={active === item.id} setActive={selectedChanged} onHover={setPreviewCase} />
                ))}

              </ul>

              <p className="pt-0 mb-0 mt-8 text-center dark:text-gray-500 text-black text-sm lg:font-light"
                ><a href="https://www.linkedin.com/in/daniellauding">Visit my LinkedIn</a>
              </p>

              <Social />
            </div>
          )}
          {active && (
            <div className="wrapper">
              {/* <div className="py-8 px-8 md:px-16"> */}
              <Content item={active} clearActive={clearActive} />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;

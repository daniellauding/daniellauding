import React from "react";
import { about, cases } from "../constant";
// import classNames from "classnames";
import Social from "./social";
import Case from "./case";

const About = (active, selectedChanged, setPreviewCase) => {
  return (
    <>
      <div className="md:overflow-y-scroll md:h-100 py-8">
        {about.map((intro) => (
          <About key={intro.id} intro={intro} active={active === intro.id}>
            <div>
              <img src={intro.logo} className="logo mx-auto" alt="logo" />
              <h1 className="pt-0 mt-8 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
                {intro.name}
              </h1>
              <p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
                <a href={`mailto:${intro.email}`}>{intro.email}</a>
              </p>
              <p className="pt-0 mb-8 sm:mx-8 mx-8 md:mx-32 mt-16 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
                {intro.text}
              </p>
            </div>
          </About>
        ))}

        {/* <div className="about w-2/4 m-auto flex flex-col align-center justify-center">
            <button onClick={selectReadMore}>Read more</button>

            {!readMore && (
              <p>Spotta ut content grej som i case, dölj allt annat, gör en höger swipe / scroll story</p>
            )}
          </div> */}

        <ul className="flex flex-col justify-center align-center px-8 md:px-16 mt-16">
          {cases.map((item) => (
            <Case
              key={item.id}
              item={item}
              active={active === item.id}
              setActive={selectedChanged}
              onHover={setPreviewCase}
            />
          ))}
        </ul>

        <p className="pt-0 mb-0 mt-8 text-center dark:text-gray-500 text-black text-sm lg:font-light">
          <a href="https://www.linkedin.com/in/daniellauding">
            Visit my LinkedIn
          </a>
        </p>

        <Social />
      </div>
    </>
  );
};

export default About;

import Markdown from 'markdown-to-jsx';
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import logo from './logo.svg';
import me from './me.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

import Case from './Case';
import Content from './Content';

// const markdown = `
// # Header

// <Text>Hello world!</Text>
// <a href="https://www.grover.com/de-en" rel="noopener noreferer" target="_blank">Grover site</a>
// `;

function App() {
  const [previewCase, setPreviewCase] = useState(null);
  // const [isShow, setIsShow] = React.useState(true);

  // const handleClick = () => {
  //   setIsShow(!isShow);
  // };

  // const file_name = 'test.md';
  // const [post, setPost] = useState('');

  // useEffect(() => {
  //   import(`./markdown/${file_name}`)
  //       .then(res => {
  //           fetch(res.default)
  //               .then(res => res.text())
  //               .then(res => setPost(res))
  //               .catch(err => console.log(err));
  //       })
  //       .catch(err => console.log(err));
  // });

  const clearPreview = useCallback(() => setPreviewCase(null), [setPreviewCase]);

  const data = {
    hero: {
      title: 'Daniel Lauding',
      // logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>',
    },
  }

  const cases = useMemo (() =>
  [
      {
        id: 0,
        client: 'Asteria',
        role: 'Lead Product Designer',
        date: '2017 – Present',
        url: 'https://www.asteria.ai',
        desc: '',
        content: [
          {
            type: 'h1',
            value: 'Jag gjorde det här åt spotify',
          },
          {
            type: 'p',
            value: 'Lorem ipsum dolor sit amet, nullam eruditi assueverit id per. Sed te hinc philosophia. Facer consulatu sea et, alii gloriatur et eum, noster aliquip viderer te eam. Primis adipisci suscipiantur sea ad.',
          },
          {
            type: 'h2',
            value: 'sub-rub',
          },
          {
            type: 'p',
            value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
          },
          {
            type: 'p',
            value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
          },
          {
            type: 'p',
            value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
          },
          {
            type: 'h3',
            value: 'Sen detta',
          },
          {
            type: 'p',
            value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
          },
          {
            type: 'img',
            value: '/bg_asteria.png',
          },
        ],
        bg: '/bg_asteria.png'
      },
      {
        id: 1,
        client: 'Spotify',
        role: 'Product Design Consultant',
        date: 'Mar 2017 – Jun 2017',
        url: 'https://www.spotify.com',
        desc: 'Lorem ipsum dolor sit amet, legendos mandamus duo ut, duo ne solum gloriatur, ea ius inani intellegebat. Vidit putant forensibus ei usu, detracto aliquando vel id. Ea putant eripuit senserit vim, ea amet euismod vocibus eam, per alia assentior ex. Ut cum errem integre oportere, diam quidam mea eu. Ceteros posidonium necessitatibus nam in, ad dolor sanctus laoreet nec. Sea eu sanctus intellegebat. Cu pri omnesque scaevola singulis, at zril doming theophrastus ius. At paulo inermis gloriatur vis, dicta nihil electram ne est. Ea fabulas scaevola invidunt nec, vis liber mundi scripserit ut. Laudem democritum mea et, ex quem debet putent pro. Malorum nostrum consetetur et qui, ad facer putent oblique est, id duo percipit pertinacia. At his nihil sensibus persecuti, idque volumus cu qui. Vix ea facilis apeirian, ne esse legimus cum. Persius prompta discere ne vim, case nonumes percipitur vim ei. Qui et assum utinam intellegat, vix ad wisi nonumy lucilius. Ea mel partem dictas, tollit decore verear sea ea. Percipit perfecto sed cu, fugit homero sea at. Consul salutandi adolescens ut sit, eius causae mediocritatem mel an, mea ut meis iudicabit. Mazim nihil blandit at sit, invenire consequuntur an quo. Eam an meis tation dicant, nostrum quaestio contentiones eu mel, an mucius cetero consulatu cum. Everti molestiae ea qui. Pro ex autem alienum. Eum ea modo gloriatur, mei harum mnesarchum dissentiet ad. Ei quo debitis facilisi. Lorem ipsum dolor sit amet, legendos mandamus duo ut, duo ne solum gloriatur, ea ius inani intellegebat. Vidit putant forensibus ei usu, detracto aliquando vel id. Ea putant eripuit senserit vim, ea amet euismod vocibus eam, per alia assentior ex. Ut cum errem integre oportere, diam quidam mea eu. Ceteros posidonium necessitatibus nam in, ad dolor sanctus laoreet nec. Sea eu sanctus intellegebat. Cu pri omnesque scaevola singulis, at zril doming theophrastus ius. At paulo inermis gloriatur vis, dicta nihil electram ne est. Ea fabulas scaevola invidunt nec, vis liber mundi scripserit ut. Laudem democritum mea et, ex quem debet putent pro. Malorum nostrum consetetur et qui, ad facer putent oblique est, id duo percipit pertinacia. At his nihil sensibus persecuti, idque volumus cu qui. Vix ea facilis apeirian, ne esse legimus cum. Persius prompta discere ne vim, case nonumes percipitur vim ei. Qui et assum utinam intellegat, vix ad wisi nonumy lucilius. Ea mel partem dictas, tollit decore verear sea ea. Percipit perfecto sed cu, fugit homero sea at. Consul salutandi adolescens ut sit, eius causae mediocritatem mel an, mea ut meis iudicabit. Mazim nihil blandit at sit, invenire consequuntur an quo. Eam an meis tation dicant, nostrum quaestio contentiones eu mel, an mucius cetero consulatu cum. Everti molestiae ea qui. Pro ex autem alienum. Eum ea modo gloriatur, mei harum mnesarchum dissentiet ad. Ei quo debitis facilisi. Lorem ipsum dolor sit amet, legendos mandamus duo ut, duo ne solum gloriatur, ea ius inani intellegebat. Vidit putant forensibus ei usu, detracto aliquando vel id. Ea putant eripuit senserit vim, ea amet euismod vocibus eam, per alia assentior ex. Ut cum errem integre oportere, diam quidam mea eu. Ceteros posidonium necessitatibus nam in, ad dolor sanctus laoreet nec. Sea eu sanctus intellegebat. Cu pri omnesque scaevola singulis, at zril doming theophrastus ius. At paulo inermis gloriatur vis, dicta nihil electram ne est. Ea fabulas scaevola invidunt nec, vis liber mundi scripserit ut. Laudem democritum mea et, ex quem debet putent pro. Malorum nostrum consetetur et qui, ad facer putent oblique est, id duo percipit pertinacia. At his nihil sensibus persecuti, idque volumus cu qui. Vix ea facilis apeirian, ne esse legimus cum. Persius prompta discere ne vim, case nonumes percipitur vim ei. Qui et assum utinam intellegat, vix ad wisi nonumy lucilius. Ea mel partem dictas, tollit decore verear sea ea. Percipit perfecto sed cu, fugit homero sea at. Consul salutandi adolescens ut sit, eius causae mediocritatem mel an, mea ut meis iudicabit. Mazim nihil blandit at sit, invenire consequuntur an quo. Eam an meis tation dicant, nostrum quaestio contentiones eu mel, an mucius cetero consulatu cum. Everti molestiae ea qui. Pro ex autem alienum. Eum ea modo gloriatur, mei harum mnesarchum dissentiet ad. Ei quo debitis facilisi. Lorem ipsum dolor sit amet, legendos mandamus duo ut, duo ne solum gloriatur, ea ius inani intellegebat. Vidit putant forensibus ei usu, detracto aliquando vel id. Ea putant eripuit senserit vim, ea amet euismod vocibus eam, per alia assentior ex. Ut cum errem integre oportere, diam quidam mea eu. Ceteros posidonium necessitatibus nam in, ad dolor sanctus laoreet nec. Sea eu sanctus intellegebat. Cu pri omnesque scaevola singulis, at zril doming theophrastus ius. At paulo inermis gloriatur vis, dicta nihil electram ne est. Ea fabulas scaevola invidunt nec, vis liber mundi scripserit ut. Laudem democritum mea et, ex quem debet putent pro. Malorum nostrum consetetur et qui, ad facer putent oblique est, id duo percipit pertinacia. At his nihil sensibus persecuti, idque volumus cu qui. Vix ea facilis apeirian, ne esse legimus cum. Persius prompta discere ne vim, case nonumes percipitur vim ei. Qui et assum utinam intellegat, vix ad wisi nonumy lucilius. Ea mel partem dictas, tollit decore verear sea ea. Percipit perfecto sed cu, fugit homero sea at. Consul salutandi adolescens ut sit, eius causae mediocritatem mel an, mea ut meis iudicabit. Mazim nihil blandit at sit, invenire consequuntur an quo. Eam an meis tation dicant, nostrum quaestio contentiones eu mel, an mucius cetero consulatu cum. Everti molestiae ea qui. Pro ex autem alienum. Eum ea modo gloriatur, mei harum mnesarchum dissentiet ad. Ei quo debitis facilisi. Lorem ipsum dolor sit amet, legendos mandamus duo ut, duo ne solum gloriatur, ea ius inani intellegebat. Vidit putant forensibus ei usu, detracto aliquando vel id. Ea putant eripuit senserit vim, ea amet euismod vocibus eam, per alia assentior ex. Ut cum errem integre oportere, diam quidam mea eu. Ceteros posidonium necessitatibus nam in, ad dolor sanctus laoreet nec. Sea eu sanctus intellegebat. Cu pri omnesque scaevola singulis, at zril doming theophrastus ius. At paulo inermis gloriatur vis, dicta nihil electram ne est. Ea fabulas scaevola invidunt nec, vis liber mundi scripserit ut. Laudem democritum mea et, ex quem debet putent pro. Malorum nostrum consetetur et qui, ad facer putent oblique est, id duo percipit pertinacia. At his nihil sensibus persecuti, idque volumus cu qui. Vix ea facilis apeirian, ne esse legimus cum. Persius prompta discere ne vim, case nonumes percipitur vim ei. Qui et assum utinam intellegat, vix ad wisi nonumy lucilius. Ea mel partem dictas, tollit decore verear sea ea. Percipit perfecto sed cu, fugit homero sea at. Consul salutandi adolescens ut sit, eius causae mediocritatem mel an, mea ut meis iudicabit. Mazim nihil blandit at sit, invenire consequuntur an quo. Eam an meis tation dicant, nostrum quaestio contentiones eu mel, an mucius cetero consulatu cum. Everti molestiae ea qui. Pro ex autem alienum. Eum ea modo gloriatur, mei harum mnesarchum dissentiet ad. Ei quo debitis facilisi.',
        bg: '/bg_spotify.jpeg',
      },
      {
      id: 2,
      client: 'Instinctly',
      role: 'Lead Product Designer / Consultant',
      date: '2007 – Present',
      url: 'https://www.daniellauding.se',
      desc: 'Apa',
      bg: '/bg_instinctly.jpg',
    },

    {
      id: 3,
      client: 'Länsförsäkringar',
      role: 'Art Director Consultant',
      date: '2016 – 2017',
      url: 'https://www.lansforsakringar.se',
      desc: 'Johan',
      bg: '/bg_lf.png'
    },
  ],
  []
  );

  const [active, setActive] = useState(null);

  const selectedChanged = useCallback((value) => {
      setActive(value || null);
      setPreviewCase(null);
  }, [setActive]);

  const clearActive = useCallback(() => {
    setActive(null);
    setPreviewCase(null);
  }, [setActive]);

// Todo
// 0. felsök varför de är ingen auto reload eller, byggfel, iframe ligger framför alla klickevent
// 1. Hover på en rad i listan byter ut bild på mig till preview

// ----- Släpper man hover ska den visa bilden på mig
// --- Få ut aktiva kunden i wrapper klass och på cover bild?

// 2. Klick på en rad ändrar vänster till bild/spel och höger till content tillhörande dessa, med pil går till föregående och nästa projekt, x stänger till start
// 3. markdown loopia innehållen
// 4. 3d spinnande logotyp
// 5. lösenord eller puzzla för att se innehåll, eller qr?
// 6. darkmode
// 7. mobilt

  return (
    <div className="wrapper box-border">
      <div className={classNames("flex flex-row justify-center h-screen w-screen fixed", {[`client-${active?.client?.toLowerCase()} case-active relative justify-start h-auto`]: active})}>

        {/*cases.map(item => (
            <img key={item.id} src={item.bg} alt="" active={active === item.id} setActive={selectedChanged} />
        ))*/}
        
        <div className="cover w-1/2 bg-cover">
          <img
            src={active?.bg || previewCase?.bg || me}
            className={classNames("object-cover w-full h-full", { [`client-${active?.client?.toLowerCase()}`] : active})}
            alt=""
            onClick={() => selectedChanged(previewCase || null)}
          />
        </div>

        {/* <div className="w-1/2 bg-cover" style={{backgroundImage: `url(${active?.bg || previewCase?.bg || me})`}} onClick={() => selectedChanged(previewCase || null)} /> */}

        <div className={classNames("description w-1/2 flex flex-col align-center", active ? 'justify-start' : 'justify-center')} onMouseEnter={clearPreview}>

          {/* </div></div></div>button onClick={handleClick}>Toggle</> */}

          {/* {isShow ?
            <></>
          :
            <section className="content">
              testar detta va
            </section>
          } */}

          {!active && (<div className="overflow-y-scroll h-100">
            <img src={logo} className="logo mx-auto" alt="logo" />
              <h1 className="pt-0 mt-8 mb-0 text-3xl text-center text-black lg:font-bold">{data.hero.title}</h1>
              <p className="pt-0 mb-0 text-center text-black lg:font-light"><a href="mailto:daniel@lauding.se">daniel@lauding.se</a></p>
              <p className="pt-0 mb-8 mx-32 mt-16 text-center text-black lg:font-light text-4xl leading-snug font-serif">I am a hybrid* designer who enjoys prototyping, conceptualizing and designing interfaces</p>
              {/* <h4 className="pt-8 mb-0 text-1xl text-center text-black lg:font-bold">Experiences</h4> */}
              <ul className="flex flex-col justify-center align-center px-32 mt-16">
                {/* {cases.map(item => (
                  <Case key={item.id} item={item} active={active === item.id} setActive={selectedChanged} />
                ))} */}

                {cases.map(item => (
                  <Case key={item.id} item={item} active={active === item.id} setActive={selectedChanged} onHover={setPreviewCase} />
                ))}

              </ul>
              <p className="pt-0 mb-0 mt-16 text-center text-black text-sm lg:font-light"><a href="https://www.linkedin.com/in/daniellauding">Visit my LinkedIn</a></p>

              {/* <Markdown>
                {markdown}
              </Markdown>

              <Markdown>
                {post}
              </Markdown> */}

              <ul className="mt-40 mt-32 flex flex-row justify-center align-center">
                <li className="mx-2">
                  <SocialIcon style={{ height: 32, width: 32 }} network="spotify" url="https://open.spotify.com/artist/4cDYlG9sl8IYOGsoXWKkGt?si=PREJisoNRWuwWeSYSL3dZQ" label="My images" />
                </li>
                <li className="mx-2">
                  <SocialIcon style={{ height: 32, width: 32, fill: 'rgba(0,0,0,0.3)' }} network="instagram" url="https://www.instagram.com/daniellauding/" label="My music" />
                </li>
                <li className="mx-2">
                  <SocialIcon style={{ height: 32, width: 32 }} network="linkedin" url="https://www.linkedin.com/in/daniellauding" label="My career" />
                </li>
              </ul>
          </div>)}
          {active && (
            <Content item={active} clearActive={clearActive} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;

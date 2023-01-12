import React, { useState, useCallback } from 'react';
import CaseSelector, { Case } from './case';
import Text, { Title } from './typography';
import Typewriter from 'typewriter-effect';

const Soon = ({ item}) => {
  return (
    <div className="soon flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="meta flex-col items-center justify-center">
          <Title value={item.client} style="text-center mb-0"/>
          <Text value={item.role} style="text-center mb-0"/>
          <Text value={item.date} style="text-center mb-0"/>
        </div>
        <div className="mt-20 mb-20 text-6xl font-bold mx-auto">
          <Typewriter
            options={{
              strings: ['Something exciting is cooking here!', 'Details will be served soon.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <button
        onClick={() => window.location = `mailto:daniel@laudig.se?subject=${item.client}&body=I want to know more about the work you did for this client.`}
        className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full">
        Request walkthrough
      </button>
    </div>
  )
}

const Client = ({ item, clearActive }) => {
  const { cases = [] } = item;
  const [selected, setCase] = useState(null);
  
  const clearSelected = useCallback(() => {
    setCase(null);
  }, [])

  if (selected) {
    return <Case item={selected} clearActive={clearSelected} />
  }
  
  return (
    <div>
      <button
        onClick={clearActive}
        className="fixed top-8 left-8 pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light">
        ← Back
      </button>
      {!cases?.length && (<Soon item={item} />)}
      <div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden">
        {cases.map((item) => <CaseSelector onSelect={setCase} key={item.id} item={item} clearActive={clearActive} />)}
      </div>
    </div>
  )
}

export default Client;
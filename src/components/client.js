import React, { useState, useCallback } from 'react';
import CaseSelector, { Case } from './case';

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
      {!cases?.length && (<p>coming soon</p>)}
      {cases.map((item) => <CaseSelector onSelect={setCase} key={item.id} item={item} clearActive={clearActive} />)}
      <button
          onClick={clearActive}
          className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light">
          ← Back
        </button>
    </div>
  )
}

export default Client;
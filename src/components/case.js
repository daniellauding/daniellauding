import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Section from './section';

const Case = ({ item, clearActive }) => {
  const [password, setPassword] = useState(null);

  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput.current) {
      emailInput.current.focus();
    }
  }, []);

  const onChange = (event) => {
    setPassword(event.target.value);
  };

  if (item.protected && password !== '123') {
    return (<div tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-10 overflow-y-auto">
    <div className="modal flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <button
          onClick={clearActive}
          type="button"
          className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
          data-bs-dismiss="modal"
          aria-label="Close">
          <XMarkIcon className="h-5 w-5 text-black" />
        </button>
        <div className="modal-body relative p-10">
          <p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
            This case is under a non-disclosure agreement and some information has been
            masked to protect its confidentiality.
          </p>
          <input
            className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
            placeholder="Enter passcode to access this case"
            value={password}
            onChange={onChange}
            ref={emailInput}
            autoFocus
          />
        </div>
      </div>
      <div
        onClick={clearActive}
        className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
      />
    </div>
  </div>);
  }

  return (
    <div
      className={classNames('section-wrapper', item.layout ? item.layout : 'vertical')}>
        <button
          onClick={clearActive}
          className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light">
          ← Back
        </button>

        <h3 className="pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold">
          {item.client}
        </h3>

        <h1 className="pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold">
          {item.title}
        </h1>

        <p className="pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin">
          {item.desc}
        </p>
        {item?.content?.map(
          (section) => (
            <Section key={section?.id} section={section} />
          )
        )}
    </div>
  );
}

const CaseSelector = ({ item, onSelect }) => {
  return (
    <div className="case-wrapper gap-20 flex flex-col">
      <div className={classNames(`section py-20 px-20 section-${item?.case}`)}>
        <h3 className="pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold">
          {item.client}
        </h3>

        <h1 className="pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold">
          {item.title}
        </h1>

        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="desc col-span-2">
              <p className="pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin">
                {item.desc}
              </p>
              <button
                onClick={() => onSelect(item)}
                className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full">
                Read more
              </button>
            </div>

            <div className="meta flex flex-col col-end-5 col-span-1">
              <p className="pt-0 mt-0 mb-2 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">
                <a href={item.url}>{item.url}</a>
              </p>
              <ul>
                <li className={classNames(`flex flex-col md:flex-col py-0 mb-0`)}>
                  <p className="pt-0 mb-0 ml-0 text-left dark:text-gray-500 text-black lg:font-light">
                    {item.role}
                  </p>
                  <p className="pt-0 mb-0 md:ml-0 text-xs text-left md:text-left dark:text-gray-500 text-black lg:font-light">
                    {item.date}
                  </p>
                </li>
              </ul>
              <p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">
                {item.location}
              </p>

              {item.tags ? (
                <ul className="tags flex-wrap flex md:flex-col w-auto py-0 mb-8 gap-2">
                  {item.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100 w-max">
                      <p className="text-xs dark:text-gray-400 text-gray-500 font-bold">{tag}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSelector;
export { Case };

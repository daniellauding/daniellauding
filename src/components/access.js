import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Access = ({ clearActive, password, onChange, emailInput, item }) => {
  return (
    <div tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-10 overflow-y-auto">
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
            <button
              onClick={() => window.location = `mailto:daniel@laudig.se?subject=${item.case}&body=I want to know more about the work you did in this project.`}
              className="bg-primary hover:primary text-white font-bold py-5 px-8 mt-8 rounded-full">
              Request access
            </button>
          </div>
        </div>
        <div
          onClick={clearActive}
          className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
        />
      </div>
    </div>
  );
};

export default Access;
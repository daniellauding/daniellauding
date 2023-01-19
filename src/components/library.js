import React, { useState } from 'react';
import classNames from 'classnames';
import { XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

const files = [];

function importAll(r) {
	// r.keys().forEach((key) => (cache[key] = r(key)));

	r.keys().forEach((key) => {
		files.push(key.substring(2));
	});
}

importAll(
	require.context('../../public/images/case/', true, /\.(png|jpe?g|svg)$/)
);

const Library = ({ item = {} }) => {
	const images = files.filter((library) => library.includes(item.folder));

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="library">
			<button
				onClick={() => setShowModal(true)}
				className="text-white font-bold p-2 w-2 h-2 rounded-full fixed top-4 right-8"
			>
				<Squares2X2Icon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
			</button>

			{showModal ? (
				<div
					tabIndex="-1"
					aria-hidden="true"
					className={classNames('fixed inset-0 z-10 overflow-y-auto')}
				>
					<div className="modal modal-enter-access-code flex min-h-full items-end justify-center p-12 text-center sm:items-center h-screen">
						<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all h-full">
							<div className="modal-header relative p-10 pb-4 mx-auto">
								<button
									// onClick={clearActive}
									onClick={() => setShowModal(false)}
									type="button"
									className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<XMarkIcon className="h-5 w-5 text-black" />
								</button>
							</div>
							<div className="modal-body relative p-10 mx-auto overflow-y-auto h-full">
								<div className="grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
									{images.map((src, index) => (
										<div
											key={index}
											className="w-full flex justify-center items-center h-full bg-gray-200"
										>
											<img
												key={index}
												className="object-cover w-full max-w-full max-h-full"
												src={`/images/case/${src}`}
												alt={`/images/case/${src}`}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
						<div
							onClick={() => setShowModal(false)}
							className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Library;

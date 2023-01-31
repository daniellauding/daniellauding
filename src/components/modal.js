import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Modal = (props) => {
	const {
		children,
		title,
		btnClose,
		btnSave,
		open: showModal,
		onClose,
	} = props;
	return (
		<>
			{showModal ? (
				<>
					<div className="modal fixed top-0 left-0 botton-0 right-0 modal-contact z-90 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div className="modal-inner border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="modal-header py-4 px-10">
									{title ? (
										<h3 className="text-3xl font=semibold">
											{title}
										</h3>
									) : null}
									<button
										onClick={onClose}
										type="button"
										className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										<XMarkIcon className="h-5 w-5 text-black" />
									</button>
								</div>
								<div className="modal-body relative py-6 px-10">
									{children}
								</div>
								{btnClose || btnSave ? (
									<div className="modal-footer flex justify-between px-10 py-4 pb-10">
										{btnClose ? (
											<button
												className="btn-medium btn-link btn"
												type="button"
												onClick={onClose}
											>
												{btnClose}
											</button>
										) : null}
										{btnSave ? (
											<button
												className="btn-medium btn-primary btn"
												type="button"
												onClick={onClose}
											>
												{btnSave}
											</button>
										) : null}
									</div>
								) : null}
							</div>
						</div>
						<div
							onClick={onClose}
							className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
						/>
					</div>
				</>
			) : null}
		</>
	);
};

export default Modal;

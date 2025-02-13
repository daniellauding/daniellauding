import React from 'react';
import classNames from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ContactForm from './form';
import { OffertForm } from './form';

const Contact = ({ closeContactModal }) => {
	return (
		<div
			tabIndex="-1"
			aria-hidden="true"
			className={classNames('fixed inset-0 z-10 overflow-y-auto')}
		>
			<div className="modal modal-request-access flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
					<button
						onClick={closeContactModal}
						type="button"
						className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<XMarkIcon className="h-5 w-5 text-black" />
					</button>
					<div className="modal-body relative p-10">
						<ContactForm closeContactModal={closeContactModal} />
					</div>
				</div>
				<div
					onClick={closeContactModal}
					className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
				/>
			</div>
		</div>
	);
};

const Offert = ({ closeOffertModal }) => {
	return (
		<div
			tabIndex="-1"
			aria-hidden="true"
			className={classNames('fixed inset-0 z-10 overflow-y-auto')}
		>
			<div className="modal modal-request-access flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
					<button
						onClick={closeOffertModal}
						type="button"
						className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<XMarkIcon className="h-5 w-5 text-black" />
					</button>
					<div className="modal-body relative p-10">
						<OffertForm closeOffertModal={closeOffertModal} />
					</div>
				</div>
				<div
					onClick={closeOffertModal}
					className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
				/>
			</div>
		</div>
	);
};

// New ContactSplash component
const ContactSplash = ({ closeModal, openContactModal, openOffertModal }) => {
	return (
		<div
			className="fixed inset-0 z-[9999] overflow-hidden"
			style={{ pointerEvents: 'auto' }}
		>
			<div
				className="absolute inset-0 bg-black/30 backdrop-blur-sm"
				onClick={closeModal}
			></div>
			<div className="modal fixed top-0 left-0 botton-0 right-0 modal-contact z-90 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
					<div className="modal-inner border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="modal-header py-4 px-6">
							<h3 className="pt-0 ml-0 text-left text-2xl dark:text-gray-900 text-black lg:font-light">
								Let&apos;s Work Together!
							</h3>
							<button
								onClick={closeModal}
								type="button"
								className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<XMarkIcon className="h-5 w-5 text-black" />
							</button>
						</div>
						<div className="modal-body relative py-6 px-6">
							<p className="pt-0 mb-8 ml-0 text-left text-1xl dark:text-gray-700 text-black lg:font-light">
								I&apos;m currently available for new projects
								and opportunities. Whether you have a specific
								project in mind or just want to discuss
								possibilities, I&apos;d love to hear from you.
							</p>
							<div className="flex gap-4">
								<button
									onClick={() => {
										closeModal();
										openContactModal();
									}}
									className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
								>
									Contact Me
								</button>
								<button
									onClick={() => {
										closeModal();
										openOffertModal();
									}}
									className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
								>
									Submit Project
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
export { Offert, ContactSplash };

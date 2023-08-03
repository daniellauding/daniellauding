import React from 'react';
import classNames from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ContactForm from './contactform';
import OffertForm from './offertform';
// merge to Forms file

const Contact = (props) => {
	const { showContactModal, closeContactModal } = props;

	return (
		<div
			tabIndex="-1"
			aria-hidden="true"
			className={classNames(
				'fixed inset-0 z-10 overflow-y-auto',
				showContactModal ? 'visible' : 'invisible'
			)}
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

const Offert = (props) => {
	const { showOffertModal, closeOffertModal } = props;

	return (
		<div
			tabIndex="-1"
			aria-hidden="true"
			className={classNames(
				'fixed inset-0 z-10 overflow-y-auto',
				showOffertModal ? 'visible' : 'invisible'
			)}
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

export default Contact;
export { Offert };

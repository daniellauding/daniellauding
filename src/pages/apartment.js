import React, { useState } from 'react';
import { About } from '../components/about';
import { apt } from '../constant';
import Modal from '../components/modal';
import { BookingForm } from '../components/form';

const ApartmentPage = () => {
	const [showBookingModal, setShowBookingModal] = useState(false);

	const handleBookingClick = () => {
		setShowBookingModal(true);
	};

	return (
		<>
			<About content={apt} onBookingClick={handleBookingClick} />

			{showBookingModal && (
				<Modal
					open={showBookingModal}
					onClose={() => setShowBookingModal(false)}
					title="Book Your Stay"
				>
					<BookingForm closeContactModal={() => setShowBookingModal(false)} />
				</Modal>
			)}
		</>
	);
};

export default ApartmentPage;

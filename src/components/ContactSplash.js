import React from 'react';

const ContactSplash = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="contact-splash">
			<div className="contact-splash-content">
				<button onClick={onClose} className="close-button">
					×
				</button>
				{/* Add your contact splash content here */}
				<h2>Contact</h2>
				{/* Add more content as needed */}
			</div>
		</div>
	);
};

export default ContactSplash;

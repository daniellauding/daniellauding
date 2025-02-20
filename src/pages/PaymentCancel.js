import React from 'react';

const PaymentCancel = () => {
	return (
		<div className="max-w-2xl mx-auto mt-20 p-6">
			<h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
			<div className="bg-yellow-50 border border-yellow-200 rounded p-4">
				<p className="text-yellow-700 mb-2">
					Your payment was not completed.
				</p>
				<p className="text-gray-600">
					Don't worry - your project request is still saved. You can
					try the payment again or contact us to arrange an
					alternative payment method.
				</p>
			</div>
		</div>
	);
};

export default PaymentCancel;

import React from 'react';

const PaymentSuccess = () => {
	return (
		<div className="max-w-2xl mx-auto mt-20 p-6">
			<h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
			<div className="bg-green-50 border border-green-200 rounded p-4">
				<p className="text-green-700 mb-2">
					Thank you for your payment. Your project request has been
					confirmed.
				</p>
				<p className="text-gray-600">
					You will receive a confirmation email shortly with next
					steps.
				</p>
			</div>
		</div>
	);
};

export default PaymentSuccess;

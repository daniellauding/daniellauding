import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const PortfolioViewer = ({ isOpen, onClose }) => {
	const [isLoading, setIsLoading] = useState(true);

	// Handle initial mount
	useEffect(() => {
		if (window.location.hash === '#selectedwork' && !isOpen) {
			// Force open if hash is present
			const event = new Event('hashchange');
			window.dispatchEvent(event);
		}
	}, [isOpen]);

	// Handle URL hash
	useEffect(() => {
		if (isOpen) {
			window.location.hash = 'selectedwork';
		} else if (window.location.hash === '#selectedwork') {
			window.location.hash = '';
		}
	}, [isOpen]);

	// Handle hash changes from outside
	useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash !== '#selectedwork' && isOpen) {
				onClose();
			}
		};

		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[9999] bg-black bg-opacity-90">
			<div className="absolute inset-0 flex flex-col p-4 md:p-8">
				<div className="flex justify-between mb-4">
					<button
						onClick={onClose}
						className="text-white hover:text-gray-300 transition-colors"
						aria-label="Close portfolio"
					>
						<XMarkIcon className="h-8 w-8" />
					</button>
				</div>
				<div className="flex-grow relative">
					{isLoading && (
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							<div className="flex flex-col items-center gap-4">
								<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
								<p className="text-white text-lg">
									Loading portfolio...
								</p>
							</div>
						</div>
					)}
					<iframe
						className="absolute inset-0 w-full h-full rounded-lg"
						src="https://embed.figma.com/proto/ITcLm3ciPq4G5qkKP6q1d9/selected-work-2016-9-apr-2024?page-id=0%3A1&node-id=231-142&starting-point-node-id=231%3A142&embed-host=share"
						allowFullScreen
						title="Portfolio Preview"
						onLoad={() => setIsLoading(false)}
					/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioViewer;

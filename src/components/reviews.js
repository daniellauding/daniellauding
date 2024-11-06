import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Reviews = ({ reviews }) => {
	return (
		<div className="reviews-slider flex flex-col gap-8">
			{reviews.map((review) => (
				<div
					key={review.id}
					className="review-card bg-white p-6 rounded-lg shadow"
				>
					<div className="flex items-center gap-2 mb-2">
						{[...Array(review.rating)].map((_, i) => (
							<StarIcon
								key={i}
								className="h-5 w-5 text-primary"
							/>
						))}
					</div>
					<p className="text-gray-700 mb-4">{review.text}</p>
					<div className="flex justify-between text-sm text-gray-500">
						<span>{review.author}</span>
						<span>{review.date}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reviews; 
import React from 'react';
import Icon from './icon';

const Amenities = ({ amenities }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{amenities.map((amenity) => (
				<div
					key={amenity.id}
					className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
				>
					<Icon
						icon={amenity.icon}
						size="small"
						className="text-primary"
					/>
					<span className="text-sm font-medium">
						{amenity.name}
					</span>
				</div>
			))}
		</div>
	);
};

export default Amenities; 
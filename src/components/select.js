import React from 'react';

const Select = (props) => {
	const { options, option } = props;

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		const selectedItem = options.find((opt) => opt.value == selectedValue);
		props.onSelect && props.onSelect(selectedItem);
	};

	// const item = options.find((option) => option.id);
	// console.log('newItem', item);

	return (
		<div className="select relative">
			<select
				value={option.value}
				onChange={handleChange}
				className="bg-transparent text-white -ml-1"
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;

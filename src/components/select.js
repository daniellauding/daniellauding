import React, { useCallback } from 'react';

const Select = (props) => {
	const { options, option, disabled } = props;

	const handleChange = useCallback(
		(e) => {
			const selectedValue = e.target.value;
			const selectedItem = options.find(
				(opt) => opt.value == selectedValue
			);
			props.onSelect && props.onSelect(selectedItem?.value);
		},
		[options]
	);

	// const item = options.find((option) => option.id);
	// console.log('newItem', item);

	return (
		<div className="select relative">
			<select
				value={option?.value}
				onChange={handleChange}
				className="bg-transparent text-white -ml-1"
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						disabled={disabled}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;

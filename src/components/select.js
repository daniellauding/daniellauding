import React from 'react';

const Select = (props) => {
	const { options, option } = props;

	const handleChange = (e) => {
		const item = options.find((option) => option.id == e.target.value);
		// console.log('handleChange ska funka', item);
		// console.log('handleChange ska funka', options);
		// console.log('e.target.value', e.target.value);
		// setSelected(e.target.value);
		props.onSelect && props.onSelect(item);
	};

	// const item = options.find((option) => option.id);
	// console.log('newItem', item);

	return (
		<div className="select relative">
			<select
				value={option.id}
				onChange={handleChange}
				className="bg-transparent text-white -ml-1"
			>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.client}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;

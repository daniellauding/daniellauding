import React from 'react';
import classNames from 'classnames';

const DropdownItem = (props) => {
	const { option, selected } = props;
	return (
		<li
			className={classNames(
				`menu-item m-0 bg-white`,
				selected ? 'selected' : 'not-selected'
			)}
		>
			<button className="w-full h-full text-left bg-transparent text-inherit cursor-pointer text-black">
				{option.value} + {option.target}
			</button>
		</li>
	);
};

const Dropdown = (props) => {
	const { label, options, selected, showClientsDropdown } = props;

	return (
		<div className="dropdown relative">
			<button onClick={() => {}}>{label}</button>
			{showClientsDropdown ? (
				<ul className="menu border-0 absolute my-5 mx-0 p-0 w-32">
					{options.map((option) => (
						<DropdownItem
							key={option.index}
							option={option}
							selected={selected}
						/>
					))}
				</ul>
			) : null}
			{showClientsDropdown ? <div>Is Open</div> : <div>Is Closed</div>}
		</div>
	);
};

export default Dropdown;

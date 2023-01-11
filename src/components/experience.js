import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

const Experience = ({ item, active, setActive, onHover }) => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	const onClick = useCallback(
		(e) => {
			e.preventDefault();
			setActive(item);
		},
		[item, setActive],
	);

	const setPreview = useCallback(
		(e) => {
			toggleHover();
			e.stopPropagation();
			onHover(item);
		},
		[item, onHover],
	);

	const clearPreview = useCallback(
		(e) => {
			toggleHover();
			e.stopPropagation();
			onHover(null);
		},
		[onHover],
	);

	return (
		<li
			key={item.id}
			className={classNames(
				`grid grid-cols-3 md:flex md:flex-row py-4`,
				active ? 'bg-gray-100 text-gray-900' : 'block px-4 py-2 text-sm text-gray-700',
				hovered ? 'yes' : 'no',
			)}
			onClick={onClick}
			onMouseEnter={setPreview}
			onMouseLeave={clearPreview}>
			<p
				className={classNames(
					`col-span-3 pt-0 mb-0 text-left dark:text-gray-300 md:text-black text-2xl md:text-base md:font-medium sm:w-24 md:w-40`,
				)}>
				<a href={item.url} onClick={onClick}>
					{item.client}
				</a>
				{hovered === true ? (
					<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
						active
					</span>
				) : (
					<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
						not active
					</span>
				)}
			</p>
			<p className="col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light">
				{item.role}
			</p>
			<p className="col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light">
				{item.date}
			</p>
			{/* <p className="pt-0 mb-0 fontregular text-center text-black lg:font-light">Add description here, problems, market, why, achivements</p> */}
		</li>
	);
};

export default Experience;

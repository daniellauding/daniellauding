import React from 'react';
import { work } from '../constant';
import Experience from './experience';

const Experiences = ({ active, selectedChanged, setPreviewCase }) => {
	return (
		<ul className="experiences flex flex-col justify-center align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto">
			{work
				.filter((item) => item.index !== false)
				.map((item) => (
					<Experience
						key={item.id}
						item={item}
						active={active === item.id}
						setActive={selectedChanged}
						onHover={setPreviewCase}
					/>

					// List more like a longer one, a cv, maybe list projects as a accordion, a full page view / sidebar / replace traditional cv
				))}
		</ul>
	);
};

export default Experiences;

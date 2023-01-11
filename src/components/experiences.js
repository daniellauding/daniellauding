import React from 'react';
import { cases } from '../constant';
import Experience from './experience';

const Experiences = ({ active, selectedChanged, setPreviewCase }) => {
	return (
		<ul className="experiences flex flex-col justify-center align-center px-8 md:px-16 mt-16">
			{cases.map((item) => (
				<Experience
					key={item.id}
					item={item}
					active={active === item.id}
					setActive={selectedChanged}
					onHover={setPreviewCase}
				/>
			))}
		</ul>
	);
};

export default Experiences;

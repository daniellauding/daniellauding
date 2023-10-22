import React, { useState, useEffect } from 'react';
import Groups from './groups';

const AccordionContent = ({ accordion }) => {
	const [activeAccordion, setActiveAccordion] = useState([]);

	// Initialize active accordion sections when the component mounts
	useEffect(() => {
		const initialActiveAccordion = accordion
			.map((item, index) => (item.active ? index : null))
			.filter((index) => index !== null);
		setActiveAccordion(initialActiveAccordion);
	}, [accordion]);

	const handleAccordionClick = (sectionIndex) => {
		if (activeAccordion.includes(sectionIndex)) {
			// Clicking the active tab again should close it
			setActiveAccordion(
				activeAccordion.filter((index) => index !== sectionIndex)
			);
		} else {
			setActiveAccordion([...activeAccordion, sectionIndex]);
		}
	};

	return (
		<div className="accordion">
			{accordion?.map((accordionItem, accordionIndex) => (
				<div key={accordionIndex}>
					<div
						className="flex border-b cursor-pointer"
						onClick={() => handleAccordionClick(accordionIndex)}
					>
						<div
							className={`p-4 w-full ${
								activeAccordion.includes(accordionIndex)
									? 'border-blue-500'
									: ''
							}`}
						>
							{accordionItem.title}
							{accordionItem.section}
						</div>
					</div>
					<div
						className={`${
							activeAccordion.includes(accordionIndex)
								? 'block'
								: 'hidden'
						} border p-4 border-gray-300`}
					>
						{accordionItem.lead}

						<Groups section={accordionItem} />
					</div>
				</div>
			))}
		</div>
	);
};

export default AccordionContent;

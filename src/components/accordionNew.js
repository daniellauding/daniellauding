import React, { useState } from 'react';
import Groups from './groups';

const AccordionContent = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(null);

	const handleTabClick = (sectionIndex) => {
		if (activeTab === sectionIndex) {
			// Clicking the active tab again should close it
			setActiveTab(null);
		} else {
			setActiveTab(sectionIndex);
		}
	};

	console.log('tabs', tabs);

	return (
		<div className="accordion">
			{tabs?.map((section, sectionIndex) => (
				<div key={sectionIndex}>
					<div
						className="flex border-b cursor-pointer"
						onClick={() => handleTabClick(sectionIndex)}
					>
						<div
							className={`p-4 w-full ${
								activeTab === sectionIndex
									? 'border-blue-500'
									: ''
							}`}
						>
							{section.title}
							{section.section}
						</div>
					</div>
					<div
						className={`${
							activeTab === sectionIndex ? 'block' : 'hidden'
						} border p-4 border-gray-300`}
					>
						{section.lead}

						<Groups section={section} />
					</div>
				</div>
			))}
		</div>
	);
};

export default AccordionContent;

import React, { useState } from 'react';

const TabbedContent = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (sectionIndex) => {
		setActiveTab(sectionIndex);
	};

	return (
		<div className="tabs">
			<ul className="flex border-b">
				{tabs?.map((section, sectionIndex) => (
					<li
						key={sectionIndex}
						className={`cursor-pointer ${
							activeTab === sectionIndex ? 'border-blue-500' : ''
						} p-4`}
						onClick={() => handleTabClick(sectionIndex)}
					>
						{section.title}
						{section.section}
					</li>
				))}
			</ul>
			<div className="p-4">
				{tabs?.map((section, sectionIndex) => (
					<div
						key={sectionIndex}
						className={`${
							activeTab === sectionIndex ? 'block' : 'hidden'
						} border p-4 border-gray-300`}
					>
						{section.lead}
					</div>
				))}
			</div>
		</div>
	);
};

export default TabbedContent;

import React from 'react';
import { work } from '../constant';

const Tag = () => {
	return (
		
	);
};

const TagsList = () => {
	return (
    // cases tags, index false ej visas
    // click på en tag visar en ny sida med case-preview under dess tags och tag menyn för att kunna byta
    {item.tags ? (
      <ul className="flex-wrap flex md:flex-row w-auto py-0 mb-8 gap-2">
        {item.tags.map((tag, index) => (
          <li
              key={index}
              className="px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100"
          >
            <p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
              {tag}
            </p>
          </li>
        ))}
      </ul>
    ) : null}
	);
};

const Tags = () => {
	return (
    // Tagslist med active på och en 'all'
		// Visa projekten och tags lista vy ?
	);
};

export { Tags, Tag };

export default TagsList;
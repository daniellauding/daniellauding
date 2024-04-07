import React from 'react';
import Text, { Title } from './typography';
import Icon from './icon'; // Import the Icon component

const ListItem = ({ item }) => {
	console.log('Icon:', item.icon); // Log the icon prop
	console.log('Title:', item.title); // Log the title prop
	console.log('Text:', item.text); // Log the text prop

	return (
		<li className="mb-4 flex items-center flex flex-col">
			{Array.isArray(item.icon) ? (
				item.icon.map((iconItem, index) => (
					<Icon
						key={index}
						icon={iconItem.svgCode}
						size={iconItem.size}
						customClass={iconItem.class} // Pass customClass instead of class
					/>
				))
			) : (
				<Icon
					icon={item.icon.svgCode}
					size={item.icon.size}
					customClass={item.icon.class}
				/> // Pass customClass instead of class
			)}

			{Array.isArray(item.title) ? (
				item.title.map((titleItem, index) => (
					<Title
						key={index}
						value={titleItem.value}
						size={titleItem.size}
						className="w-full"
					/>
				))
			) : (
				<Title value={item.title.value} size={item.title.size} />
			)}

			{Array.isArray(item.text) ? (
				item.text.map((textItem, index) => (
					<Text
						key={index}
						value={textItem.value}
						size={textItem.size}
					/>
				))
			) : (
				<Text value={item.text.value} size={item.text.size} />
			)}
		</li>
	);
};

const List = ({ items }) => (
	<ul className="list-disc list-inside">
		{items.map((itemGroup, index) => (
			<React.Fragment key={index}>
				{Array.isArray(itemGroup.item) ? (
					itemGroup.item.map((item, innerIndex) => (
						<ListItem key={innerIndex} item={item} />
					))
				) : (
					<ListItem key={index} item={itemGroup} />
				)}
			</React.Fragment>
		))}
	</ul>
);

export default List;

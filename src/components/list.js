import React from 'react';
import Text, { Title } from './typography';
import Icon from './icon';

const ListItem = ({ item }) => {
	return (
		<li className="mb-4 flex-none">
			{item.icon &&
				(Array.isArray(item.icon) ? (
					item.icon.map((iconItem, index) => (
						<Icon
							key={index}
							icon={iconItem.svgCode}
							size={iconItem.size}
							customClass={iconItem.class}
						/>
					))
				) : (
					<Icon
						icon={item.icon.svgCode}
						size={item.icon.size}
						customClass={item.icon.class}
					/>
				))}

			{item.title &&
				(Array.isArray(item.title) ? (
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
				))}

			{item.text &&
				(Array.isArray(item.text) ? (
					item.text.map((textItem, index) => (
						<Text
							key={index}
							value={textItem.value}
							size={textItem.size}
							className="pt-0 mb-2 text-text lg:font-light"
						/>
					))
				) : (
					<Text
						value={item.text.value}
						size={item.text.size}
						className="pt-0 mb-2 text-text lg:font-light"
					/>
				))}
		</li>
	);
};

const List = ({ list }) => {
	if (!list) return null;

	const { style, items } = list;
	const listClasses = `list-${style?.type || 'disc'} list-${
		style?.position || 'inside'
	} ${style?.className || ''}`.trim();

	return (
		<ul className={listClasses}>
			{items.map((item, index) => (
				<ListItem key={index} item={item} />
			))}
		</ul>
	);
};

export default List;

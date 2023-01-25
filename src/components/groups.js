import React from 'react';
// import ContentType from './contentType';
import classNames from 'classnames';
import Text, { Title } from './typography';
// import DummyImage from 'react-dummy-image';
import Image from './image';

const Group = ({ group }) => {
	const { title, text, image, ...rest } = group;
	return (
		<div
			className={classNames(`group`, {
				[`col-span-${group.columns}`]: group.columns,
				[`col-start-${group.colStart}`]: group.colStart,
				[`col-end-${group.colEnd}`]: group.colEnd,
				[`row-span-${group.rows}`]: group.rows,
				[`row-start-${group.rowStart}`]: group.rowStart,
				[`row-end-${group.rowEnd}`]: group.rowEnd,
				[`${group.style}`]: group.style,
			})}
		>
			{title && (
				<Title
					value={title?.value}
					variant={title?.variant}
					style={title?.style}
				/>
			)}
			{text && (
				<Text
					value={text?.value}
					variant={text?.variant}
					style={text?.style}
				/>
			)}
			{image && (
				<Image
					variant={image?.variant}
					color={image?.color}
					format={image?.format}
					width={image?.width}
					height={image?.height}
					text={image?.text}
					textColor={image?.textColor}
					item={image}
					src={image?.src}
				/>
			)}
			{/* {image && (<image color={image?.color} format={image?.format} width={image?.width} height={image?.height} text={image?.text} textColor={image?.textcolor} />)} */}
			{rest?.groups && <Groups section={rest} />}
		</div>
	);
};

const Groups = ({ section }) => {
	const { groups = [] } = section;
	if (groups.length === 0) {
		return null;
	}
	return (
		<div
			className={classNames(
				`groups grid gap-0 md:gap-16 auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr mt-8`,
				{
					[`grid-cols-${section.columns}`]: section.columns,
					[`grid-rows-${section.rows}`]: section.rows,
					[`gap-${section.gap}`]: section.gap,
					[`gap-y-${section.gapY}`]: section.gapY,
					[`gap-x-${section.gapX}`]: section.gapX,
				}
			)}
		>
			{groups.map((group) => (
				<Group key={group?.id} group={group} />
			))}
		</div>
	);
};

export default Groups;

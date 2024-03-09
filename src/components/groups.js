import React from 'react';
// import ContentType from './contentType';
import classNames from 'classnames';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Text, { Title } from './typography';
// import DummyImage from 'react-dummy-image';
import Image from './image';

const Group = ({ group }) => {
	const { title, text, lead, image, ...rest } = group;
	console.log('group', group);
	return (
		<div
			className={classNames(
				`group`,
				{
					[`col-span-${group.columns}`]: group.columns,
					[`col-start-${group.colStart}`]: group.colStart,
					[`col-end-${group.colEnd}`]: group.colEnd,
					[`row-span-${group.rows}`]: group.rows,
					[`row-start-${group.rowStart}`]: group.rowStart,
					[`row-end-${group.rowEnd}`]: group.rowEnd,
					[`${group.style}`]: group.style,
				},
				group?.class?.trim()
			)}
		>
			{title && (
				<Title
					value={title?.value}
					variant={title?.variant}
					style={title?.style}
					color={title?.color}
					fill={title?.fill}
					align={title?.align}
					family={title?.family}
					weight={title?.weight}
					className={title?.className}
				/>
			)}
			{text && Array.isArray(text) ? (
				<div className="space-y-4 flex flex-col">
					{text.map((textBlock, index) => (
						<Text
							key={index}
							value={textBlock.value}
							size={textBlock.size}
							style={textBlock.style}
							color={textBlock?.color}
							fill={textBlock?.fill}
							align={textBlock?.align}
							className={textBlock?.className}
							family={textBlock?.family}
							weight={textBlock?.weight}
						/>
					))}
				</div>
			) : (
				<Text
					value={text?.value}
					size={text?.size}
					style={text?.style}
					color={text?.color}
					fill={text?.fill}
					align={text?.align}
					className={text?.className}
					family={text?.family}
					weight={text?.weight}
				/>
			)}

			{lead && (
				<Text
					size="large"
					value={lead}
					color={lead?.color}
					fill={text?.fill}
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

const Groups = ({ groups }) => {
	//console.log('Groups component, groups:', groups);

	if (!groups || groups.length === 0) {
		return null; // Render nothing if there are no groups
	}

	return (
		<div
			className={classNames(
				`groups grid gap-0 md:gap-16 auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr mt-8 h-full`,
				{
					[`grid-cols-${groups.columns}`]: groups.columns,
					[`grid-rows-${groups.rows}`]: groups.rows,
					[`gap-${groups.gap}`]: groups.gap,
					[`gap-y-${groups.gapY}`]: groups.gapY,
					[`gap-x-${groups.gapX}`]: groups.gapX,
				}
			)}
		>
			{groups.map((group, index) => (
				<>
					{group?.animate ? (
						<AnimationOnScroll
							animateIn={
								group?.animateIn
									? group?.animateIn
									: 'animate__fadeIn'
							}
							animateOut={group?.animateOut}
							delay={group?.delay}
							duration={group?.duration}
							animateOnce={
								group?.animateOnce ? group?.animateOnce : true
							}
						>
							<Group key={group?.id || index} group={group} />
						</AnimationOnScroll>
					) : (
						<Group key={group?.id || index} group={group} />
					)}
				</>
			))}
		</div>
	);
};

export default Groups;

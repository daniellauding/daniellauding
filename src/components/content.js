/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Slider from './slider';
import Accordion from './accordion';
import Text, { Title } from './typography';
import DummyImage from 'react-dummy-image';
import Image from './image';
import Section from './section';
import Hero from './hero';

// Carousel
// Image gallery
// Modal
// Accordion

const Component = ({
	item,
	type,
	style,
	value,
	width,
	height,
	size,
	title,
	accordionItem,
	slides,
	format,
	className,
	color,
	textColor,
}) => {
	if (type === 'text') {
		return <Text value={value} size={size} style={style} />;
	}
	if (type === 'title') {
		return <Title value={value} size={size} style={style} />;
	}
	if (type === 'img') {
		return <Image item={item} value={value} style={style} />;
	}
	if (type === 'dummyimg') {
		return (
			<DummyImage
				text={value}
				width={width}
				height={height}
				format={format}
				className={className}
				color={color}
				textColor={textColor}
			/>
		);
	}
	if (type === 'slider') {
		return <Slider slides={slides} />;
	}
	if (type === 'accordion') {
		return <Accordion accordionItem={accordionItem} title={title} />;
	}
	return null;
};

const Content = ({ item, clearActive }) => {
	const [toggle, setToggle] = useState(false);

	const [value, setValue] = useState('');

	const emailInput = useRef(null);

	useEffect(() => {
		if (emailInput.current) {
			emailInput.current.focus();
		}
	}, []);

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="case-wrapper gap-20 flex flex-col">
			<div
				className={classNames(
					`section py-20 px-20 section-${item.client.toLowerCase()}`
				)}
			>
				<Hero item={item} toggle={toggle} setToggle={setToggle} />
				<button
					onClick={clearActive}
					className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
				>
					← Back
				</button>
			</div>

			{item.protected ? (
				<>
					{value === '123' ? (
						<>
							<div
								className={classNames(
									'section-wrapper',
									item.layout ? item.layout : 'vertical'
								)}
							>
								{item?.content?.map(
									(
										style,
										row,
										index,
										content,
										columns,
										colEnd,
										colStart,
										rowStart,
										rowEnd,
										rows,
										flowRows,
										flowColumns,
										autoFlow,
										gap,
										gapY,
										gapX
									) => (
										<Section
											key={item.id}
											content={content}
											columns={columns}
											colEnd={colEnd}
											colStart={colStart}
											rowStart={rowStart}
											rowEnd={rowEnd}
											rows={rows}
											flowRows={flowRows}
											flowColumns={flowColumns}
											autoFlow={autoFlow}
											gap={gap}
											gapY={gapY}
											gapX={gapX}
											style={style}
										>
											<Component key={index} {...row} />
										</Section>
									)
								)}
							</div>
						</>
					) : (
						toggle && (
							<div
								tabIndex="-1"
								aria-hidden="true"
								className="fixed inset-0 z-10 overflow-y-auto"
							>
								<div className="modal flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
									<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
										<button
											onClick={() => setToggle(false)}
											type="button"
											className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Close"
										>
											<XMarkIcon className="h-5 w-5 text-black" />
										</button>
										<div className="modal-body relative p-10">
											<p className="pt-0 mb-8 ml-0 text-left text-2xl dark:text-gray-500 text-black lg:font-light">
												This case is under a
												non-disclosure agreement and
												some information has been masked
												to protect its confidentiality.
											</p>
											<input
												className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full text-black"
												placeholder="Enter passcode to access this case"
												value={value}
												onChange={onChange}
												ref={emailInput}
												autoFocus
											/>
										</div>
									</div>
									<div
										onClick={() => setToggle(false)}
										className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
									/>
								</div>
							</div>
						)
					)}
				</>
			) : (
				<div className="case-wrapper">
					{item?.content?.map((row, index) => (
						<Component key={index} {...row} />
					))}
				</div>
			)}
		</div>
	);
};

export default Content;

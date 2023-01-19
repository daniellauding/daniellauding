import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Section from './section';
import Access from './access';
import Text, { Title } from './typography';
import Image from './image';
import Library from './library';
import TagsList from './tags';

const Case = ({ item, clearActive, selectedChanged }) => {
	const [show, setShow] = useState(true);

	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	const [password, setPassword] = useState(null);

	const emailInput = useRef(null);

	useEffect(() => {
		if (emailInput.current) {
			emailInput.current.focus();
		}
	}, []);

	const onChange = (event) => {
		setPassword(event.target.value);
	};

	if (item.protected && password !== '123') {
		// hur får jag denna att lägga sig ovanpå existerande innehåll, nu byts sida ut?
		return (
			<Access
				clearActive={clearActive}
				closeModal={closeModal}
				openModal={openModal}
				show={show}
				item={item}
				password={password}
				onChange={onChange}
				emailInput={emailInput}
			/>
		);
	}

	return (
		<div
			className={classNames(
				'section-wrapper',
				item.layout ? item.layout : 'vertical'
			)}
		>
			<button
				onClick={clearActive}
				className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
			>
				← Back
			</button>

			{item?.client && <Title value={item.client} />}
			{item?.title && <Title value={item.title} />}
			{item?.lead && <Text value={item.lead} />}
			{item?.desc && <Text value={item.desc} />}
			{item?.library && <Library item={item?.library} />}
			{item?.image && <Image item={item?.image} />}
			<TagsList tags={item?.tags} selectedChanged={selectedChanged} />

			{item?.content?.map((section) => (
				<Section key={section?.id} section={section} />
			))}
		</div>
	);
};

const CaseSelector = ({
	descClassName,
	buttonReadMoreClassName,
	clientClassName,
	caseSelectorClassName,
	urlClassName,
	titleClassName,
	item,
	onSelect,
	dateClassName,
	roleClassName,
	selectedChanged,
}) => {
	return (
		<div className="case-wrapper gap-20 flex flex-col h-full overflow-y-auto">
			<div
				className={classNames(
					`case-selector section py-20 px-20 section-${item?.case}`,
					caseSelectorClassName
				)}
			>
				<h3
					className={classNames(
						`pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold`,
						clientClassName
					)}
				>
					{item.client}
				</h3>

				<h1
					className={classNames(
						`pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold`,
						titleClassName
					)}
				>
					{item.title}
				</h1>

				<div className="container mx-auto">
					<div className="grid grid-cols-4 gap-4">
						<div className="desc col-span-2">
							<p
								className={classNames(
									`pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin`,
									descClassName
								)}
							>
								{item.desc}
							</p>
							<button
								onClick={() => onSelect(item)}
								className={classNames(
									`bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full`,
									buttonReadMoreClassName
								)}
							>
								Read more
							</button>
						</div>

						<div className="meta flex flex-col col-end-5 col-span-1">
							<p
								className={classNames(
									`pt-0 mt-0 mb-2 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light`,
									urlClassName
								)}
							>
								<a href={item.url}>{item.url}</a>
							</p>
							<ul>
								<li
									className={classNames(
										`flex flex-col md:flex-col py-0 mb-0`
									)}
								>
									<p
										className={classNames(
											`pt-0 mb-0 ml-0 text-left dark:text-gray-500 text-black lg:font-light`,
											roleClassName
										)}
									>
										{item.role}
									</p>
									<p
										className={classNames(
											`pt-0 mb-0 md:ml-0 text-xs text-left md:text-left dark:text-gray-500 text-black lg:font-light`,
											dateClassName
										)}
									>
										{item.date}
									</p>
								</li>
							</ul>
							<p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">
								{item.location}
							</p>

							<TagsList
								tags={item.tags}
								selectedChanged={selectedChanged}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseSelector;
export { Case };

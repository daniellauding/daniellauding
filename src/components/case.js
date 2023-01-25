import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Section from './section';
import Access from './access';
import Text, { Title } from './typography';
import Image from './image';
import Library from './library';
import TagsList from './tags';
// import { work } from '../constant';

// how do i render client info like, role, date, name, its in parent of array?
// const ClientName = () => {
// 	return work.map((item, i) => <h3 key={i}>{item.client}</h3>);
// };

const Case = ({ item, clearActive, selectedChanged }) => {
	// console.log(item);

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
				'overflow-x-hidden',
				`section-${item?.case}`,
				`section-${item?.client}`,
				item.layout ? item.layout : 'vertical'
			)}
		>
			<button
				onClick={clearActive}
				className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
			>
				← Back
			</button>
			<div
				className={classNames(
					`section section-hero grid grid-flow-col gap-16 auto-cols-fr relative py-20 px-20`
				)}
			>
				{/* <ClientName /> */}
				<div className="case-header">
					{item?.title && <Title size="xl" value={item.title} />}
					{item?.lead && <Text size="large" value={item.lead} />}
				</div>

				<div className="case-description">
					{item?.desc && <Text value={item.desc} />}
					{item?.image && <Image item={item?.image} />}
					{item?.library && <Library item={item?.library} />}
				</div>

				<div className="case-tags rotate-90 origin-top-right absolute right-3 top-full w-screen">
					<TagsList
						tags={item?.tags}
						selectedChanged={selectedChanged}
					/>
				</div>
			</div>
			{/*
        Below
        Goals / Insights / Outcomes
        maybe make a variant of section
        instead to be able to arrange freely?
      */}
			{item?.goals && (
				<div className="section-goals grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
					{item?.goals?.map((goal) => (
						<div className="goal" key={goal?.id}>
							{goal?.title && <Title value={goal.title} />}
							{goal?.text && <Text value={goal.text} />}
						</div>
					))}
				</div>
			)}
			{item?.insights && (
				<div className="section-insights grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
					{item?.insights?.map((insight) => (
						<div className="insight" key={insight?.id}>
							{insight?.title && <Title value={insight.title} />}
							{insight?.text && <Text value={insight.text} />}
						</div>
					))}
				</div>
			)}
			{item?.outcomes && (
				<div className="section-outcomesgrid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
					{item?.outcomes?.map((outcome) => (
						<div className="outcomes" key={outcome?.id}>
							{outcome?.title && <Title value={outcome.title} />}
							{outcome?.text && <Text value={outcome.text} />}
						</div>
					))}
				</div>
			)}

			{/*
			 */}

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
		<div
			className={classNames(
				`case-wrapper gap-20 flex flex-col h-full overflow-y-auto`,
				`${item?.bg && 'bg-center bg-cover'}`
			)}
			style={{ backgroundImage: item?.bg && `url(${item?.bg})` }}
		>
			<div
				className={classNames(
					`case-selector section py-20 px-20 section-${item?.case}`,
					caseSelectorClassName
				)}
			>
				<h3
					className={classNames(
						`case-client`,
						clientClassName
							? clientClassName
							: 'pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold'
					)}
				>
					{item.client}
				</h3>

				<h1
					className={classNames(
						`case-title`,
						titleClassName
							? titleClassName
							: 'pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold'
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

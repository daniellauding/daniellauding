import React, { useState, useCallback } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import classNames from 'classnames';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import Section from './section';
import Access from './access';
import Text, { Title } from './typography';
import Image from './image';
import Library from './library';
import TagsList from './tags';
import Logo from './logo';
import { work } from '../constant';

// how do i render client info like, role, date, name, its in parent of array?
const ClientName = () => {
	return work.map((item, i) => <h3 key={i}>{item.client}</h3>);
};

const Case = ({ item, selectedChanged }) => {
	// console.log(item);

	return (
		<div
			className={classNames(
				'case',
				`case-${item?.case}`,
				`client-${item?.client.toLowerCase()}`
			)}
		>
			<div
				className={classNames(
					'case-wrapper',
					'overflow-x-hidden',
					item.layout ? item.layout : 'vertical'
				)}
			>
				<div className="client-header top-8 left-8 fixed flex flex-col p-6 gap-8">
					<Logo />
				</div>

				<p className="client-info">NEED CLIENT NAME HERE</p>
				<p className="client-info">CLIENT NAV</p>

				<div
					className={classNames(
						`section section-hero grid grid-flow-col gap-16 auto-cols-fr relative py-20 px-20`
					)}
				>
					<p className="client-info">
						<ClientName />
					</p>

					<div className="case-header">
						{item?.title && <Title size="xl" value={item.title} />}
						{item?.lead && <Text size="large" value={item.lead} />}
						{item?.desc && <Text size="medium" value={item.desc} />}
					</div>

					<div className="case-teaser">
						{item?.excerpt && <Text value={item.excerpt} />}
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

				{item?.goals && (
					<div className="section-goals grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
						{item?.goals?.map((goal) => (
							<div className="goal" key={goal?.id}>
								{goal?.title && <Title value={goal?.title} />}
								{goal?.text && <Text value={goal?.text} />}
							</div>
						))}
					</div>
				)}
				{item?.insights && (
					<div className="section-insights grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
						{item?.insights?.map((insight) => (
							<div className="insight" key={insight?.id}>
								{insight?.title && (
									<Title value={insight?.title} />
								)}
								{insight?.text && (
									<Text value={insight?.text} />
								)}
							</div>
						))}
					</div>
				)}
				{item?.outcomes && (
					<div className="section-outcomesgrid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
						{item?.outcomes?.map((outcome) => (
							<div className="outcomes" key={outcome?.id}>
								{outcome?.title && (
									<Title value={outcome?.title} />
								)}
								{outcome?.text && (
									<Text value={outcome?.text} />
								)}
							</div>
						))}
					</div>
				)}

				{/*
				 */}

				{/* https://codesandbox.io/s/3d-react-store-oee0r fore scroll i block */}

				{/* https://www.npmjs.com/package/react-reveal */}
				{/* https://www.npmjs.com/package/react-animation-on-scroll */}

				{/* https://www.react-spring.dev/ */}
				{/* https://www.npmjs.com/package/react-is-visible */}
				{/* https://www.npmjs.com/package/react-compare-image */}
				{/* https://www.npmjs.com/package/react-animation-on-scroll */}
				{/* https://image-mapper.myshopify.com/ */}
				{/* https://medium.com/@luke.cooley/image-mapper-an-effective-way-to-promote-your-products-on-shopify-b7ec7db00fa0 */}
				{/* https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/?utm_source=linkedin&utm_medium=organic-social&utm_content=li_01_25_22_javascript_code_challenges */}

				{/* https://news.stanford.edu/2022/12/05/explains-recent-tech-layoffs-worried/ */}

				{/* https://media.monks.com/case-studies/climate-pledge */}

				{/* https://codepen.io/bramus/pen/PobmGme */}

				{/* https://blog.logrocket.com/guide-to-css-animations-using-clip-path/ */}

				{/* https://webdesign.tutsplus.com/tutorials/scrolling-animations-with-css-clip-path-property--cms-36449 */}

				{/* https://css-tricks.com/animating-with-clip-path/ */}

				{/* https://www.semplice.com/best-portfolios-of-2022 */}

				{item?.content?.map((section) => (
					<>
						{section?.animate ? (
							<AnimationOnScroll
								animateIn={
									section?.animateIn
										? section?.animateIn
										: 'animate__fadeIn'
								}
								animateOut={section?.animateOut}
								delay={section?.delay}
								duration={section?.duration}
								animateOnce={
									section?.animateOnce
										? section?.animateOnce
										: true
								}
							>
								<Section key={section?.id} section={section} />
							</AnimationOnScroll>
						) : (
							<Section key={section?.id} section={section} />
						)}
					</>
				))}
			</div>
		</div>
	);
};

const CaseSelector = ({
	descClassName,
	buttonReadMoreClassName,
	caseSelectorClassName,
	urlClassName,
	titleClassName,
	item,
	onSelect,
	dateClassName,
	roleClassName,
	clearActive,
	selectedChanged,
}) => {
	const [show, setShow] = useState(true);

	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
	const [showAccess, setShowAccess] = useState(null);
	const onOpen = useCallback(() => {
		if (item.protected) {
			setShowAccess(true);
		} else {
			onSelect(item);
		}
	}, [item, onSelect]);

	const onChange = (event) => {
		if (event.target.value === '123') {
			onSelect(item);
		}
	};

	return (
		<div
			className={classNames(
				`case-wrapper case-teaser gap-20 flex flex-col h-full overflow-y-auto justify-center`,
				`${item?.bg && 'bg-center bg-cover'}`
			)}
		>
			{showAccess && (
				<Access
					clearActive={clearActive}
					closeModal={closeModal}
					openModal={openModal}
					show={show}
					item={item}
					onChange={onChange}
				/>
			)}

			<div
				className={classNames(
					`case-selector section py-20 px-20 relative section-${item?.case}`,
					caseSelectorClassName
				)}
			>
				<p className="client-info">{item?.client}</p>
				<h1
					className={classNames(
						`case-title`,
						titleClassName
							? titleClassName
							: 'pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold'
					)}
				>
					{item?.title}
				</h1>

				<p
					className={classNames(
						`case-lead`,
						descClassName
							? descClassName
							: 'pt-0 mt-8 mb-16 text-1xl md:text-2xl text-left text-white font-normal'
					)}
				>
					{item?.lead}
				</p>

				<div className="container w-full">
					<div className="grid grid-cols-4 gap-4">
						<div className="actions col-span-2">
							<button
								onClick={() => onOpen(item)}
								className={classNames(
									`bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full items-center flex`,
									buttonReadMoreClassName
								)}
							>
								Read more{' '}
								{item?.protected && (
									<LockClosedIcon className="ml-2 h-4 w-4 text-white" />
								)}
							</button>
						</div>

						<div className="meta flex flex-col col-end-5 col-span-1">
							<p
								className={classNames(
									`pt-0 mt-0 mb-2 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light`,
									urlClassName
								)}
							>
								<a href={item?.url}>{item?.url}</a>
							</p>
							{item?.role && item?.date && (
								<ul>
									<li
										className={classNames(
											`flex flex-col md:flex-col py-0 mb-0`
										)}
									>
										{item?.role && (
											<p
												className={classNames(
													`pt-0 mb-0 ml-0 text-left dark:text-gray-500 text-black lg:font-light`,
													roleClassName
												)}
											>
												{item?.role}
											</p>
										)}
										{item?.date && (
											<p
												className={classNames(
													`pt-0 mb-0 md:ml-0 text-xs text-left md:text-left dark:text-gray-500 text-black lg:font-light`,
													dateClassName
												)}
											>
												{item?.date}
											</p>
										)}
									</li>
								</ul>
							)}
							<p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">
								{item?.location}
							</p>

							<TagsList
								tags={item?.tags}
								selectedChanged={selectedChanged}
							/>
						</div>
					</div>
				</div>

				<div
					className="case-background absolute z-n1 left-0 top-0 right-0 bottom-0 h-full w-full bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: item?.bg && `url(${item?.bg})` }}
				/>
			</div>
		</div>
	);
};

export default CaseSelector;
export { Case };

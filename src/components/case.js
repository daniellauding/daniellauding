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
import Soon from './soon';
import { NavCase } from './nav';

// import { useParams } from 'react-router-dom';

// how do i render client info like, role, date, name, its in parent of array?
// const ClientName = () => {
// 	return work.map((item, i) => <h3 key={i}>{item.client}</h3>);
// };

const Case = ({
	item,
	selectedChanged,
	work,
	clearActive,
	selectedCaseChanged,
}) => {
	// console.log(item);

	console.log(work);
	console.log(Array.isArray(work));

	// const { caseName } = useParams();
	// const [caseItem, setCaseItem] = useState(null);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	if (!work) {
	// 		console.error('Work data is not loaded');
	// 		return;
	// 	}

	// 	const foundCase = work.find(
	// 		(c) => c.case.toLowerCase() === caseName.toLowerCase()
	// 	);
	// 	if (!foundCase) {
	// 		console.error('No case found for:', caseName);
	// 		setLoading(false);
	// 		return;
	// 	}

	// 	setCaseItem(foundCase);
	// 	setLoading(false);
	// }, [caseName, work]);

	// if (loading) {
	// 	return <div>Loading case details...</div>;
	// }

	// if (!caseItem) {
	// 	return <div>Case not found</div>;
	// }

	if (item?.soon) {
		return (
			<>
				<Soon item={item} />
			</>
		);
	}

	return (
		<div
			className={classNames(
				'case',
				`case-${item?.case}`,
				`client-${work?.client.toLowerCase?.()}`,
				`theme-${item?.theme}`,
				`bg-case`,
				`bg-light`,
				`dark:bg-dark`
			)}
		>
			<NavCase
				item={work}
				clearActive={clearActive}
				selectedCase={item}
				selectedChanged={selectedChanged}
				selectedCaseChanged={selectedCaseChanged}
				workCase={item}
			/>
			<div
				className={classNames(
					'case-wrapper',
					'overflow-x-hidden',
					item?.layout ? item?.layout : 'vertical'
				)}
			>
				<div
					className={classNames(
						`section section-hero grid grid-flow-col auto-cols-fr relative py-20 px-20`,
						item?.hero?.class ||
							'h-screen justify-center items-center',
						`gap-${item?.hero?.gap || '16'}`,
						{
							[`grid-cols-${item?.hero?.columns}`]:
								item?.hero?.columns,
							[`grid-rows-${item?.hero?.rows}`]: item?.hero?.rows,
							[`gap-${item?.hero?.gap}`]: item?.hero?.gap,
							[`gap-y-${item?.hero?.gapY}`]: item?.hero?.gapY,
							[`gap-x-${item?.hero?.gapX}`]: item?.hero?.gapX,
						}
					)}
				>
					{/* <p className="client-info absolute left-8 top-8">
						{work?.client}
					</p> */}
					{/* {item?.title && (
						<Title
							size="xl"
							value={item?.title?.value}
							className={classNames(
								'case-title',
								item?.title?.class,
								{
									[`col-span-${item?.title?.columns}`]:
										item?.title?.columns,
									[`col-start-${item?.title?.colStart}`]:
										item?.title?.colStart,
									[`col-end-${item?.title?.colEnd}`]:
										item?.title?.colEnd,
									[`row-span-${item?.title?.rows}`]:
										item?.title?.rows,
									[`row-start-${item?.title?.rowStart}`]:
										item?.title?.rowStart,
									[`row-end-${item?.title?.rowEnd}`]:
										item?.title?.rowEnd,
								}
							)}
						/>
					)} */}
					{item?.hero && (
						<>
							<div
								className={classNames(
									'case-description grid grid-flow-col auto-cols-fr h-full relative z-10',
									`gap-${
										item?.hero?.description?.gap || '0'
									}`,
									item?.hero?.description?.title?.class,
									{
										[`grid-cols-${item?.hero.description?.columns}`]:
											item?.hero.description?.columns,
										[`col-start-${item?.hero?.description?.colStart}`]:
											item?.hero?.description?.colStart,
										[`col-end-${item?.hero?.description?.colEnd}`]:
											item?.hero?.description?.colEnd,
										[`row-span-${item?.hero?.description?.rows}`]:
											item?.hero?.description?.rows,
										[`row-start-${item?.hero?.description?.rowStart}`]:
											item?.hero?.description?.rowStart,
										[`row-end-${item?.hero?.description?.rowEnd}`]:
											item?.hero?.description?.rowEnd,
										[`gap-${item?.hero?.description?.gap}`]:
											item?.hero?.description?.gap,
										[`gap-y-${item?.hero?.description?.gapY}`]:
											item?.hero?.description?.gapY,
										[`gap-x-${item?.hero?.description?.gapX}`]:
											item?.hero?.description?.gapX,
									}
								)}
								style={{
									margin:
										item?.hero?.description?.margin || '0',
									padding:
										item?.hero?.description?.padding || '0',
								}}
							>
								{item?.hero?.description?.title?.value && (
									<Title
										size={
											item?.hero?.description?.size
												? item?.hero?.description?.size
												: 'xl'
										}
										value={
											item?.hero?.description?.title
												?.value
										}
										color={item?.hero?.description?.color}
										fill={item?.hero?.description?.fill}
										align={item?.hero?.description?.align}
										className={classNames(
											'hero-title',
											'case-title',
											item?.hero?.description?.className,
											item?.hero?.description?.title
												?.class,
											{
												[`col-span-${item?.hero?.description?.title?.columns}`]:
													item?.hero?.description
														?.title?.columns,
												[`col-start-${item?.hero?.description?.title?.colStart}`]:
													item?.hero?.description
														?.title?.colStart,
												[`col-end-${item?.hero?.description?.title?.colEnd}`]:
													item?.hero?.description
														?.title?.colEnd,
												[`row-span-${item?.hero?.description?.title?.rows}`]:
													item?.hero?.description
														?.title?.rows,
												[`row-start-${item?.hero?.description?.title?.rowStart}`]:
													item?.hero?.description
														?.title?.rowStart,
												[`row-end-${item?.hero?.description?.title?.rowEnd}`]:
													item?.hero?.description
														?.title?.rowEnd,
											}
										)}
										style={{
											margin:
												item?.hero?.description?.title
													?.margin || '0',
											padding:
												item?.hero?.description?.title
													?.padding || '0',
										}}
									/>
								)}
								{item?.hero?.description?.lead?.value && (
									<Text
										size={
											item?.hero?.description?.size
												? item?.hero?.description?.size
												: 'large'
										}
										value={
											item?.hero?.description?.lead?.value
										}
										color={
											item?.hero?.description?.lead?.color
										}
										fill={
											item?.hero?.description?.lead?.fill
										}
										align={
											item?.hero?.description?.lead?.align
										}
										className={classNames(
											'hero-lead',
											item?.hero?.description?.lead
												?.className,
											item?.hero?.description?.lead
												?.class,
											{
												[`col-span-${item?.hero?.description?.lead?.columns}`]:
													item?.hero?.description
														?.lead?.columns,
												[`col-start-${item?.hero?.description?.lead?.colStart}`]:
													item?.hero?.description
														?.lead?.colStart,
												[`col-end-${item?.hero?.description?.lead?.colEnd}`]:
													item?.hero?.description
														?.lead?.colEnd,
												[`row-span-${item?.hero?.description?.lead?.rows}`]:
													item?.hero?.description
														?.lead?.rows,
												[`row-start-${item?.hero?.description?.lead?.rowStart}`]:
													item?.hero?.description
														?.lead?.rowStart,
												[`row-end-${item?.hero?.description?.lead?.rowEnd}`]:
													item?.hero?.description
														?.lead?.rowEnd,
											}
										)}
										style={{
											margin:
												item?.hero?.description?.lead
													?.margin || '0',
											padding:
												item?.hero?.description?.lead
													?.padding || '0',
										}}
									/>
								)}

								{item?.hero?.description?.desc?.value && (
									<Text
										size={
											item?.hero?.description?.size
												? item?.hero?.description?.size
												: 'medium'
										}
										value={
											item?.hero?.description?.desc?.value
										}
										color={
											item?.hero?.description?.desc?.color
										}
										fill={
											item?.hero?.description?.desc?.fill
										}
										align={
											item?.hero?.description?.desc?.align
										}
										className={classNames(
											'hero-desc',
											item?.hero?.description?.desc
												?.className,
											item?.hero?.description?.desc
												?.class,
											{
												[`col-span-${item?.hero?.description?.desc?.columns}`]:
													item?.hero?.description
														?.desc?.columns,
												[`col-start-${item?.hero?.description?.desc?.colStart}`]:
													item?.hero?.description
														?.desc?.colStart,
												[`col-end-${item?.hero?.description?.desc?.colEnd}`]:
													item?.hero?.description
														?.desc?.colEnd,
												[`row-span-${item?.hero?.description?.desc?.rows}`]:
													item?.hero?.description
														?.desc?.rows,
												[`row-start-${item?.hero?.description?.desc?.rowStart}`]:
													item?.hero?.description
														?.desc?.rowStart,
												[`row-end-${item?.hero?.description?.desc?.rowEnd}`]:
													item?.hero?.description
														?.desc?.rowEnd,
											}
										)}
										style={{
											margin:
												item?.hero?.description?.desc
													?.margin || '0',
											padding:
												item?.hero?.description?.desc
													?.padding || '0',
										}}
									/>
								)}

								{/* {item?.excerpt && <Text value={item?.excerpt} />} */}
							</div>
							{item?.hero?.image?.src && (
								<div
									className={classNames(
										'hero-image',
										item?.hero?.image?.class,
										{
											[`col-span-${item?.hero?.image?.columns}`]:
												item?.hero?.image?.columns,
											[`col-start-${item?.hero?.image?.colStart}`]:
												item?.hero?.image?.colStart,
											[`col-end-${item?.hero?.image?.colEnd}`]:
												item?.hero?.image?.colEnd,
											[`row-span-${item?.hero?.image?.rows}`]:
												item?.hero?.image?.rows,
											[`row-start-${item?.hero?.image?.rowStart}`]:
												item?.hero?.image?.rowStart,
											[`row-end-${item?.hero?.image?.rowEnd}`]:
												item?.hero?.image?.rowEnd,
										}
									)}
									style={{
										margin:
											item?.hero?.image?.margin || '0',
										padding:
											item?.hero?.image?.padding || '0',
									}}
								>
									<Image item={item?.hero?.image} />
								</div>
							)}
						</>
					)}

					{/* <div
						className={classNames('case-header', item?.leadClass, {
							[`col-span-${item?.columns}`]: item?.columns,
							[`col-start-${item?.colStart}`]: item?.colStart,
							[`col-end-${item?.colEnd}`]: item?.colEnd,
							[`row-span-${item?.rows}`]: item?.rows,
							[`row-start-${item?.rowStart}`]: item?.rowStart,
							[`row-end-${item?.rowEnd}`]: item?.rowEnd,
						})}
					>
						{item?.title && <Title size="xl" value={item?.title} />}
						{item?.lead && <Text size="large" value={item?.lead} />}
						{item?.desc && (
							<Text size="medium" value={item?.desc} />
						)}
					</div> */}

					{item?.library && <Library item={item?.library} />}

					{/* <div className="case-teaser">
						{item?.excerpt && <Text value={item?.excerpt} />}
						{item?.image && (
							<div
								className={classNames('case-image', {
									[`col-span-${item?.columns}`]:
										item?.columns,
									[`col-start-${item?.colStart}`]:
										item?.colStart,
									[`col-end-${item?.colEnd}`]: item?.colEnd,
									[`row-span-${item?.rows}`]: item?.rows,
									[`row-start-${item?.rowStart}`]:
										item?.rowStart,
									[`row-end-${item?.rowEnd}`]: item?.rowEnd,
								})}
							>
								<Image
									imgClass={item?.imgClass}
									item={item?.image}
								/>
							</div>
						)}
					</div> */}

					<div className="case-tags case-tags inline-block transform -rotate-90 absolute right-3 top-1/2">
						<TagsList
							tags={item?.tags}
							selectedChanged={selectedChanged}
						/>
					</div>
					{/*
          <div
						className={`case-tags ${
							item?.tags?.default
								? ''
								: 'inline-block transform -rotate-90'
						} absolute right-3 top-1/2`}
					>
						<TagsList
							tags={item?.tags}
							selectedChanged={selectedChanged}
						/>
					</div> */}
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
							<>
								<Section key={section?.id} section={section} />
							</>
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
	work,
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
				`case-wrapper case-teaser gap-20 flex flex-col h-full overflow-hidden justify-center flex-shrink-0 w-full md:w-full lg:w-full xl:w-full ml-[-20px] hover:scale-110 transition-transform`,
				`${item?.background?.image && 'bg-center bg-cover'}`,
				`client-${work?.client?.toLowerCase?.()}`
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
									`pt-0 mt-0 mb-2 ml-0 text-left text-xs text-text lg:font-light`,
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
													`pt-0 mb-0 ml-0 text-left text-text lg:font-light`,
													roleClassName
												)}
											>
												{item?.role}
											</p>
										)}
										{item?.date && (
											<p
												className={classNames(
													`pt-0 mb-0 md:ml-0 text-xs text-left md:text-left text-text lg:font-light`,
													dateClassName
												)}
											>
												{item?.date}
											</p>
										)}
									</li>
								</ul>
							)}
							<p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs text-text lg:font-light">
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
					style={{
						backgroundImage:
							item?.background?.image &&
							`url(${item?.background?.image})`,
					}}
				/>
			</div>
		</div>
	);
};

export default CaseSelector;
export { Case };

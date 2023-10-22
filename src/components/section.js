import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import Groups from './groups';
import Text, { Title } from './typography';
import Image from './image';
import TabbedContent from './tab';
import AccordionContent from './accordionNew';

// const Section = ({
//   style,
//   content,
//   columns,
//   rows,
//   gap,
//   gapY,
//   gapX,
//   flowRows,
//   flowColumns,
//   autoFlow
// }) => {
//   return (
//     <div className={classNames(`section`, style ? `${style}` : style)}>
//       <div
//         className={classNames(
//           `container mx-auto grid`,
//           columns ? `grid-cols-${columns}` : columns,
//           rows ? `grid-rows-${rows}` : rows,
//           flowRows ? flowRows : flowRows,
//           flowColumns ? flowColumns : flowColumns,
//           autoFlow ? autoFlow : autoFlow,
//           gap ? `gap-${gap}` : gap,
//           gapY ? `gap-y-${gapY}` : gapY,
//           gapX ? `gap-x-${gapX}` : gapX
//         )}>
//         {content?.map((item, index) => (
//           <div
//             key={index}
//             className={classNames(
//               `item`,
//               item.columns ? `col-span-${item.columns}` : item.columns,
//               item.colStart ? `col-start-${item.colStart}` : item.colStart,
//               item.colEnd ? `col-end-${item.colEnd}` : item.colEnd,
//               item.rows ? `row-span-${item.rows}` : item.rows,
//               item.rowStart ? `row-start-${item.rowStart}` : item.rowStart,
//               item.rowEnd ? `row-end-${item.rowEnd}` : item.rowEnd,
//               item.style ? `${item.style}` : item.style
//             )}>
//             <h3 className="pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold">
//               {item.title}
//             </h3>
//             <p className="pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin">
//               {item.text}
//             </p>
//             {/* {item.cover} */}
//             {console.log(item)}

//             <h3 className={classNames(`title`, item.style ? `${item.style}` : item.style)}>
//               {item.value}
//             </h3>

//             {item.title ? item.value : item.value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Section = ({ section }) => {
	if (!section) {
		// Handle the case where section is undefined or null
		return null; // or any other appropriate fallback
	}

	if (section?.variant === 'scrollVertically') {
		const contentRef = useRef(null);
		const [startY, setStartY] = useState(0);

		useEffect(() => {
			const handleScroll = (e) => {
				const element = contentRef.current;
				const scrollAmount = e.deltaY;
				const transformValue =
					element.style.transform || `translateY(${startY}px)`;
				const currentY = parseFloat(transformValue.match(/-?\d+/));
				let newY = currentY - scrollAmount;

				// Add a threshold for the maximum panning (adjust as needed)
				const maxPanning = 100;
				if (newY < -maxPanning) {
					newY = -maxPanning;
				} else if (newY > maxPanning) {
					newY = maxPanning;
				}

				element.style.transform = `translateY(${newY}px)`;

				// Update the start position to the new Y position
				setStartY(newY);
			};

			contentRef.current.addEventListener('wheel', handleScroll, {
				passive: false,
			});

			// Clean up the event listener when the component unmounts
			return () => {
				contentRef.current.removeEventListener('wheel', handleScroll);
			};
		}, []);

		return (
			<div
				className={classNames(
					`py-16 section section-${section.section}`,
					{
						[`variant-${section.variant}`]: section.variant,
						'justify-start': section?.align?.vertical === 'top',
						'justify-center': section?.align?.vertical === 'center',
						'justify-end': section?.align?.vertical === 'bottom',
						'content-start': section?.align?.horizontal === 'left',
						'content-center':
							section?.align?.horizontal === 'center',
						'content-end': section?.align?.horizontal === 'right',
					},
					section?.class?.trim()
				)}
				style={{
					backgroundImage:
						section?.background?.image &&
						`url(${section?.background?.image})`,
					backgroundColor: section?.background?.color,
				}}
				id={section?.anchor}
			>
				<div
					className={classNames(
						`mx-auto`,
						section?.container?.width === 'full'
							? 'container-full'
							: 'container',
						{
							'justify-start':
								section?.container?.align?.vertical === 'top',
							'justify-center':
								section?.container?.align?.vertical ===
								'center',
							'justify-end':
								section?.container?.align?.vertical ===
								'bottom',
							'content-start':
								section?.container?.align?.horizontal ===
								'left',
							'content-center':
								section?.container?.align?.horizontal ===
								'center',
							'content-end':
								section?.container?.align?.horizontal ===
								'right',
							flex:
								section?.container?.align?.vertical ||
								section?.container?.align?.horizontal,
						}
					)}
				>
					<div
						ref={contentRef}
						className={classNames(
							`item w-full flex justify-center items-center flex-col`,
							{
								style: section.style,
							}
						)}
					>
						{section?.title && <Title value={section?.title} />}
						{section?.lead && <Text value={section?.lead} />}
						{section?.text && <Text value={section?.text} />}
						{section?.desc && <Text value={section?.desc} />}
						{section?.image && (
							<>
								<Image
									variant={section?.image?.variant}
									color={section?.image?.color}
									format={section?.image?.format}
									width={section?.image?.width}
									height={section?.image?.height}
									text={section?.image?.text}
									textColor={section?.image?.textColor}
									src={section?.image?.src}
									item={section?.image}
									images={section?.image?.images}
									imgClass="max-w-fit"
								/>
							</>
						)}

						<Groups section={section} />
					</div>
				</div>
			</div>
		);
	}

	if (section?.variant === 'scrollHorizontally') {
		const contentRef = useRef(null);
		const [startX, setStartX] = useState(0);

		useEffect(() => {
			const handleScroll = (e) => {
				const element = contentRef.current;
				const scrollAmount = e.deltaY;
				const transformValue =
					element.style.transform || `translateX(${startX}px)`;
				const currentX = parseFloat(transformValue.match(/-?\d+/));
				let newX = currentX - scrollAmount;

				// Add a threshold for the maximum panning (adjust as needed)
				const maxPanning = 100;
				if (newX < -maxPanning) {
					newX = -maxPanning;
				} else if (newX > maxPanning) {
					newX = maxPanning;
				}

				element.style.transform = `translateX(${newX}px)`;

				// Update the start position to the new X position
				setStartX(newX);
			};

			contentRef.current.addEventListener('wheel', handleScroll, {
				passive: false,
			});

			// Clean up the event listener when the component unmounts
			return () => {
				contentRef.current.removeEventListener('wheel', handleScroll);
			};
		}, []);

		return (
			<div
				className={classNames(
					`py-16 section section-${section.section}`,
					{
						[`variant-${section.variant}`]: section.variant,
						'justify-start': section?.align?.horizontal === 'left',
						'justify-center':
							section?.align?.horizontal === 'center',
						'justify-end': section?.align?.horizontal === 'right',
						'content-start': section?.align?.vertical === 'top',
						'content-center': section?.align?.vertical === 'center',
						'content-end': section?.align?.vertical === 'bottom',
					},
					section?.class?.trim()
				)}
				style={{
					backgroundImage:
						section?.background?.image &&
						`url(${section?.background?.image})`,
					backgroundColor: section?.background?.color,
				}}
				id={section?.anchor}
			>
				<div
					className={classNames(
						`mx-auto`,
						section?.container?.width === 'full'
							? 'container-full'
							: 'container',
						{
							'justify-start':
								section?.container?.align?.horizontal ===
								'left',
							'justify-center':
								section?.container?.align?.horizontal ===
								'center',
							'justify-end':
								section?.container?.align?.horizontal ===
								'right',
							'content-start':
								section?.container?.align?.vertical === 'top',
							'content-center':
								section?.container?.align?.vertical ===
								'center',
							'content-end':
								section?.container?.align?.vertical ===
								'bottom',
							flex:
								section?.container?.align?.horizontal ||
								section?.container?.align?.vertical,
						}
					)}
				>
					<div
						ref={contentRef}
						className={classNames(
							`item w-full flex justify-center items-center flex-col`,
							{
								style: section.style,
							}
						)}
					>
						{section?.title && <Title value={section?.title} />}
						{section?.lead && <Text value={section?.lead} />}
						{section?.text && <Text value={section?.text} />}
						{section?.desc && <Text value={section?.desc} />}
						{section?.image && (
							<>
								<Image
									variant={section?.image?.variant}
									color={section?.image?.color}
									format={section?.image?.format}
									width={section?.image?.width}
									height={section?.image?.height}
									text={section?.image?.text}
									textColor={section?.image?.textColor}
									src={section?.image?.src}
									item={section?.image}
									images={section?.image?.images}
									imgClass="max-w-fit"
								/>
							</>
						)}

						<Groups section={section} />
					</div>
				</div>
			</div>
		);
	}

	if (section?.variant === 'full') {
		return (
			<div
				className={classNames(
					`py-16 section variant-full h-screen w-screen overflow-hidden flex items-center justify-start`,
					{
						'bg-center bg-cover': section?.background?.image,
						'justify-start': section?.align?.horizontal === 'left',
						'justify-center':
							section?.align?.horizontal === 'center',
						'justify-end': section?.align?.horizontal === 'right',
						'items-start': section?.align?.vertical === 'top',
						'items-center': section?.align?.vertical === 'center',
						'items-end': section?.align?.vertical === 'bottom',
					},
					section?.class?.trim()
				)}
				id={section?.anchor}
				style={{
					backgroundImage:
						section?.background?.image &&
						`url(${section?.background?.image})`,
					backgroundColor: section?.background?.color,
				}}
			>
				<div
					className={classNames(
						`mx-auto container-full w-full h-full`,
						{
							'justify-start':
								section?.container?.align?.horizontal ===
								'left',
							'justify-center':
								section?.container?.align?.horizontal ===
								'center',
							'justify-end':
								section?.container?.align?.horizontal ===
								'right',
							'content-start':
								section?.container?.align?.vertical === 'top',
							'content-center':
								section?.container?.align?.vertical ===
								'center',
							'content-end':
								section?.container?.align?.vertical ===
								'bottom',
						}
					)}
				>
					{section?.title && <Title value={section?.title} />}
					{section?.lead && <Text value={section?.lead} />}
					{section?.text && <Text value={section?.text} />}
					{section?.desc && <Text value={section?.desc} />}
					{section?.image && (
						<>
							<Image
								variant={section?.image?.variant}
								color={section?.image?.color}
								format={section?.image?.format}
								width={section?.image?.width}
								height={section?.image?.height}
								text={section?.image?.text}
								textColor={section?.image?.textColor}
								src={section?.image?.src}
								item={section?.image}
								images={section?.image?.images}
							/>
						</>
					)}

					<Groups section={section} />
				</div>
			</div>
		);
	}

	if (section?.variant === 'description') {
		return (
			<div
				className={classNames(
					`py-16 section section-${section.section}`,
					{
						[`variant-${section.variant}`]: section.variant,
						[`${section.className}`]: section.className,
						'bg-center bg-cover': section?.background,
					}
				)}
				style={{
					backgroundImage:
						section?.background?.image &&
						`url(${section?.background?.image})`,
					backgroundColor: section?.background?.color,
				}}
				id={section?.name}
			>
				<div
					className={classNames(
						`mx-auto`,
						section?.container
							? section?.container?.trim()
							: 'container'
					)}
				>
					{section?.style === 'hero' && (
						<div
							className={classNames(
								`style`,
								`grid grid-flow-col gap-16 auto-cols-fr items-start justify-items-center`,
								`style-${section.style}`
							)}
						>
							<div className="col">
								{section?.title && (
									<Title
										size="large"
										value={section?.title}
									/>
								)}
								{section?.lead && (
									<Text size="medium" value={section?.lead} />
								)}
								{section?.text && (
									<Text size="small" value={section?.text} />
								)}
							</div>

							<div className="col">
								{section?.lead && (
									<Text value={section?.lead} />
								)}
								{section?.text && (
									<Text value={section?.text} />
								)}
								{section?.desc && (
									<Text value={section?.desc} />
								)}
							</div>
						</div>
					)}
					{!section?.style && (
						<div
							className={classNames(
								`style-default grid grid-cols-3 gap-4`
							)}
						>
							{section?.title && (
								<div className="description-title">
									<Title value={section?.title} />
								</div>
							)}
							{(section?.lead ||
								section?.text ||
								section?.desc) && (
								<div className="description-text col-span-2">
									{section?.lead && (
										<Text
											size="large"
											value={section?.lead}
										/>
									)}
									{section?.text && (
										<Text
											size="medium"
											value={section?.text}
										/>
									)}
									{section?.desc && (
										<Text
											size="medium"
											value={section?.desc}
										/>
									)}
								</div>
							)}
						</div>
					)}

					{section?.image && (
						<Image
							variant={section?.image?.variant}
							color={section?.image?.color}
							format={section?.image?.format}
							width={section?.image?.width}
							height={section?.image?.height}
							text={section?.image?.text}
							textColor={section?.image?.textColor}
							src={section?.src}
							item={section?.image}
							images={section?.image?.images}
						/>
					)}

					<Groups section={section} />
				</div>
			</div>
		);
	}

	return (
		<div
			className={classNames(
				`py-16 section section-${section.section}`,
				{
					[`variant-${section.variant}`]: section.variant,
					[`${section.className}`]: section.className,
					'bg-center bg-cover': section?.background?.image,
					'justify-start': section?.align?.horizontal === 'left',
					'justify-center': section?.align?.horizontal === 'center',
					'justify-end': section?.align?.horizontal === 'right',
					'content-start': section?.align?.vertical === 'top',
					'content-center': section?.align?.vertical === 'center',
					'content-end': section?.align?.vertical === 'bottom',
				},
				section?.class?.trim(),
				section?.align?.horizontal.trim(),
				section?.align?.vertial.trim()
			)}
			style={{
				backgroundImage:
					section?.background?.image &&
					`url(${section?.background?.image})`,
				backgroundColor: section?.background?.color,
			}}
			// id={section?.name}
			id={section?.anchor}
		>
			<div
				className={classNames(
					`mx-auto`,
					section?.container
						? section?.container?.trim()
						: 'container'
				)}
			>
				{/* clean up below, how to make it less "hard structure" */}
				{section?.tabs && <TabbedContent tabs={section.tabs} />}
				{section?.accordion && (
					<AccordionContent tabs={section.accordion} />
				)}
				{section?.style === 'hero' && (
					<div
						className={classNames(
							`style`,
							`grid grid-flow-col gap-16 auto-cols-fr items-start justify-items-center`,
							`style-${section.style}`
						)}
					>
						<div className="col">
							{section?.title && (
								<Title size="large" value={section?.title} />
							)}
							{section?.lead && (
								<Text size="medium" value={section?.lead} />
							)}
							{section?.text && (
								<Text size="small" value={section?.text} />
							)}
						</div>

						<div className="col">
							{section?.lead && <Text value={section?.lead} />}
							{section?.text && <Text value={section?.text} />}
							{section?.desc && <Text value={section?.desc} />}
						</div>
					</div>
				)}
				{!section?.style && (
					<div className={classNames(`style-default`)}>
						{section?.title && <Title value={section?.title} />}
						{section?.lead && (
							<Text size="large" value={section?.lead} />
						)}
						{section?.text && (
							<Text size="medium" value={section?.lead} />
						)}
						{section?.desc && (
							<Text size="medium" value={section?.desc} />
						)}
					</div>
				)}

				{section?.image && (
					<Image
						variant={section?.image?.variant}
						color={section?.image?.color}
						format={section?.image?.format}
						width={section?.image?.width}
						height={section?.image?.height}
						text={section?.image?.text}
						textColor={section?.image?.textColor}
						src={section?.src}
						item={section?.image}
						images={section?.image?.images}
					/>
				)}

				<Groups section={section} />
			</div>
		</div>
	);
};

export default Section;

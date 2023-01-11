import React from 'react';
import classNames from 'classnames';

const Section = ({
	style,
	content,
	columns,
	rows,
	gap,
	gapY,
	gapX,
	flowRows,
	flowColumns,
	autoFlow,
}) => {
	return (
		<div className={classNames(`section`, style ? `${style}` : style)}>
			<div
				className={classNames(
					`container mx-auto grid`,
					columns ? `grid-cols-${columns}` : columns,
					rows ? `grid-rows-${rows}` : rows,
					flowRows ? flowRows : flowRows,
					flowColumns ? flowColumns : flowColumns,
					autoFlow ? autoFlow : autoFlow,
					gap ? `gap-${gap}` : gap,
					gapY ? `gap-y-${gapY}` : gapY,
					gapX ? `gap-x-${gapX}` : gapX,
				)}>
				{content?.map((item, index) => (
					<div
						key={index}
						className={classNames(
							`item`,
							item.columns ? `col-span-${item.columns}` : item.columns,
							item.colStart ? `col-start-${item.colStart}` : item.colStart,
							item.colEnd ? `col-end-${item.colEnd}` : item.colEnd,
							item.rows ? `row-span-${item.rows}` : item.rows,
							item.rowStart ? `row-start-${item.rowStart}` : item.rowStart,
							item.rowEnd ? `row-end-${item.rowEnd}` : item.rowEnd,
							item.style ? `${item.style}` : item.style,
						)}>
						<h3 className="pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold">
							{item.title}
						</h3>
						<p className="pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin">
							{item.text}
						</p>
						{/* {item.cover} */}
						{console.log(item)}

						<h3
							className={classNames(
								`title`,
								item.style ? `${item.style}` : item.style,
							)}>
							{item.value}
						</h3>

						{item.title ? item.value : item.value}
					</div>
				))}
			</div>
		</div>
	);
};

export default Section;

import React, { useState } from 'react';
import classNames from 'classnames';

const Grid = ({content, columns, rows, gap, gapY, gapX, flowRows, flowColumns, autoFlow}) => {
    return (
        <div
            className={classNames(
                `grid-container grid`,
                columns ? `grid-cols-${columns}` : columns,
                rows ? `grid-rows-${rows}` : rows,
                flowRows ? flowRows : flowRows,
                flowColumns ? flowColumns : flowColumns,
                autoFlow ? autoFlow : autoFlow,
                gap ? `gap-${gap}` : gap,
                gapY ? `gap-y-${gapY}` : gapY,
                gapX ? `gap-x-${gapX}` : gapX,
            )}
        >
            {content?.map((item, index) => (
                <div
                    key={index}
                    className={classNames(
                        `grid-item`,
                        item.columns ? `col-span-${item.columns}` : item.columns,
                        item.rows ? `row-span-${item.rows}` : item.rows,
                    )}
                >
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )

};

export default Grid;
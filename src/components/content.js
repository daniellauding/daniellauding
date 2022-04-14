import React, { useState } from 'react';
import classNames from 'classnames';
import Slider from './slider';
import Accordion from './accordion';
import Text, {Title} from './typography';
import Image from './image';
import Grid from './grid';

const Component = ({type, value, size, title, accordionItem, slides, content, columns, rows, flowRows, flowColumns, autoFlow, gap, gapX, gapY}) => {
    if (type === 'text') {
        return <Text value={value} size={size} />
    }
    if (type === 'title') {
        return <Title value={value} size={size} />
    }
    if (type === 'img') {
        return <Image value={value} />
    }
    if (type === 'slider') {
        return <Slider slides={slides} />
    }
    if (type === 'accordion') {
        return <Accordion accordionItem={accordionItem} title={title} />
    }
    if (type === 'grid') {
        return <Grid content={content} columns={columns} rows={rows} flowRows={flowRows} flowColumns={flowColumns} autoFlow={autoFlow} gap={gap} gapY={gapY} gapX={gapX} />
    }
    return null;
}

const Content = ({item, clearActive}) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="section">
            <button onClick={clearActive} className="pt-0 mb-0 mt-16 text-center dark:text-gray-500 text-black text-sm lg:font-light">← Back</button>
            <h1 className="pt-0 mt-8 mb-2 text-4xl md:text-5xl text-left text-primary font-bold">{item.client}</h1>
            <p className="pt-0 mt-0 mb-2 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light"><a href={item.url}>{item.url}</a></p>
            <ul>
                <li
                    className={classNames(
                        `flex flex-col md:flex-row py-0 mb-0`
                    )}
                >
                    <p className="pt-0 mb-0 ml-0 text-left dark:text-gray-500 text-black lg:font-light">{item.role}</p>
                    <p className="pt-0 mb-0 md:ml-auto text-xs text-left md:text-right dark:text-gray-500 text-black lg:font-light">{item.date}</p>
                </li>
            </ul>
            <p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">{item.location}</p>

            {item.tags ? (
                <ul className="flex-wrap flex md:flex-row w-auto py-0 mb-8 gap-2">
                    {item.tags.map((tag, index) => (
                        <li
                            key={index}
                            className="px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100"
                        >
                            <p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
                                {tag}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : null}

            {value !== '123' ? (
                <p className="pt-0 mb-8 mt-0 text-left dark:text-gray-300 text-black lg:font-light text-3xl leading-snug font-serif">{item.desc}</p>
            ): null}
            {item.protected ? (
                <>
                    {/* <p>You need permission to access this case.</p> */}
                    <div className="col-span-1 row-span-3">
                        <img src={item.hero} className="logo mx-auto" alt="logo" />
                    </div>
                    {value === '123' ? (
                        <div
                            className={classNames("section", item.layout ? item.layout : 'vertical')}
                        >
                            {item?.content?.map((row, index) => (

                                    <Component key={index} {...row} />
                            ))
                        }
                        </div>
                        // ) : (
                        //     `${value}`
                        // )
                        ): (
                            <input
                                className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full"
                                placeholder="Enter passcode to access this case"
                                value={value}
                                onChange={onChange}
                            />
                        )
                    }
                </>
            ) : (
                <div>
                    {item?.content?.map((row, index) => <Component key={index} {...row} />)}
                </div>
            )
            }
        </div>
    );
}

export default Content;
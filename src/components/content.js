import React, { useState } from 'react';
import classNames from 'classnames';

const Component = ({type, value, size, title, accordionItem}) => {
    if (type === 'h1') {
        return <h1 className="pt-0 mt-8 mb-16 text-3xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h1>
    }
    if (type === 'h2') {
        return <h2 className="pt-0 mt-8 mb-16 text-2xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h2>
    }
    if (type === 'h3') {
        return <h3 className="pt-0 mt-8 mb-8 text-1xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h3>
    }
    if (type === 'p') {
        return <p className={classNames(
            `pt-0 mb-8 text-left text-1xl md:text-2xl dark:text-gray-300 text-black lg:font-light`,
            size === 'large' ? 'text-2xl md:text-3xl' : size,
            size === 'medium' ? 'text-1xl md:text-2xl' : size,
            size === 'small' ? 'text-sm' : size
        )}>{value}</p>
    }
    if (type === 'img') {
        return <img className="mt-4 mb-4" src={value} alt="" />
    }
    if (type === 'accordion') {
        return (
            <div>
                <p>{title}</p>
                {accordionItem.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(
                            ``,
                            item.active ? 'active' : item.active
                        )}
                    >
                        <div>
                        <h3
                            className="pt-0 mt-8 mb-0 text-2xl text-center dark:text-white text-black lg:font-bold"
                        >
                            {item.title}
                        </h3>
                        </div>
                        <div
                            className={classNames(
                                ``,
                                item.active ? 'visible' : 'hidden'
                            )}
                        >
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return null;
}

const Content = ({item, clearActive}) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
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
                        <div>
                            {item?.content?.map((row, index) => <Component key={index} {...row} />)}
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
        </>
    );
}

export default Content;
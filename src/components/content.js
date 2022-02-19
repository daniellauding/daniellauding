import React, { useState } from 'react';
import classNames from 'classnames';

const Component = ({type, value}) => {
    if (type === 'h1') {
        return <h1 className="pt-0 mt-8 mb-16 text-3xl text-left text-black lg:font-bold">{value}</h1>
    }
    if (type === 'h2') {
        return <h2 className="pt-0 mt-8 mb-16 text-2xl text-left text-black lg:font-bold">{value}</h2>
    }
    if (type === 'h3') {
        return <h3 className="pt-0 mt-8 mb-8 text-1xl text-left text-black lg:font-bold">{value}</h3>
    }
    if (type === 'p') {
        return <p className="pt-0 mb-8 text-left text-black lg:font-light">{value}</p>
    }
    if (type === 'img') {
        return <img className="mt-4 mb-4" src={value} alt="" />
    }
    return null;
}

const Content = ({item, clearActive}) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="overflow-y-scroll h-100 py-8 px-16">
            <button onClick={clearActive} className="pt-0 mb-0 mt-16 text-center text-black text-sm lg:font-light">← Back</button>
            <h1 className="pt-0 mt-8 mb-0 text-3xl text-left text-black lg:font-bold">{item.client}</h1>
            <p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs text-black lg:font-light"><a href={item.url}>{item.url}</a> – {item.location}</p>
            <ul>
                <li
                    className={classNames(
                        `flex flex-row py-0 mb-8`
                    )}
                >
                    <p className="pt-0 mb-0 ml-0 text-left text-black lg:font-light">{item.role}</p>
                    <p className="pt-0 mb-0 ml-auto text-xs text-right text-black lg:font-light">{item.date}</p>
                </li>
            </ul>
            <p className="pt-0 mb-8 mt-0 text-left text-black lg:font-light text-3xl leading-snug font-serif">{item.desc}</p>
            {item.protected ? (
                <>
                    {/* <p>You need permission to access this case.</p> */}
                    <input
                        className="border-b border-b-2 border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full"
                        placeholder="Enter passcode to access this case"
                        value={value}
                        onChange={onChange}
                    />

                    {value === '123' ? (
                        <div>
                            {item?.content?.map((row, index) => <Component key={index} {...row} />)}
                        </div>
                        // ) : (
                        //     `${value}`
                        // )
                        ): null
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
import React from 'react';
import classNames from 'classnames';

const Text = ({size, value}) => {
        return (
            <p className={classNames(
                `pt-0 mb-8 text-left text-1xl md:text-2xl dark:text-gray-300 text-black lg:font-light`,
                size === 'large' ? 'text-2xl md:text-3xl' : size,
                size === 'medium' ? 'text-1xl md:text-2xl' : size,
                size === 'small' ? 'text-sm' : size
            )}>
                {value}
            </p>
        )

};

const Title = ({size, value}) => {

    if (size === 'large') {
        return <h1 className="pt-0 mt-8 mb-16 text-3xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h1>
    }
    if (size === 'medium') {
        return <h2 className="pt-0 mt-8 mb-16 text-2xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h2>
    }
    if (size === 'small') {
        return <h3 className="pt-0 mt-8 mb-8 text-1xl text-left dark:text-gray-200 text-black lg:font-bold">{value}</h3>
    }
    return null;

};

export default Text;

export { Title };
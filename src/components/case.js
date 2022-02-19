import React, {useCallback} from 'react';
import classNames from 'classnames';

const Case = ({item, active, setActive, onHover}) => {
    const onClick = useCallback((e) => {
        e.preventDefault();
        setActive(item);
    }, [item, setActive]);

    const setPreview = useCallback((e) => {
        e.stopPropagation();
        onHover(item);
    }, [item, onHover]);

    const clearPreview = useCallback((e) => {
        e.stopPropagation();
        onHover(null);
    }, [onHover]);

    return (
        <li
            key={item.id}
            className={classNames(
                `grid grid-cols-3 md:flex md:flex-row py-4`,
                active ? 'bg-gray-100 text-gray-900' : 'block px-4 py-2 text-sm text-gray-700'
            )}
            onClick={onClick}
            onMouseEnter={setPreview}
            onMouseLeave={clearPreview}
        >
            <p className={classNames(
                `col-span-3 pt-0 mb-0 text-left text-primary md:text-black text-2xl md:text-base md:font-medium sm:w-24 md:w-40`,
            )}>
                <a href={item.url} onClick={onClick}>{item.client}</a>
            </p>
            <p className="col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-center text-black lg:font-light">
                {item.role}
            </p>
            <p className="col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-center text-black lg:font-light">
                {item.date}
            </p>
            {/* <p className="pt-0 mb-0 fontregular text-center text-black lg:font-light">Add description here, problems, market, why, achivements</p> */}
        </li>
    );
}

export default Case;
import React, {useCallback} from 'react';
// import classNames from 'classnames';

const Case = ({item, active, setActive}) => {
    const onClick = useCallback((e) => {
        e.preventDefault();
        setActive(item.id);
    }, [item, setActive]);
    return (
        <li key={item.id} className="flex flex-row py-4">
            <p className="pt-0 mb-0 text-left text-black lg:font-medium w-40">
            <a href={item.url} onClick={onClick}>{item.client}</a>
            </p>
            <p className="pt-0 mb-0 ml-8 text-center text-black lg:font-light">{item.role}</p>
            <p className="pt-0 mb-0 ml-auto  text-center text-black lg:font-light">{item.date}</p>
            {/* <p className="pt-0 mb-0 fontregular text-center text-black lg:font-light">Add description here, problems, market, why, achivements</p> */}
        </li>
    );
}

export default Case;
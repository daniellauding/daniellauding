import React from 'react';
import classNames from 'classnames';

const Accordion = ({accordionItem, title}) => {

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

};

export default Accordion;
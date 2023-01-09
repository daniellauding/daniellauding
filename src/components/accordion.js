import React, { useState } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
const Accordion = ({accordionItem, title}) => {
    const [activeAccordion = 0, setActiveAccordion] = useState(0);
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
                        <button
                                type="button"
                                role="tab"
                                tabIndex="0"
                                onClick={() => setActiveAccordion(index)}
                            >
                            <h3
                                className="pt-0 mt-8 mb-0 text-2xl text-center dark:text-white text-black lg:font-bold"
                            >
                                {item.title}
                            </h3>
                        </button>
                    </div>
                    <div
                        className={classNames(
                            'accordion-item',
                            `accordion-item-${index}`,
                            {
                                'accordion-item-active': activeAccordion === index,
                                'visible': activeAccordion === index,
                                'hidden': activeAccordion !== index,
                                // kan inte få hidden att försvinna om jag har satt flera active
                                //'visible': item.active == item.active,
                            },
                        )}
                    >
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Accordion;
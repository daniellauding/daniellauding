import React, { useState } from 'react';
import classNames from 'classnames';

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
                    <h3
                        className="pt-0 mt-8 mb-0 text-2xl text-center dark:text-white text-black lg:font-bold"
                        onClick={() => setActiveAccordion(index)}
                    >
                        {item.title}
                    </h3>
                    </div>
                    <div
                        className={classNames(
                            'accordion-item',
                            `accordion-item-${index}`,
                            {
                                'accordion-item-active': activeAccordion === index,
                                'visible': activeAccordion === index,
                                'hidden': activeAccordion !== index,
                            },
                            item.active ? 'visible' : item.active
                        )}
                    >
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Accordion;
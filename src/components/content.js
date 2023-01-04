import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames';
import Slider from './slider';
import Accordion from './accordion';
import Text, {Title} from './typography';
import Image from './image';
import Grid from './grid';

const Component = ({type, value, size, title, accordionItem, slides, content, columns, colEnd, colStart, rowStart, rowEnd, rows, flowRows, flowColumns, autoFlow, gap, gapX, gapY}) => {
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
        return <Grid content={content} columns={columns} colEnd={colEnd} colStart={colStart} rowStart={rowStart} rowEnd={rowEnd} rows={rows} flowRows={flowRows} flowColumns={flowColumns} autoFlow={autoFlow} gap={gap} gapY={gapY} gapX={gapX} />
    }
    return null;
}

const Content = ({item, clearActive}) => {

    const [value, setValue] = useState("");
	const [toggle, setToggle] = useState(false);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div
            className={classNames(`section section-${item.client.toLowerCase()}`
        )}>
            <button onClick={clearActive} className="pt-0 mb-0 mt-16 text-center dark:text-gray-500 text-black text-sm lg:font-light">← Back</button>
            <h3 className="pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold">{item.client}</h3>

			<h1 className="pt-0 mt-8 mb-16 text-4xl md:text-9xl text-left text-white font-bold">{item.title}</h1>

			<div class="container mx-auto">

				<div className="grid grid-cols-4 gap-4">

					<div className="desc col-span-2">
						<p className="pt-0 mt-8 mb-16 text-4xl md:text-4xl text-left text-gray-400 font-thin">{item.desc}</p>
						<button onClick={() => setToggle(!toggle)} class="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full">
							Read more
						</button>
					</div>
					
					<div className="meta flex flex-col col-end-5 col-span-1">
						<p className="pt-0 mt-0 mb-2 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light"><a href={item.url}>{item.url}</a></p>
						<ul>
							<li
								className={classNames(
									`flex flex-col md:flex-col py-0 mb-0`
								)}
							>
								<p className="pt-0 mb-0 ml-0 text-left dark:text-gray-500 text-black lg:font-light">{item.role}</p>
								<p className="pt-0 mb-0 md:ml-0 text-xs text-left md:text-left dark:text-gray-500 text-black lg:font-light">{item.date}</p>
							</li>
						</ul>
						<p className="pt-0 mt-0 mb-4 ml-0 text-left text-xs dark:text-gray-500 text-black lg:font-light">{item.location}</p>

						{item.tags ? (
							<ul className="flex-wrap flex md:flex-col w-auto py-0 mb-8 gap-2">
								{item.tags.map((tag, index) => (
									<li
										key={index}
										className="px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100 w-max"
									>
										<p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
											{tag}
										</p>
									</li>
								))}
							</ul>
						) : null}
					</div>

				</div>
			
			</div>

            {item.protected ? (
                <>
                    {/* <p>You need permission to access this case.</p> */}
                    {/* <div className="col-span-1 row-span-3">
                        <img src={item.hero} className="logo mx-auto" alt="logo" />
                    </div> */}
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
							toggle && (
								<div
									tabindex="-1"
									aria-hidden="true"
									className="fixed inset-0 z-10 overflow-y-auto">
										<div className="modal flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
											<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
												<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
													<button onClick={() => setToggle(false)} type="button" className="ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close">
													<XMarkIcon className="h-5 w-5 text-black"/>
													</button>
												</div>
												<div className="modal-body relative p-4">
													<input
														className="border-b border-b-2 dark:bg-transparent border-gray-300 hover:border-gray-600 active:border-gray-800 focus:border-gray-800 outline-0 py-3 w-full"
														placeholder="Enter passcode to access this case"
														value={value}
														onChange={onChange}
													/>
												</div>
											</div>
											<div onClick={() => setToggle(false)} className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur" />
										</div>
								</div>
							)
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
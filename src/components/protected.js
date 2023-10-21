import React, { useState } from 'react';
import Text, { Title } from './typography';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';
import Access from './access';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const Protected = ({
	item,
	clearActive,
	openModal,
	children,
	onAuthenticated,
}) => {
	const [show, setShow] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	const onChange = (event) => {
		if (event.target.value === '123') {
			// onSelect(item);
			setAuthenticated(true);
			onAuthenticated?.(true);
		}
	};

	if (!item.protected || authenticated) {
		return children;
	}

	return (
		<div className="soon flex flex-col h-screen max-h-screen overflow-hidden justify-center items-center p-12">
			<div className="scroll-container invisible md:visible absolute top-0 left-0 right-0 opacity-50 p-4">
				<div className="scroll-text w-full">
					<Text value="Under construction. Being built. In preparation. In the owen. On the way. Brewing. On the anvil. In the fire." />
				</div>
			</div>
			<div className="scroll-container invisible md:visible absolute top-0 left-0 right-0 opacity-50 p-4">
				<div className="scroll-text w-full">
					<Text value="Under construction. Being built. In preparation. In the owen. On the way. Brewing. On the anvil. In the fire." />
				</div>
			</div>
			<div className="scroll-container invisible md:visible absolute top-0 left-0 right-0 opacity-50 p-4">
				<div className="scroll-text w-full">
					<Text value="Under construction. Being built. In preparation. In the owen. On the way. Brewing. On the anvil. In the fire." />
				</div>
			</div>
			<div className="scroll-container invisible md:visible absolute top-0 left-0 right-0 opacity-50 p-4">
				<div className="scroll-text w-full">
					<Text value="Under construction. Being built. In preparation. In the owen. On the way. Brewing. On the anvil. In the fire." />
				</div>
			</div>

			<div className="flex flex-col justify-center items-center">
				<div className="meta flex-col items-center justify-center">
					<Title
						value={item.client}
						className="text-center mb-0 text-white"
					/>
					<Text
						value={item.role}
						className="text-center mb-0 text-white"
					/>
					<Text
						value={item.date}
						className="text-center mb-0 text-white"
					/>
				</div>
				<div className="mt-20 mb-20 text-6xl font-bold mx-auto">
					<Typewriter
						options={{
							strings: [
								'Something exciting is cooking here!',
								'Details will be served soon.',
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>

			<button
				onClick={() => setShow(true)}
				className={classNames(
					`bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full items-center flex`
				)}
			>
				Read more{' '}
				{item?.protected && (
					<LockClosedIcon className="ml-2 h-4 w-4 text-white" />
				)}
			</button>

			<Access
				item={item}
				onChange={onChange}
				clearActive={clearActive}
				closeModal={() => setShow(false)}
				openModal={openModal}
				show={show}
				showRequestModal
				closeRequestModal={() => setShow(false)}
				// byt namn på "close/showRequestModal...", request är request, kod-access är kod-access, access är samlingen
			/>
		</div>
	);
};

export default Protected;

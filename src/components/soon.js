import React from 'react';
import Text, { Title } from './typography';
import Typewriter from 'typewriter-effect';

const Soon = ({ item }) => {
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
					<Title value={item.client} className="text-center mb-0" />
					<Text value={item.role} className="text-center mb-0" />
					<Text value={item.date} className="text-center mb-0" />
				</div>
				<div className="mt-20 mb-20 text-6xl font-bold mx-auto">
					<Typewriter
						options={{
							strings: [
								'Something exciting is cooking here!',
								'Details will be served soon.'
							],
							autoStart: true,
							loop: true
						}}
					/>
				</div>
			</div>

			<button
				onClick={() =>
					(window.location = `mailto:daniel@laudig.se?subject=${item.client}&body=I want to know more about the work you did for this client.`)
				}
				className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full">
				Request walkthrough
			</button>
		</div>
	);
};

export default Soon;

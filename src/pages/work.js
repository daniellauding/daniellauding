import React from 'react';
import Nav from '../components/nav';
import { Experiences } from '../components/experiences';

const WorkPage = () => {
	return (
		<div className="section-wrapper align-center items-center flex flex-col">
			<div className="nav top-8 left-8 fixed flex flex-row p-6 gap-8 z-30">
				<Nav />
			</div>

			<div className="content align-center sticky z-10 md:relative dark:bg-black dark:bg-black md:light:bg-transparent md:dark:bg-transparent">
				<div className="flex flex-col py-8 gap-4">
					<h1 className="pt-0 mb-8 text-4xl font-bold">
						Work Experience
					</h1>
					<Experiences showExperiencesFull={true} />
				</div>
			</div>
		</div>
	);
};

export default WorkPage;

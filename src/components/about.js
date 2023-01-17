import React from 'react';
import classNames from 'classnames';
import Avatar from './avatar';
import Profile from './profile';
import Experiences from './experiences';

// Hur tar jag reda på vad som körs, för att ta bort och förenkla kod?

const About = ({ previewCase, setPreviewCase, active, selectedChanged, clearPreview }) => {
	// const [active, setActive] = useState(null);

	return (
		<>
			<Avatar previewCase={previewCase} selectedChanged={selectedChanged} active={active} />

			<div
				className={classNames(
					'content align-center sticky z-10 md:relative dark:bg-black light:bg-white md:light:bg-transparent md:dark:bg-transparent',
					active
						? 'justify-start'
						: 'flex md:flex-col justify-center rounded-2xl md:rounded-none md:h-screen'
				)}
				onMouseEnter={clearPreview}>
				<div className="md:overflow-y-scroll md:h-100 py-8">
					<Profile />
					<Experiences
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						active={active}
						previewCase={previewCase}
					/>

					{/* <TagsList /> */}
				</div>
			</div>
		</>
	);
};

export default About;

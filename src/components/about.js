import React, { useCallback } from 'react';
import classNames from 'classnames';
import Avatar from './avatar';
import Profile from './profile';
import Experiences from './experiences';

// Hur tar jag reda på vad som körs, för att ta bort och förenkla kod?

const About = ({ active, setActive, clearActive, previewCase, setPreviewCase }) => {
	// const [active, setActive] = useState(null);

	const selectedChanged = useCallback(
		(value) => {
			setActive(value || null);
			setPreviewCase(null);
		},
		[setActive],
	);

	const clearPreview = useCallback(() => setPreviewCase(null), [setPreviewCase]);

	return (
		<>
			<Avatar
				clearPreview={clearPreview}
				setPreviewCase={setPreviewCase}
				previewCase={previewCase}
				clearActive={clearActive}
				selectedChanged={selectedChanged}
			/>

			<div
				className={classNames(
					'content align-center',
					active ? 'justify-start' : 'md:w-1/2 flex md:flex-col justify-center',
				)}
				onMouseEnter={clearPreview}>
				<div className="md:overflow-y-scroll md:h-100 py-8">
					<Profile />
					<Experiences
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						active={active}
					/>
				</div>
			</div>
		</>
	);
};

export default About;

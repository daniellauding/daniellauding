import React from 'react';
import classNames from 'classnames';
import { about } from '../constant';

const Avatar = ({ active, selectedChanged, previewCase }) => {
	// move to own file
	const heroImg = about.map((intro) => intro.hero);

	return (
		<div
			className={classNames(
				'cover bg-cover fixed top-0 md:top-auto md:relative',
				active ? '' : ''
			)}
		>
			<img
				src={active?.bg || previewCase?.bg || heroImg}
				className={classNames(
					'object-cover',
					active ? 'w-full h-auto' : 'w-full h-full'
				)}
				alt=""
				onClick={() => selectedChanged(previewCase || null)}
			/>
		</div>
	);
};

export default Avatar;

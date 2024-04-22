import React, { useMemo } from 'react';
import classNames from 'classnames';
import { about, work } from '../constant';

import { useLocation } from 'react-router-dom';

const Avatar = ({ selectedChanged, previewCase, className }) => {
	// move to own file
	const heroImg = about.map((intro) => intro.hero);

	const location = useLocation();

	const active = useMemo(() => {
		return work.find((client) => location === `/${client.slug}`);
	}, [location]);

	return (
		<div
			className={classNames(
				'cover bg-cover fixed top-0 md:top-auto md:relative',
				className,
				active ? '' : ''
			)}
		>
			<img
				src={
					active?.background?.image ||
					previewCase?.background?.image ||
					heroImg
				}
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

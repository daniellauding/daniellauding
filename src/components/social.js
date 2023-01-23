import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Tooltip from './tooltip';

const Links = [
	{
		id: '0',
		name: 'Spotify',
		network: 'spotify',
		url: 'https://open.spotify.com/artist/4cDYlG9sl8IYOGsoXWKkGt?si=PREJisoNRWuwWeSYSL3dZQ',
		icon: 'spotify',
		label: 'My music',
		tooltip: 'Music journal',
	},
	{
		id: '1',
		name: 'Instagram',
		network: 'instagram',
		url: 'https://www.instagram.com/daniellauding/',
		icon: 'instagram',
		label: 'My images',
		tooltip: 'Photo journal',
	},
	{
		id: '2',
		name: 'LinkedIn',
		network: 'linkedin',
		url: 'https://www.linkedin.com/in/daniellauding',
		icon: 'linkedin',
		label: 'My career',
		tooltip: 'Career journal',
	},
];

const Social = () => {
	return (
		<div className="mt-auto">
			<ul className="m-0 flex flex-row justify-center align-center">
				{Links.map((link) => (
					<li className="m-0 p-0" key={link.id}>
						<Tooltip content={link?.tooltip} direction="top">
							<SocialIcon
								style={{
									height: '40px',
									width: '40px',
								}}
								fgColor="rgba(255, 255, 255, 0.7)"
								bgColor="#000"
								network={link.network}
								url={link.url}
								label={link.label}
							/>
						</Tooltip>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Social;

import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Links = [
	{
		id: '0',
		name: 'Spotify',
		network: 'spotify',
		url: 'https://open.spotify.com/artist/4cDYlG9sl8IYOGsoXWKkGt?si=PREJisoNRWuwWeSYSL3dZQ',
		icon: 'spotify',
		label: 'My music'
	},
	{
		id: '1',
		name: 'Instagram',
		network: 'instagram',
		url: 'https://www.instagram.com/daniellauding/',
		icon: 'instagram',
		label: 'My images'
	},
	{
		id: '2',
		name: 'LinkedIn',
		network: 'linkedin',
		url: 'https://www.linkedin.com/in/daniellauding',
		icon: 'linkedin',
		label: 'My career'
	}
];

const Social = () => {
	return (
		<div>
			<ul className="mt-8 mb-4 md:mt-8 flex flex-row justify-center align-center">
				{Links.map((link) => (
					<li className="mx-2" key={link.id}>
						<SocialIcon
							style={{
								height: 32,
								width: 32,
								fill: 'rgba(0,0,0,0.3)'
							}}
							network={link.network}
							url={link.url}
							label={link.label}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Social;

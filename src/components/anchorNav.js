import React, { useRef } from 'react';

const AnchorNavigation = ({ content }) => {
	const navRef = useRef(null);

	const scrollToSection = (anchor) => {
		const section = document.querySelector(anchor);
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<nav ref={navRef}>
			<ul>
				{content
					.filter((item) => item.anchor) // Filter items with an anchor
					.map((item) => (
						<li key={item.id}>
							<button
								onClick={() => scrollToSection(item.anchor)}
								className="cursor-pointer"
							>
								{item.section}
							</button>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default AnchorNavigation;

import clsx from 'clsx';
import { useState } from 'react';

export default function FilterPosts({ onFilter }) {
	const [activeTab, setActiveTab] = useState(null);

	const handleClick = (tab) => {
		setActiveTab((prevTab) => (prevTab === tab ? null : tab));

		if (activeTab === tab) {
			onFilter(null); // Restablecer a todos los posts
		} else {
			onFilter(tab);
		}
	};

	return (
		<header className="mb-2">
			<nav className="d-flex">
				<p
					id="relevant"
					className={clsx(
						'm-0 px-2_5 btn social-icon py-2 fw-lighter fs-5',
						{
							'fw-bold': activeTab === 'relevant',
						}
					)}
					onClick={() => handleClick('relevant')}>
					Relevant
				</p>
				<p
					id="latest"
					className={clsx(
						'm-0 px-2_5 btn social-icon py-2 fw-lighter fs-5',
						{
							'fw-bold': activeTab === 'latest',
						}
					)}
					onClick={() => handleClick('latest')}>
					Latest
				</p>
				<p
					id="top"
					className={clsx(
						'm-0 px-2_5 btn social-icon py-2 fw-lighter fs-5',
						{
							'fw-bold': activeTab === 'top',
						}
					)}
					onClick={() => handleClick('top')}>
					Top
				</p>
			</nav>
		</header>
	);
}

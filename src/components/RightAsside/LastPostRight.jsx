import React from 'react';

export default function LastPostRight({ title }) {
	return (
		<section className="card border-light-subtle text-start shadow-sm">
			<header className="py-2 px-3 border-bottom border-light">
				<h3
					id="first-title-last-post"
					className="m-0 text-lowercase fs-5 fw-bold text-dark"></h3>
				<div className="fs-xs">{title}</div>
			</header>
			<div id="first-last-posts"></div>
		</section>
	);
}

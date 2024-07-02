import React from 'react';

export default function TrendListRight({ title }) {
	return (
		<section className="border-bottom border-dark-subtle mt-2 mb-3 px-3 pb-3">
			<header className="py-2 px-3">
				<h3 className="m-0 text-lowercase fs-6 text-dark">{title}</h3>
			</header>
			<div id="trends-list"></div>
		</section>
	);
}

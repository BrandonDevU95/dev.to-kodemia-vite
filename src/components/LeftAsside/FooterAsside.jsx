import React from 'react';

export default function FooterAsside() {
	return (
		<footer className="mt-4 fs-6 text-secondary">
			<p>
				<a
					className="fw-medium"
					aria-label="DEV Community Home"
					href="#">
					DEV Community
				</a>
				A constructive and inclusive social network for software
				developers. With you every step of your journey.
			</p>

			<p className="mt-3">
				Built on <a href="#">Forem</a> — the{' '}
				<a href="https://dev.to/t/opensource">open source</a> software
				that powers <a href="https://dev.to">DEV</a> and other inclusive
				communities.
			</p>
			<p className="mt-3">
				Made with love and <a href="#">Ruby on Rails</a>. DEV Community{' '}
				<span title="copyright">©</span> 2016 - 2024.
			</p>
		</footer>
	);
}

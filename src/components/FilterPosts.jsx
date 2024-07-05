export default function FilterPosts() {
	return (
		<header className="mb-2">
			<nav className="d-flex">
				<p
					id="relevant"
					className="m-0 px-2_5 btn social-icon py-2 fw-lighter fs-5">
					Relevant
				</p>
				<p
					id="latest"
					className="m-0 px-2_5 btn social-icon py-2 fw-lighter fs-5">
					Latest
				</p>
				<p
					id="top"
					className="m-0 px-2_5 btn social-icon py-2 fw-lighter fs-5">
					Top
				</p>
			</nav>
		</header>
	);
}

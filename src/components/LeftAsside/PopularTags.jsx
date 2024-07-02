export default function PopularTags({ tags }) {
	return (
		<nav className="mb-4">
			<h3 className="fs-6 fw-bold text-start p-2">Popular Tags</h3>
			<div id="popular-tags" className="overflow-y-auto">
				{tags.map((tag) => (
					<div
						key={tag}
						className="py-2 px-3 link-nav rounded border-0 text-star">
						<a
							href="#"
							className="text-decoration-none d-flex align-items-center">
							#{tag}
						</a>
					</div>
				))}
			</div>
		</nav>
	);
}

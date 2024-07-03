export default function FavDetails({ reactions, comments }) {
	return (
		<aside className="w-fav position-relative ms-auto">
			<div
				id="aside-left-details"
				className="d-grid gap-3 position-absolute top-fav">
				<div className="d-flex flex-column align-items-center lh-1">
					<i className="bi bi-heart bi-heart-hover fs-4 p-2"></i>
					<span id="fav-details" className="pt-1">
						{reactions}
					</span>
				</div>
				<div className="d-flex flex-column align-items-center lh-1">
					<i className="bi bi-chat bi-chat-hover fs-4 p-2"></i>
					<span id="comments-details" className="pt-1">
						{comments}
					</span>
				</div>
				<div className="d-flex flex-column align-items-center lh-1">
					<i className="bi bi-bookmark bi-bookmark-hover fs-4 p-2"></i>
					<span id="saved-details" className="pt-1">
						{Math.floor(Math.random() * 10) + 1}
					</span>
				</div>
				<div className="d-flex flex-column align-items-center">
					<a href="#" className="btn social-icon rounded-pill">
						<i className="bi bi-three-dots fs-4"></i>
					</a>
				</div>
			</div>
		</aside>
	);
}

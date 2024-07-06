import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from '../utils/notifications';

import { deletePost } from '../../api/postsAPI';

export default function FavDetails({ reactions, comments, isAuthor, postId }) {
	const navigate = useNavigate();
	async function handleDeletePost() {
		const fonfirmDelete = window.confirm(
			'Are you sure you want to delete this post?'
		);

		if (fonfirmDelete) {
			const data = await deletePost(postId);
			if (data) {
				ToastSuccess('Post deleted successfully');
				navigate('/');
			} else {
				ToastError('Error deleting post');
			}
		}
	}

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
				{isAuthor && (
					<div className="d-flex flex-column align-items-center gap-3">
						<Link to={`/edit-post/${postId}`}>
							<button
								className="btn btn-primary w-100"
								type="button">
								<i className="bi bi-pencil"></i>
							</button>
						</Link>
						<button
							className="btn btn-danger w-100"
							type="button"
							onClick={handleDeletePost}>
							<i className="bi bi-x-lg"></i>
						</button>
					</div>
				)}
			</div>
		</aside>
	);
}

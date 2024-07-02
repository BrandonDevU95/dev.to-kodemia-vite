import { useEffect, useState } from 'react';
import { getLastPosts } from '../../api/postsAPI';
import LoadingSpinner from '../utils/Loading';
import NoContent from '../utils/NoContent';

export default function LastPostRight({ title, start, end }) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			const data = await getLastPosts(end);
			const newData = data.slice(start, end);
			setPosts(newData);
			setIsLoading(false);
		};

		fetchPosts();
	}, [start, end]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isLoading && posts.length === 0) {
		return <NoContent />;
	}

	return (
		<section className="card border-light-subtle text-start shadow-sm">
			<header className="py-2 px-3 border-bottom border-light">
				<h3
					id="first-title-last-post"
					className="m-0 text-lowercase fs-5 fw-bold text-dark">
					{`#${posts[0].tags[0]}`}
				</h3>
				<div className="fs-xs">{title}</div>
			</header>
			<div id="first-last-posts">
				{posts.map((post) => (
					<div
						key={post._id}
						className="p-3 border-bottom border-light">
						<a
							href="../../views/guestDetails.html?id=667f146a1269ca1650c98ca0"
							className="text-decoration-none text-discuss">
							<p className="m-0">
								{post.title.length > 40
									? post.title.substring(0, 40) + '...'
									: post.title}
							</p>
							<span className="pt-1 fs-6 text-secondary">
								{post.numComments} comments
							</span>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

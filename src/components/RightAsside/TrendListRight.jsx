import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import LoadingSpinner from '../utils/Loading';
import NoContent from '../utils/NoContent';
import { getPostsMoreReactions } from '../../api/postsAPI';

export default function TrendListRight({ title, numPosts }) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getPostsMoreReactions(numPosts).then((data) => {
			setPosts(data);
		});
		setIsLoading(false);
	}, [numPosts]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isLoading && posts.length === 0) {
		return <NoContent />;
	}

	return (
		<section className="border-bottom border-dark-subtle mt-2 mb-3 px-3 pb-3">
			<header className="py-2 px-3">
				<h3 className="m-0 text-lowercase fs-6 text-dark">{title}</h3>
			</header>
			<div id="trends-list">
				{posts.map((post) => (
					<div key={post._id} className="ms-3">
						<Link
							to={`/post-detail/${post._id}`}
							className="d-block text-decoration-none text-secondary widget rounded">
							{post.title}
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}

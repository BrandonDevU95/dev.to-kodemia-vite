import { useEffect, useState } from 'react';
import { getAllCategories, getPostsMoreReactions } from '../../api/postsAPI';
import LoadingSpinner from '../utils/Loading';
import NoContent from '../utils/NoContent';

export default function TrendListRight({ title, numPosts }) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (numPosts) {
			getPostsMoreReactions(numPosts).then((data) => {
				setPosts(data);
			});
		} else {
			getAllCategories().then((data) => {
				setPosts(data);
			});
		}
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
				{posts.map((post, index) => (
					<div key={index} className="ms-3">
						<a
							href="../../views/guestDetails.html?id=667f14671269ca1650c98c76"
							className="d-block text-decoration-none text-secondary widget rounded">
							{numPosts ? post.title : post}
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

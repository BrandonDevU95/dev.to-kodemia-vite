import { getAllCategories, getPostByCategory } from '../../api/postsAPI';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import LoadingSpinner from '../utils/Loading';
import NoContent from '../utils/NoContent';

export default function CategoriesRight({ title }) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCategoriesAndPosts = async () => {
			try {
				const categories = await getAllCategories();
				const postsPromises = categories.map(async (category) => {
					const posts = await getPostByCategory(category);
					const randomIndex = Math.floor(
						Math.random() * posts.length
					);
					return posts[randomIndex];
				});

				const postsWithRandom = await Promise.all(postsPromises);
				setPosts(postsWithRandom);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCategoriesAndPosts();
	}, []);

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
					<div key={`${post._id}_${index}`} className="ms-3">
						<Link
							to={`/post-detail/${post._id}`}
							className="d-block text-decoration-none text-secondary widget rounded">
							{post.category}
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}

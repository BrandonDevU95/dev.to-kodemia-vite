import { useEffect, useState } from 'react';
import { getAllTags } from '../../api/postsAPI.js';
import LoadingSpinner from '../utils/Loading.jsx';
import NoContent from '../utils/NoContent.jsx';

export default function PopularTags() {
	const [tags, setTags] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllTags()
			.then((data) => setTags(data))
			.catch((error) => console.error(error));
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isLoading && tags.length === 0) {
		return <NoContent />;
	}

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

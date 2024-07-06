import { getUserData, getUserInfo } from '../api/usersAPI';
import { useEffect, useState } from 'react';

import FavDetails from '../components/Details/FavDetails';
import LoadingSpinner from '../components/utils/Loading';
import NoContent from '../components/utils/NoContent';
import PostDetail from '../components/Details/PostDetail';
import TrendingDetails from '../components/Details/TrendingDetails';
import { getPostById } from '../api/postsAPI';
import { useParams } from 'react-router-dom';

export default function PostDetailPage() {
	const user = getUserData();
	const { id } = useParams();
	const [post, setPost] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const isAuthor = post.author === user.user_id ? true : false;

	useEffect(() => {
		const fetchPostAndUsers = async () => {
			try {
				const postData = await getPostById(id);
				const { avatar, name } = await getUserInfo(postData.author);

				setPost({
					...postData,
					avatar,
					name,
				});
			} catch (error) {
				console.error('Error fetching post or user info:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPostAndUsers();
	}, [id]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isLoading && post.length === 0) {
		return <NoContent />;
	}

	return (
		<main className="py-3">
			<div className="container">
				<div className="row">
					<div className="col">
						<FavDetails
							reactions={post.numReactions}
							comments={post.numComments}
							isAuthor={isAuthor}
							postId={post._id}
						/>
					</div>
					<div className="col-8">
						<div id="post-details">
							<PostDetail post={post} />
						</div>
					</div>
					<div className="col-3">
						<TrendingDetails />
					</div>
				</div>
			</div>
		</main>
	);
}

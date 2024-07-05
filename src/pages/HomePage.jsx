import { getUserData, getUserInfo } from '../api/usersAPI';
import { useEffect, useState } from 'react';

import CategoriesRight from '../components/RightAsside/CategoriesRight';
import FooterAsside from '../components/LeftAsside/FooterAsside';
import LastPostRight from '../components/RightAsside/LastPostRight';
import LoadingSpinner from '../components/utils/Loading';
import LoginAsside from '../components/LeftAsside/LoginAsside';
import ModeratorAsside from '../components/LeftAsside/ModeratorAsside';
import NavigationAsside from '../components/LeftAsside/NavigationAsside';
import NewslatterAsside from '../components/LeftAsside/NewslatterAsside';
import NoContent from '../components/utils/NoContent';
import PopularTags from '../components/LeftAsside/PopularTags';
import PostList from '../components/PostList';
import TrendListRight from '../components/RightAsside/TrendListRight';
import { getAllPost } from '../api/postsAPI';

export default function HomePage() {
	const user = getUserData();
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPostsAndUsers = async () => {
			try {
				const postsData = await getAllPost();

				const postsWithAvatars = await Promise.all(
					postsData.map(async (post) => {
						const userInfo = await getUserInfo(post.author);
						return { ...post, avatar: userInfo.avatar };
					})
				);

				setPosts(postsWithAvatars);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPostsAndUsers();
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isLoading && posts.length === 0) {
		return <NoContent />;
	}

	return (
		<main className="py-3">
			<div className="container">
				<div className="row">
					<div className="col">
						<aside>
							{!user && <LoginAsside />}
							<NavigationAsside />
							<PopularTags />
							{!user ? <ModeratorAsside /> : <NewslatterAsside />}

							<FooterAsside />
						</aside>
					</div>
					<div className="col-6">
						<PostList posts={posts} />
					</div>
					<div className="col">
						<aside className="d-grid gap-3">
							<LastPostRight
								title="Discussion threads targeting the whole community"
								start={0}
								end={5}
							/>
							<LastPostRight
								title="Light, and off-topic conversation."
								start={5}
								end={10}
							/>
							<TrendListRight
								title="trending guides/resources"
								numPosts={10}
							/>
							<CategoriesRight title="recently queried" />
						</aside>
					</div>
				</div>
			</div>
		</main>
	);
}

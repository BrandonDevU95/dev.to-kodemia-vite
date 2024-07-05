import { Link, useParams } from 'react-router-dom';
import { getAllAvatarUsers, getUserData, getUserInfo } from '../api/usersAPI';
import { useEffect, useState } from 'react';

import CategoriesRight from '../components/RightAsside/CategoriesRight';
import FilterPostsTags from '../components/FilterPostsTags';
import FooterAsside from '../components/LeftAsside/FooterAsside';
import PopularTags from '../components/LeftAsside/PopularTags';
import PostList from '../components/PostList';
import SocialLinksAsside from '../components/LeftAsside/SocialLinksAsside';
import { getAllPostByTag } from '../api/postsAPI';

export default function TagsPage() {
	const [user, setUser] = useState([]);
	const [posts, setPosts] = useState([]);
	const [avatars, setAvatars] = useState([]);
	const { tags } = useParams();

	useEffect(() => {
		getAllAvatarUsers()
			.then((data) => {
				setAvatars(data);
			})
			.catch((error) => {
				console.log(error);
			});
		setUser(getUserData());
	}, []);

	useEffect(() => {
		const fetchPostsAndUsers = async () => {
			try {
				const postsData = await getAllPostByTag(tags);

				const postsWithAvatars = await Promise.all(
					postsData.map(async (post) => {
						const userInfo = await getUserInfo(post.author);
						return { ...post, avatar: userInfo.avatar };
					})
				);

				setPosts(postsWithAvatars);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPostsAndUsers();
	}, [tags]);

	return (
		<main className="py-3">
			<div className="container">
				<div className="row">
					<div className="col">
						<aside>
							{user && (
								<>
									<div className="mt-2">
										<Link
											to={'/create-post'}
											type="button"
											className="btn btn-primary btn-sm">
											Create Post
										</Link>
									</div>
									<hr />
								</>
							)}
							<div className="py-2">
								<h4 className="fw-semibold fs-6">
									submission guidelines
								</h4>
								<p className="text-secondary">
									Client-side, server-side, it doesnt matter.
									This tag should be used for anything
									<span
										id="tag-title"
										className="text-dark fw-bold px-1">
										#{tags}
									</span>{' '}
									focused. If the topic is about a JavaScript
									framework or library, just remember to
									include the frameworks tag as well.
								</p>
							</div>
							<hr />
							<div className="py-2">
								<h4 className="fw-semibold fs-6">
									about{' '}
									<span id="tag-title" className="fw-bold">
										#{tags}
									</span>
								</h4>
								<p className="text-secondary">
									How should the tag be written? All
									lower-case letters for the tag:
								</p>
								<span
									id="tag-title"
									className="badge rounded-pill text-bg-warning">
									#{tags}
								</span>
							</div>
							<hr />
							<div className="py-2">
								<h4 className="fw-semibold fs-6">
									tag followers
								</h4>
								<div
									id="avatars-followers"
									className="d-flex flex-wrap gap-2">
									{avatars.map((avatar) => (
										<a key={avatar.username} href="#">
											<img
												src={avatar.imagen}
												className="rounded-circle"
												width="48"
												height="48"
												alt={avatar.username}
											/>
										</a>
									))}
								</div>
								<FooterAsside />
								<hr />
								<SocialLinksAsside />
							</div>
						</aside>
					</div>
					<div className="col-7">
						<header className="mb-2">
							<FilterPostsTags />
						</header>
						<PostList posts={posts} />
					</div>
					<div className="col">
						<aside className="d-grid gap-3">
							<CategoriesRight title="recently queried" />
							<PopularTags />
						</aside>
					</div>
				</div>
			</div>
		</main>
	);
}

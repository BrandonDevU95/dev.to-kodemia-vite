import CategoriesRight from '../components/RightAsside/CategoriesRight';
import FooterAsside from '../components/LeftAsside/FooterAsside';
import LastPostRight from '../components/RightAsside/LastPostRight';
import LoginAsside from '../components/LeftAsside/LoginAsside';
import ModeratorAsside from '../components/LeftAsside/ModeratorAsside';
import NavigationAsside from '../components/LeftAsside/NavigationAsside';
import NewslatterAsside from '../components/LeftAsside/NewslatterAsside';
import PopularTags from '../components/LeftAsside/PopularTags';
import PostList from '../components/PostList';
import TrendListRight from '../components/RightAsside/TrendListRight';
import { getUserData } from '../api/usersAPI';
import { useState } from 'react';

export default function HomePage() {
	const [user, setUser] = useState(getUserData());

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
						<PostList />
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

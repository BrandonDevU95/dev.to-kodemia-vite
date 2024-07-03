import CategoriesRight from '../components/RightAsside/CategoriesRight';
import FooterAsside from '../components/LeftAsside/FooterAsside';
import LastPostRight from '../components/RightAsside/LastPostRight';
import LoginAsside from '../components/LeftAsside/LoginAsside';
import ModeratorAsside from '../components/LeftAsside/ModeratorAsside';
import NavigationAsside from '../components/LeftAsside/NavigationAsside';
import PopularTags from '../components/LeftAsside/PopularTags';
import PostList from '../components/PostList';
import TrendListRight from '../components/RightAsside/TrendListRight';

export default function HomePage() {
	return (
		<main className="py-3">
			<div className="container">
				<div className="row">
					<div className="col">
						<aside>
							<LoginAsside />
							<NavigationAsside />
							<PopularTags />
							<ModeratorAsside />
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

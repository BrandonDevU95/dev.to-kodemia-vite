import MainLayout from './layouts/MainLayout';
import LoginAsside from './components/LeftAsside/LoginAsside';
import NavigationAsside from './components/LeftAsside/NavigationAsside';
import PopularTags from './components/LeftAsside/PopularTags';
import ModeratorAsside from './components/LeftAsside/ModeratorAsside';
import FooterAsside from './components/LeftAsside/FooterAsside';
import PostList from './components/PostList';
import LastPostRight from './components/RightAsside/LastPostRight';
import TrendListRight from './components/RightAsside/TrendListRight';

function App() {
	return (
		<MainLayout>
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
								<TrendListRight title="recently queried" />
							</aside>
						</div>
					</div>
				</div>
			</main>
		</MainLayout>
	);
}

export default App;

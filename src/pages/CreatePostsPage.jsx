import PostForm from '../components/PostForm';

const CreatePostPage = () => {
	return (
		<main>
			<div className="container-fluid px-5">
				<div className="row">
					<div className="col-9">
						<PostForm />
					</div>
					<div className="col-3">
						<aside className="position-relative h-100"></aside>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</main>
	);
};

export default CreatePostPage;

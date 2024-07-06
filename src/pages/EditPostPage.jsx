import PostForm from '../components/PostForm';
import { useParams } from 'react-router-dom';

const EditPostPage = () => {
	const { id } = useParams();

	return (
		<main>
			<div className="container-fluid px-5">
				<div className="row">
					<div className="col-9">
						<PostForm postId={id} isEdit />
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

export default EditPostPage;

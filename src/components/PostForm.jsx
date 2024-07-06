import { ToastError, ToastSuccess } from './utils/notifications';
import { createPost, getPostById, updatePost } from '../api/postsAPI';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ postId, isEdit }) => {
	const navigation = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	const [showTip, setShowTip] = useState({
		title: false,
		tags: false,
		description: false,
		footer: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			if (isEdit && postId) {
				const post = await getPostById(postId);
				setValue('title', post.title);
				setValue('tags', post.tags.join(', '));
				setValue('category', post.category);
				setValue('description', post.description);
				setValue('image', post.image);
			}
		};
		fetchData();
	}, [postId, isEdit, setValue]);

	const onSubmit = async (data) => {
		setShowTip({
			title: false,
			tags: false,
			description: false,
			footer: false,
		});

		let tagsArray = data.tags.split(',').map((tag) => tag.trim());
		tagsArray = tagsArray.map((tag) => tag.replace(/\s+/g, ''));

		const post = {
			title: data.title,
			description: data.description,
			category: data.category,
			tags: tagsArray,
			readingTime: `${Math.floor(Math.random() * 10) + 1} minutos`,
			image: data.image || 'https://picsum.photos/650/275',
			numReactions: Math.floor(Math.random() * 100) + 1,
			numComments: Math.floor(Math.random() * 30) + 1,
			relevant: false,
		};

		let result;
		if (isEdit) {
			result = await updatePost(post, postId);
		} else {
			result = await createPost(post);
		}

		if (result._id) {
			if (isEdit) {
				ToastSuccess('Post updated successfully');
				navigation(`/post-detail/${result._id}`);
			} else {
				ToastSuccess('Post created successfully');
				navigation('/');
			}
		} else {
			ToastError('Error al guardar el post');
		}
	};

	const handleTagsKeyDown = (e) => {
		if (e.key === ' ') {
			setValue('tags', watch('tags') + ',');
			e.preventDefault();
		}
	};

	return (
		<form id="post-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="card rounded-top-card border-bottom-0">
				<div className="px-7 py-4_5">
					<div className="mb-4">
						<div className="row">
							<div className="col">
								<button
									type="button"
									id="btn-cover-image"
									className="btn btn-outline-secondary border-dark-subtle border-2 text-dark btn-cover fw-semibold"
									onClick={() => setValue('image', '')}>
									{watch('image')
										? 'Remove cover image'
										: 'Add a cover image'}
								</button>
							</div>
							<div className="col-8">
								<input
									type="text"
									id="input-cover-image"
									name="image"
									className={clsx('form-control', {
										'd-none': watch('image'),
									})}
									placeholder="Add url image..."
									aria-label="Add url image..."
									{...register('image')}
								/>
							</div>
						</div>
					</div>
					<div>
						<input
							type="text"
							className="form-control title-new-post wot-focus border-0"
							id="title-new-post"
							name="title"
							placeholder="New post title here..."
							{...register('title', { required: true })}
							onClick={() =>
								setShowTip({ ...showTip, title: true })
							}
						/>
						{errors.title && (
							<span className="text-danger">
								Title is required
							</span>
						)}
					</div>
					<div className="d-flex justify-content-between">
						<div className="w-50">
							<input
								type="text"
								className="form-control wot-focus border-0 text-secondary"
								id="tags-new-post"
								name="tags"
								placeholder="Add up to 4 tags..."
								{...register('tags')}
								onClick={() =>
									setShowTip({ ...showTip, tags: true })
								}
								onKeyDown={handleTagsKeyDown}
							/>
						</div>
						<div className="w-50">
							<input
								type="text"
								className="form-control wot-focus border-0 text-secondary"
								id="category-new-post"
								name="category"
								placeholder="Category post..."
								{...register('category')}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="border-start border-end">
				<div className="px-7 py-2 d-flex justify-content-between">
					<div>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-type-bold fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-type-italic fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-link-45deg fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-list-ol fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-list-task fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-type-h1 fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-quote fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-code fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-code-square fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-lightning-charge fs-4"></i>
						</a>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-image-fill fs-4"></i>
						</a>
					</div>
					<div>
						<a href="#" className="btn social-icon px-2">
							<i className="bi bi-three-dots-vertical fs-4"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="card px-7 py-4 rounded-bottom-card border-top-0 new-post-content">
				<div className="form-floating overflow-auto">
					<textarea
						className="form-control wot-focus wot-border border-0"
						placeholder="Write your post content here..."
						id="description-new-post"
						name="description"
						style={{ height: '100px' }}
						{...register('description', { required: true })}
						onClick={() =>
							setShowTip({ ...showTip, description: true })
						}></textarea>
					<label
						htmlFor="description-new-post"
						className="text-secondary">
						Write your post content here...
					</label>
					{errors.description && (
						<span className="text-danger">
							Description is required
						</span>
					)}
				</div>
			</div>
			<footer id="footer-new-post">
				<div className="row my-4">
					<div className="col-1"></div>
					<div className="col-11">
						<button
							type="button"
							id="btn-publish"
							className="btn btn-primary"
							onClick={handleSubmit(onSubmit)}>
							{isEdit ? 'Update' : 'Publish'}
						</button>
						<a
							href="#"
							className="m-0 btn social-icon"
							onClick={() => reset()}>
							Save draft
						</a>
						<a
							href="#"
							className="m-0 btn social-icon"
							onClick={() => reset()}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								className="crayons-icon c-btn__icon">
								<path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
							</svg>
						</a>
						<a
							href="#"
							className="m-0 btn social-icon"
							onClick={() => reset()}>
							Revert new changes
						</a>
					</div>
				</div>
			</footer>
		</form>
	);
};

export default PostForm;

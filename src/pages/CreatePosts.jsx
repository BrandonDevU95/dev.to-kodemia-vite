import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastInfo } from '../components/utils/notifications';

import clsx from 'clsx';
import { createPost } from '../api/postsAPI';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const NewPostForm = () => {
	const navigate = useNavigate();
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

		const result = await createPost(post);

		console.log(result);

		if (result.name) {
			ToastInfo('Post created successfully');
			navigate('/');
		} else {
			ToastError('Error creating post');
		}
	};

	const handleTagsKeyDown = (e) => {
		if (e.key === ' ') {
			setValue('tags', watch('tags') + ',');
			e.preventDefault();
		}
	};

	return (
		<main>
			<div className="container-fluid">
				<header className="row">
					<div className="col-8 col-auto p-0">
						<nav className="navbar navbar-expand-lg">
							<div className="d-flex justify-content-between w-100">
								<div className="d-flex align-items-center ms-5">
									<Link to={'/'}>
										<img
											src="/logo.png"
											alt="Dev.to Logo"
											width="50"
										/>
									</Link>
									<p className="m-0 fs-5_5 ps-3 fw-semibold">
										Create Post
									</p>
								</div>
								<div>
									<button className="btn social-icon fw-bold">
										Edit
									</button>
									<button className="btn social-icon">
										Preview
									</button>
								</div>
							</div>
						</nav>
					</div>
					<div className="col-3 p-0">
						<a href="/views/home.html">
							<div className="d-flex justify-content-end align-items-center h-100">
								<i className="bi bi-x-lg social-icon btn"></i>
							</div>
						</a>
					</div>
				</header>
				<div className="row mt-3">
					<div className="col"></div>
					<div className="col-7">
						<form
							id="new-post-form"
							onSubmit={handleSubmit(onSubmit)}>
							<div className="card rounded-top-card border-bottom-0">
								<div className="px-7 py-4_5">
									<div className="mb-4">
										<div className="row">
											<div className="col">
												<button
													type="button"
													id="btn-cover-image"
													className="btn btn-outline-secondary border-dark-subtle border-2 text-dark btn-cover fw-semibold"
													onClick={() =>
														setValue('image', '')
													}>
													Add a cover image
												</button>
											</div>
											<div className="col-8">
												<input
													type="text"
													id="input-cover-image"
													name="image"
													className={clsx(
														'form-control',
														{
															'd-none':
																watch('image'),
														}
													)}
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
											{...register('title', {
												required: true,
											})}
											onClick={() =>
												setShowTip({
													...showTip,
													title: true,
												})
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
													setShowTip({
														...showTip,
														tags: true,
													})
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
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-type-bold fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-type-italic fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-link-45deg fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-list-ol fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-list-task fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-type-h1 fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-quote fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-code fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-code-square fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-lightning-charge fs-4"></i>
										</a>
										<a
											href="#"
											className="btn social-icon px-2">
											<i className="bi bi-image-fill fs-4"></i>
										</a>
									</div>
									<div>
										<a
											href="#"
											className="btn social-icon px-2">
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
										{...register('description', {
											required: true,
										})}
										onClick={() =>
											setShowTip({
												...showTip,
												description: true,
											})
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
						</form>
					</div>
					<div className="col-3">
						<aside className="position-relative h-100">
							<div
								id="writting-post-title"
								className={clsx('position-absolute', {
									'd-none': !showTip.title,
									'fade-in': showTip.title,
								})}>
								<p className="m-2 fs-5 fw-bold">
									Writing a Great Post Title
								</p>
								<ul className="text-secondary">
									<li>
										Think of your post title as a super
										short (but compelling!) description —
										like an overview of the actual post in
										one short sentence.
									</li>
									<li>
										Use keywords where appropriate to help
										ensure people can find your post by
										search.
									</li>
								</ul>
							</div>
							<div
								id="writting-post-tags"
								className={clsx('position-absolute', {
									'd-none': !showTip.tags,
									'fade-in': showTip.tags,
								})}>
								<p className="m-2 fs-5 fw-bold">
									Tagging Guidelines
								</p>
								<ul className="text-secondary">
									<li>
										Tags help people find your post - think
										of them as the topics or categories that
										best describe your post.
									</li>
									<li>
										Add up to four comma-separated tags per
										post. Use existing tags whenever
										possible.
									</li>
									<li>
										Some tags have special posting
										guidelines - double check to make sure
										your post complies with them.
									</li>
								</ul>
							</div>
							<div
								id="writting-post-description"
								className={clsx('position-absolute', {
									'd-none': !showTip.description,
									'fade-in': showTip.description,
								})}>
								<p className="m-2 fs-5 fw-bold">
									Editor Basics
								</p>
								<ul className="text-secondary">
									<li>
										Use{' '}
										<span className="text-primary link">
											Markdown
										</span>{' '}
										to write and format posts.
									</li>
									<li>
										Embed rich content such as Tweets,
										YouTube videos, etc. Use the complete
										URL: {`{embed https://... }`}.{' '}
										<span className="text-primary link">
											See a list of supported embeds.
										</span>
									</li>
									<li>
										In addition to images for the posts
										content, you can also drag and drop a
										cover image.
									</li>
								</ul>
							</div>
							<div
								id="publishing-tips"
								className={clsx('position-absolute', {
									'd-none': !showTip.footer,
									'fade-in': showTip.footer,
								})}>
								<p className="m-2 fs-5 fw-bold">
									Publishing Tips
								</p>
								<ul className="text-secondary">
									<li>
										Ensure your post has a cover image set
										to make the most of the home feed and
										social media platforms.
									</li>
									<li>
										Share your post on social media
										platforms or with your co-workers or
										local communities.
									</li>
									<li>
										Ask people to leave questions for you in
										the comments. Its a great way to spark
										additional discussion describing
										personally why you wrote it or why
										people might find it helpful.
									</li>
								</ul>
							</div>
						</aside>
					</div>
					<div className="col"></div>
				</div>
				<footer id="footer-new-post">
					<div className="row my-4">
						<div className="col-1"></div>
						<div className="col-11">
							<button
								type="submit"
								id="btn-publish"
								className="btn btn-primary"
								onClick={handleSubmit(onSubmit)}>
								Publish
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
			</div>
		</main>
	);
};

export default NewPostForm;

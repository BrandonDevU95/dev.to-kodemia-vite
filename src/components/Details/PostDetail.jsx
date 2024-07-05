import { Link } from 'react-router-dom';

export default function PostDetail({ post }) {
	const reactions = [
		{
			src: 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg',
			count: Math.floor(Math.random() * 25) + 1,
		},
		{
			src: 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg',
			count: Math.floor(Math.random() * 25) + 1,
		},
		{
			src: 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg',
			count: Math.floor(Math.random() * 25) + 1,
		},
		{
			src: 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg',
			count: Math.floor(Math.random() * 25) + 1,
		},
		{
			src: 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg',
			count: Math.floor(Math.random() * 25) + 1,
		},
	];

	const reactionsSorted = reactions.sort((a, b) => b.count - a.count);

	return (
		<>
			<div className="card border-light-subtle">
				<div id="image-first-post">
					<img
						className="card-img-top object-fit-cover"
						src={post.image}
						alt="Introducción a la programación reactiva con RxJS: Conceptos básicos y ejemplos prácticos"
						height="340"
					/>
				</div>
				<div className="px-7 pt-3_5">
					<div className="mb-4 d-flex align-items-center justify-content-between">
						<div className="d-flex align-items-center lh-1">
							<div>
								<img
									src={post.avatar}
									className="rounded-circle"
									width="46"
									height="46"
									alt={post.author}
								/>
							</div>
							<div className="mt-1 ps-2">
								<p className="mb-1 fw-bold text-capitalize fs-5_5">
									{`${post.name.firstname} ${post.name.lastname}`}
								</p>
								<span className="fw-light text-secondary fs-xs">
									Posted on{' '}
									{new Date(
										post.created_at
									).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
									})}
								</span>
							</div>
						</div>
					</div>
					<div className="py-2 d-flex column-gap-4 flex-wrap">
						{reactionsSorted.map((reaction, index) => (
							<span
								key={index}
								className="d-flex column-gap-1 align-items-center">
								<img
									src={reaction.src}
									width="24"
									height="24"
								/>
								<span>{reaction.count}</span>
							</span>
						))}
					</div>
					<div className="mt-2">
						<div>
							<h3 className="text-discuss fs-5_5 mb-2"></h3>
							<h1 className="fw-bold">{post.title}</h1>
							<div className="mb-2 d-flex flex-wrap gap-1">
								{post.tags.map((tag, index) => (
									<Link
										key={index}
										to={`/tags/${tag}`}
										className="text-decoration-none text-secondary px-2 py-1 tags-post rounded">
										#{tag}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="card-body py-4_5 px-7">
					<p className="fs-5">{post.description}</p>
				</div>
			</div>
		</>
	);
}

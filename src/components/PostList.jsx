export default function PostList({ posts }) {
	return (
		<div id="posts-lists">
			{posts.map((post) => (
				<div key={post._id} className="mb-1">
					<div className="card border-light-subtle">
						<div id="image-first-post">
							<img
								className="card-img-top object-fit-cover"
								src="https://picsum.photos/id/84/650/275"
								alt="Principios básicos de diseño UI/UX para desarrolladores web"
								height="275"
							/>
						</div>
						<div className="p-3">
							<div className="mb-2 d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center lh-1 fs-6">
									<div className="me-2">
										<img
											src="https://avataaars.io/?avatarStyle=Circle&amp;topType=WinterHat3&amp;accessoriesType=Round&amp;hatColor=PastelGreen&amp;hairColor=BrownDark&amp;facialHairType=BeardLight&amp;facialHairColor=BrownDark&amp;clotheType=BlazerShirt&amp;clotheColor=Blue02&amp;eyeType=Happy&amp;eyebrowType=DefaultNatural&amp;mouthType=Grimace&amp;skinColor=Tanned"
											alt="undefined"
											className="rounded-circle"
											width="32"
											height="32"
										/>
									</div>
									<div>
										<p className="m-0 pb-1 fw-medium text-capitalize"></p>
										<span className="fw-light">
											2024-06-28T19:52:10.353Z
										</span>
									</div>
								</div>
							</div>
							<div className="mt-1 ps-4_5">
								<div>
									<a
										href="../../views/guestDetails.html?id=667f146a1269ca1650c98ca0"
										className="text-decoration-none">
										<h2 className="mb-1 fs-4 fw-bold px-2 text-discuss">
											Principios básicos de diseño UI/UX
											para desarrolladores web
										</h2>
									</a>
									<div className="mb-2 d-flex flex-wrap gap-1">
										<a
											href="../../views/tags.html?tag=UI"
											className="text-decoration-none text-secondary px-2 py-1 tags-post rounded">
											#UI
										</a>
										<a
											href="../../views/tags.html?tag=UX"
											className="text-decoration-none text-secondary px-2 py-1 tags-post rounded">
											#UX
										</a>
										<a
											href="../../views/tags.html?tag=diseñoWeb"
											className="text-decoration-none text-secondary px-2 py-1 tags-post rounded">
											#diseñoWeb
										</a>
									</div>
								</div>
								<div className="d-flex justify-content-between align-items-center fs-6 lh-1 py-2">
									<div className="d-flex">
										<a
											href="#"
											className="text-decoration-none text-dark py-1 px-2 rounded btn-comments">
											<div className="d-flex align-items-center">
												<span
													className="d-flex align-items-center flex-row"
													dir="rtl">
													<span className="d-flex align-items-center justify-content-center crayons_icon_container">
														<img
															src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
															width="18"
															height="18"
														/>
													</span>
													<span className="d-flex align-items-center justify-content-center crayons_icon_container">
														<img
															src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
															width="18"
															height="18"
														/>
													</span>
													<span className="d-flex align-items-center justify-content-center crayons_icon_container">
														<img
															src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
															width="18"
															height="18"
														/>
													</span>
													<span className="d-flex align-items-center justify-content-center crayons_icon_container">
														<img
															src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
															width="18"
															height="18"
														/>
													</span>
													<span className="d-flex align-items-center justify-content-center crayons_icon_container">
														<img
															src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
															width="18"
															height="18"
														/>
													</span>
												</span>
												<span className="ms-3">
													<span className="hidden s:inline">
														48 reactions
													</span>
												</span>
											</div>
										</a>
										<a
											href="#"
											className="text-decoration-none text-dark py-1 px-2 rounded btn-comments d-flex align-items-center">
											<i className="bi bi-chat me-2"></i>
											<span>Add Comment</span>
										</a>
									</div>
									<div className="d-flex align-items-center fw-light">
										<p className="mb-0 me-2">
											8<span> minutos</span>
										</p>
										<button
											className="btn border-0 p-0"
											type="button">
											<i
												id="667f146a1269ca1650c98ca0"
												className="bi bi-bookmark fs-5 p-2 btn-comments rounded"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
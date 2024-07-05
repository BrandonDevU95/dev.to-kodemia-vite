export default function NewslatterAsside() {
	return (
		<>
			<div className="card border-light-subtle text-start shadow-sm p-3">
				<div className="d-flex align-items-center justify-content-between">
					<p className="mb-0 ms-1 fs-6 text-dark">DEV Community</p>
					<a href="#" className="btn social-icon">
						<i className="bi bi-three-dots"></i>
					</a>
				</div>
				<div className="card-header bg-transparent border-light pt-2_5">
					<img
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--MV0h6VJf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rwdadr222nahumlzn0ff.jpg"
						alt="DEV Community"
						width="250"
						className="w-100 rounded mb-3"
					/>
				</div>
				<div className="card-body p-0">
					<h5 className="card-title fw-bold fs-4 mb-3">
						Stay in the loop with the latest articles, trends, and
						tips in the developer community.
					</h5>
					<a href="#">Sign up for our newsletter now!</a>
				</div>
			</div>
			<hr className="pt-3 border-0 m-0"></hr>
		</>
	);
}

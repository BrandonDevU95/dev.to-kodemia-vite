import React from 'react';

export default function ModeratorAsside() {
	return (
		<div>
			<div className="bilboard overflow-y-auto card border-light-subtle text-start shadow-sm pb-3">
				<div className="d-flex justify-content-between align-items-center">
					<p className="m-0 text-secondary fs-6">DEV Community</p>
					<button type="button" className="btn btn-bilboard p-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							role="img"
							aria-labelledby="akx9dnldf58qc86smqohvrx8tejxz61t"
							className="crayons-icon pointer-events-none">
							<title id="akx9dnldf58qc86smqohvrx8tejxz61t">
								Dropdown menu
							</title>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
						</svg>
					</button>
				</div>
				<div className="p-1 pt-2">
					<p className="m-0">
						<img
							src="https://res.cloudinary.com/practicaldev/image/fetch/s--KfYhPrXu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxatl8njvv45ht30hcx9.png"
							alt="Become A Moderator!"
							width="250"
							className="mb-4"
						/>
						<br />
						<strong>
							<a href="#">Fill out this survey</a> and help us
							moderate our community by becoming a tag moderator
							here at DEV.
						</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

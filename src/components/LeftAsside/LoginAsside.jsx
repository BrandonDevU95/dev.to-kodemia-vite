export default function LoginAsside() {
	return (
		<div className="card border-light-subtle text-start shadow-sm">
			<div className="card-body">
				<h5 className="card-title pb-3 fw-bold fs-4">
					DEV Community is a community of 1,446,322 amazing developers
				</h5>
				<p className="card-text text-secondary">
					Were a place where coders share, stay up-to-date and grow
					their careers.
				</p>
				<div className="d-flex flex-column gap-1">
					<button type="button" className="btn btn-outline-primary">
						Create account
					</button>
					<a href="./views/login.html" className="w-100">
						<button type="button" className="btn btn-login w-100">
							Log in
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

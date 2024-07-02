export default function Navbar() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-white border border-bottom">
				<div className="container">
					<a href="./index.html">
						<img src="/logo.png" alt="Dev.to Logo" width="50" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<form className="d-flex ps-3" role="search">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									id="input-search"
									placeholder="Search..."
								/>
								<button
									className="btn btn-search"
									type="button"
									id="btn-search">
									<i className="bi bi-search"></i>
								</button>
							</div>
						</form>
						<div className="ms-auto">
							<a
								className="text-decoration-none pe-2"
								href="./views/login.html">
								<button type="button" className="btn btn-login">
									Log in
								</button>
							</a>
							<button
								type="button"
								className="btn btn-outline-primary">
								Create account
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

import { Link, useNavigate } from 'react-router-dom';
import { getUserData, getUserInfo, logout } from '../api/usersAPI';
import { useCallback, useEffect, useState } from 'react';

import { ToastError } from './utils/notifications';

export default function Navbar() {
	const navigation = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});
	const [userData, setUserData] = useState(getUserData);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userInfo = await getUserInfo(userData.user_id);
				setUser(userInfo);
			} catch (error) {
				console.error(error);
				ToastError('Error fetching user data');
			} finally {
				setIsLoading(false);
			}
		};

		if (userData && userData.user_id) {
			fetchUser();
		} else {
			setIsLoading(false);
		}
	}, [userData]);

	const handleLogout = useCallback(() => {
		logout();
		setUser({});
		setUserData(null);
		navigation('/');
	}, []);

	if (isLoading) {
		return null;
	}

	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-white border border-bottom">
				<div className="container">
					<Link to={'/'}>
						<img src="/logo.png" alt="Dev.to Logo" width="50" />
					</Link>
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
						{userData ? (
							<UserNavbar user={user} onLogout={handleLogout} />
						) : (
							<GuestNavbar />
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}

function UserNavbar({ user, onLogout }) {
	return (
		<div className="ms-auto d-flex align-items-center">
			<a href="./create.html" className="text-decoration-none">
				<button
					type="button"
					className="btn btn-outline-primary fw-semibold mx-1">
					Create Post
				</button>
			</a>
			<button
				type="button"
				className="btn btn-primary position-relative social-icon border-0 mx-1">
				<i className="bi bi-bell fs-5"></i>
				<span
					id="notifications-user"
					className="position-absolute pill-position translate-middle badge rounded-pill bg-danger">
					{Math.floor(Math.random() * 10)}
				</span>
			</button>
			<div className="dropdown">
				<img
					id="avatar-image"
					src={user.avatar}
					width="40"
					height="40"
					data-bs-toggle="dropdown"
				/>
				<ul className="dropdown-menu pt-0 negative-left">
					<div className="p-1">
						<li className="fs-5_5 text-satar">
							<div className="dropdown-item btn social-icon rounded cursor-auto">
								<div className="d-flex flex-column">
									<span
										id="info-name-user"
										className="fw-medium text-capitalize">
										{`${user.name.firstname} ${user.name.lastname}`}
									</span>
									<span
										id="info-username-user"
										className="fs-6 text-secondary">
										@{user.username}
									</span>
								</div>
							</div>
						</li>
						<hr className="my-1" />
						<li>
							<a
								id="profile"
								className="dropdown-item btn social-icon rounded"
								href="./user/profile.html">
								Profile
							</a>
						</li>
						<li>
							<a
								id="logout"
								onClick={onLogout}
								className="dropdown-item btn social-icon rounded"
								href="#">
								Logout
							</a>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
}

function GuestNavbar() {
	return (
		<div className="ms-auto">
			<Link className="text-decoration-none pe-2" to={'/login'}>
				<button type="button" className="btn btn-login">
					Log in
				</button>
			</Link>
			<button type="button" className="btn btn-outline-primary">
				Create account
			</button>
		</div>
	);
}

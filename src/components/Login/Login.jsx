import { Link, useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess } from '../utils/notifications';
import { decodeToken, login, setToken, setUserData } from '../../api/usersAPI';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';

export default function Login() {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
		setError,
	} = useForm();

	async function onSubmit(data) {
		try {
			const { accessToken, refreshToken } = await login(
				data.username,
				data.password
			);
			setToken(accessToken, refreshToken);
			const user = decodeToken(accessToken);
			setUserData(user);
			ToastSuccess('Login successful');
			navigate('/');
		} catch (error) {
			ToastError('Invalid username or password');
			console.error('[login error]', error);
			setError('root.credentials', {
				type: 'manual',
				message: 'Invalid username or password',
			});
		}
	}

	return (
		<main className="container">
			<div className="vh-100 d-grid align-items-center justify-content-center">
				<div className="registration">
					<div className="p-5">
						<div className="d-flex flex-column align-items-center">
							<Link to={'/'}>
								<img src="/logo.png" alt="Dev.to" width="65" />
							</Link>
							<h1 className="fs-2 fw-bold mt-4">
								Join the DEV Community
							</h1>
							<p>
								DEV Community is a community of 1,448,555
								amazing developers
							</p>
						</div>
						<div className="d-grid gap-2_5 mb-3 pb-3">
							<button
								name="button"
								type="submit"
								className="btn btn-lg d-flex align-items-center border bg-transparent btn-login-social p-2_5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-hidden="true"
									className="crayons-icon crayons-icon--default">
									<path
										d="M12.38 6.615c.901 0 2.033-.61 2.707-1.423.61-.738 1.056-1.768 1.056-2.798 0-.14-.013-.28-.04-.394-1.004.038-2.21.673-2.936 1.525-.572.65-1.094 1.667-1.094 2.71 0 .152.026.304.038.354.064.013.166.026.267.026h.001ZM9.2 22c1.234 0 1.78-.827 3.319-.827 1.564 0 1.906.802 3.28.802 1.348 0 2.25-1.246 3.102-2.467.954-1.4 1.349-2.772 1.373-2.836-.089-.025-2.67-1.08-2.67-4.042 0-2.569 2.034-3.726 2.149-3.815-1.348-1.933-3.395-1.983-3.954-1.983-1.514 0-2.746.915-3.522.915-.84 0-1.946-.865-3.255-.865C6.529 6.882 4 8.942 4 12.832c0 2.416.94 4.972 2.097 6.625C7.088 20.857 7.954 22 9.2 22Z"
										fill="#000"></path>
								</svg>

								<span className="w-100 flex fw-medium fs-6 justify-center items-center self-center">
									Continue with Apple
								</span>
							</button>
							<button
								name="button"
								type="submit"
								className="btn btn-lg d-flex align-items-center border bg-transparent btn-login-social p-2_5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-hidden="true"
									className="crayons-icon crayons-icon--default">
									<path
										d="M18.5 2.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13Z"
										fill="#1877F2"></path>
									<path
										d="M16.12 12h-2.636v-1.781c0-.754.368-1.485 1.544-1.485h1.2V6.395s-1.087-.184-2.126-.184c-2.167 0-3.586 1.312-3.586 3.693V12H8.105v2.75h2.41v6.75h2.97v-6.757h2.214L16.115 12h.006Z"
										fill="#fff"></path>
								</svg>

								<span className="w-100 flex fw-medium fs-6 justify-center items-center self-center">
									Continue with Facebook
								</span>
							</button>
							<button
								name="button"
								type="submit"
								className="btn btn-lg d-flex align-items-center border bg-transparent btn-login-social p-2_5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-hidden="true"
									className="crayons-icon crayons-icon--default">
									<rect
										x="2.5"
										y="2.5"
										width="19"
										height="19"
										rx="3"
										fill="#022830"></rect>
									<path
										d="M12.326 15.382a.229.229 0 0 1 .27.131 1.804 1.804 0 0 0 2.157 1.096c.887-.254 1.467-1.129 1.316-2.042a.217.217 0 0 1 .169-.248l.745-.2a.232.232 0 0 1 .277.16l.004.015a3.084 3.084 0 0 1-2.186 3.526 2.997 2.997 0 0 1-3.631-1.92.223.223 0 0 1 .142-.289l.015-.004.722-.225Z"
										fill="#E9F0E8"></path>
									<path
										d="M10.673 9.915a.229.229 0 0 1-.27-.131 1.804 1.804 0 0 0-2.157-1.096A1.818 1.818 0 0 0 6.93 10.73a.217.217 0 0 1-.168.248l-.745.2a.232.232 0 0 1-.278-.16l-.004-.015a3.084 3.084 0 0 1 2.187-3.526 2.997 2.997 0 0 1 3.63 1.92.223.223 0 0 1-.142.289l-.014.004-.723.225Z"
										fill="#4CFCA7"></path>
									<path
										d="m14.936 8.584-.774.208a.232.232 0 0 1-.278-.16l-.317-1.182a.233.233 0 0 1 .16-.278l.79-.211a.232.232 0 0 0 .16-.278l-.2-.744a.223.223 0 0 0-.277-.16l-1.954.54a.233.233 0 0 0-.16.277l.258.963.316 1.181.317 1.182.012.044.88 3.283c.03.117.146.195.263.164l.73-.196a.233.233 0 0 0 .16-.277l-.73-2.729c-.024-.087.019-.161.107-.185l.862-.23a.233.233 0 0 0 .16-.278l-.2-.744c-.039-.146-.168-.221-.285-.19Zm.986-.06a.24.24 0 0 1 .116-.266.871.871 0 0 0 .428-.975.828.828 0 0 0-.839-.62.212.212 0 0 1-.23-.157l-.2-.744c-.03-.117.044-.246.157-.292l.03-.008a2.02 2.02 0 0 1 2.251 1.508 2.058 2.058 0 0 1-1.192 2.446.235.235 0 0 1-.3-.123l-.007-.03-.214-.74Z"
										fill="#FBC1F5"></path>
								</svg>

								<span className="w-100 flex fw-medium fs-6 justify-center items-center self-center">
									Continue with Forem
								</span>
							</button>
							<button
								name="button"
								type="submit"
								className="btn btn-lg d-flex align-items-center border bg-transparent btn-login-social p-2_5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-hidden="true"
									className="crayons-icon crayons-icon--default">
									<path
										d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
										fill="#171717"></path>
								</svg>

								<span className="w-100 flex fw-medium fs-6 justify-center items-center self-center">
									Continue with GitHub
								</span>
							</button>
							<button
								name="button"
								type="submit"
								className="btn btn-lg d-flex align-items-center border bg-transparent btn-login-social p-2_5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									version="1.1"
									role="img"
									aria-hidden="true"
									className="crayons-icon crayons-icon--default">
									<g id="surface1">
										<path
											style={{
												stroke: 'none',
												fillRule: 'evenodd',
												fill: 'rgb(0%,0%,0%)',
												fillOpacity: 1,
											}}
											d="M 12 0 C 18.628906 0 24 5.371094 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 Z M 12 0 "></path>
										<path
											style={{
												stroke: 'none',
												fillRule: 'nonzero',
												fill: 'rgb(100%,100%,100%)',
												fillOpacity: 1,
											}}
											d="M 14.9375 7.386719 L 16.5 7.386719 L 13.082031 11.292969 L 17.105469 16.613281 L 13.953125 16.613281 L 11.488281 13.386719 L 8.664062 16.613281 L 7.097656 16.613281 L 10.753906 12.433594 L 6.894531 7.386719 L 10.125 7.386719 L 12.355469 10.335938 Z M 14.386719 15.675781 L 15.253906 15.675781 L 9.652344 8.273438 L 8.722656 8.273438 Z M 14.386719 15.675781 "></path>
									</g>
								</svg>

								<span className="w-100 flex fw-medium fs-6 justify-center items-center self-center">
									Continue with Twitter (x)
								</span>
							</button>
						</div>
						<div className="position-relative text-center">
							<hr className="my-4"></hr>
							<div className="position-absolute top-50 start-50 translate-middle px-3 bg-white fs-6">
								OR
							</div>
						</div>
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-group pb-3">
									{errors.username ? (
										<label
											htmlFor="username"
											className="text-danger">
											{errors.username.message}
										</label>
									) : (
										<label
											htmlFor="username"
											className="fw-medium text-dark">
											Username
										</label>
									)}

									<input
										type="text"
										className={clsx('form-control mt-2', {
											'border border-danger':
												errors.root?.credentials ||
												errors.username,
										})}
										{...register('username', {
											required: {
												value: true,
												message: 'Username is required',
											},
										})}
									/>
								</div>

								<div className="form-group pb-3">
									{errors.password ? (
										<label
											htmlFor="password"
											className="text-danger">
											{errors.password.message}
										</label>
									) : (
										<label
											htmlFor="password"
											className="fw-medium text-dark">
											Password
										</label>
									)}

									<input
										type="password"
										className={clsx('form-control mt-2', {
											'border border-danger':
												errors.root?.credentials ||
												errors.password,
										})}
										{...register('password', {
											required: {
												value: true,
												message: 'Password is required',
											},
										})}
									/>
								</div>

								<div className="d-flex justify-content-between">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											name="remember"
											defaultChecked
											id="remember"
										/>
										<label
											className="form-check-label"
											htmlFor="remember">
											Remember me
										</label>
									</div>
									<a
										href="#"
										className="text-decoration-none">
										Forgot password?
									</a>
								</div>
								<div className="d-grid pt-3">
									<button
										className="btn btn-primary btn-lg-login fs-6 fw-bold"
										id="login-btn"
										type="submit">
										Log In
									</button>
								</div>
							</form>
						</div>
						<div className="fst-italic text-secondary mt-4 px-7 text-center">
							<p className="m-0">
								By signing in, you are agreeing to our{' '}
								<span className="text-primary">
									privacy policy, terms of use
								</span>{' '}
								and{' '}
								<span className="text-primary">
									code of conduct.
								</span>
							</p>
						</div>
						<hr className="my-4"></hr>
						<div className="text-center">
							<p>
								New to DEV Community?{' '}
								<span className="text-primary">
									Create account.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

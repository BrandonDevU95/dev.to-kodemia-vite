export default function TrendingDetails() {
	return (
		<aside className="d-grid gap-3">
			<div id="user-details"></div>
			<div className="card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item fw-bold fs-5_5">
						Trending on{' '}
						<span className="text-primary">DEV Community </span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 44 44"
							width="24"
							height="24"
							role="img"
							aria-labelledby="ac26uezt307n27s3lgh3jy0ivowh8tlt"
							className="crayons-icon crayons-icon--default">
							<title id="ac26uezt307n27s3lgh3jy0ivowh8tlt">
								Hot
							</title>
							<g className="nc-icon-wrapper">
								<path
									fill="#F4900C"
									d="M39 23a16.96 16.96 0 00-1.04-5.868c-.46 5.389-3.333 8.157-6.335 6.868-2.812-1.208-.917-5.917-.777-8.164.236-3.809-.012-8.169-6.931-11.794 2.875 5.5.333 8.917-2.333 9.125-2.958.231-5.667-2.542-4.667-7.042-3.238 2.386-3.332 6.402-2.333 9 1.042 2.708-.042 4.958-2.583 5.208-2.84.28-4.418-3.041-2.963-8.333A16.936 16.936 0 005 23c0 9.389 7.611 17 17 17s17-7.611 17-17z"></path>
								<path
									fill="#FFCC4D"
									d="M32.394 27.999c.148 3.084-2.561 4.293-4.019 3.709-2.106-.843-1.541-2.291-2.083-5.291s-2.625-5.083-5.708-6c2.25 6.333-1.247 8.667-3.08 9.084-1.872.426-3.753-.001-3.968-4.007A11.964 11.964 0 0010 34c0 .368.023.73.055 1.09C13.125 38.124 17.342 40 22 40s8.875-1.876 11.945-4.91c.032-.36.055-.722.055-1.09 0-2.187-.584-4.236-1.606-6.001z"></path>
							</g>
						</svg>
					</li>
					<li className="list-group-item">
						<div className="d-flex">
							<img
								src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Kurt&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Brown"
								className="rounded-circle"
								width="28"
								height="28"
								alt="david russell"
							/>
							<div className="ps-2 pt-2">
								<a href="#" className="text-decoration-none">
									<p className="m-0 text-dark">
										Showcase your open source project at top
										developer conferences in Berlin this
										summer 🇩🇪 camp
									</p>
									<div>
										<span className="fs-xs text-secondary">
											#source
										</span>
										<span className="fs-xs text-secondary">
											#conference
										</span>
										<span className="fs-xs text-secondary">
											#gitHub
										</span>
									</div>
								</a>
							</div>
						</div>
					</li>
					<li className="list-group-item">
						<div className="d-flex">
							<img
								src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hatColor=Gray02&hairColor=Platinum&facialHairType=Blank&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=PastelGreen&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=DarkBrown"
								className="rounded-circle"
								width="28"
								height="28"
								alt="david russell"
							/>
							<div className="ps-2 pt-2">
								<a href="#" className="text-decoration-none">
									<p className="m-0 text-dark">
										What are you learning about this
										weekend? 🧠
									</p>
									<div>
										<span className="fs-xs text-secondary">
											#learning
										</span>
										<span className="fs-xs text-secondary">
											#begginers
										</span>
										<span className="fs-xs text-secondary">
											#discuss
										</span>
									</div>
								</a>
							</div>
						</div>
					</li>
					<li className="list-group-item">
						<div className="d-flex">
							<img
								src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Light"
								className="rounded-circle"
								width="28"
								height="28"
								alt="david russell"
							/>
							<div className="ps-2 pt-2">
								<a href="#" className="text-decoration-none">
									<p className="m-0 text-dark">
										Do You Fear Code Changes? 😱
									</p>
									<div>
										<span className="fs-xs text-secondary">
											#discuss
										</span>
									</div>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</aside>
	);
}
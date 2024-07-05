export default function FilterPostsTags() {
	return (
		<nav className="d-flex justify-content-between">
			<div>
				<p
					id="relevant"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5 fw-bold">
					Relevant
				</p>
				<p
					id="latest"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Latest
				</p>
				<p
					id="top"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Top
				</p>
			</div>
			<div>
				<p
					id="relevant"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Week
				</p>
				<p
					id="latest"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Month
				</p>
				<p
					id="top"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Year
				</p>
				<p
					id="top"
					className="m-0 px-2_5 btn social-icon py-2 fw-normal fs-5_5">
					Infinity
				</p>
			</div>
		</nav>
	);
}

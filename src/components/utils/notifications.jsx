import { toast } from 'sonner';

export const ToastSuccess = (message) => {
	toast(message, {
		classNames: {
			toast: 'border border-success-subtle bg-success text-light',
			title: 'fw-bold',
		},
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="icon icon-tabler icons-tabler-outline icon-tabler-check">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l5 5l10 -10" />
			</svg>
		),
	});
};

export const ToastError = (message) => {
	toast(message, {
		classNames: {
			toast: 'border border-danger-subtle bg-danger text-light',
			title: 'fw-bold',
		},
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="icon icon-tabler icons-tabler-outline icon-tabler-x">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M18 6l-12 12" />
				<path d="M6 6l12 12" />
			</svg>
		),
	});
};

export const ToastInfo = (message) => {
	toast(message, {
		classNames: {
			toast: 'border border-info-subtle bg-info text-light',
			title: 'fw-bold',
		},
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
				<path d="M12 9h.01" />
				<path d="M11 12h1v4h1" />
			</svg>
		),
	});
};

export const ToastWarning = (message) => {
	toast(message, {
		classNames: {
			toast: 'border border-warning-subtle bg-warning text-dark',
			title: 'fw-bold',
		},
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 9v4" />
				<path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
				<path d="M12 16h.01" />
			</svg>
		),
	});
};

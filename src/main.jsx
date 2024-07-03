import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/post-detail/:id',
				element: <PostDetailPage />,
			},
		],
	},
	{
		path: '/login',
		element: <p>Login</p>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Toaster />
		<RouterProvider router={router} />
	</>
);

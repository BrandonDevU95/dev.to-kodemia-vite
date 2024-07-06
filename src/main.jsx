import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CreatePostsPage from './pages/CreatePostsPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import ReactDOM from 'react-dom/client';
import TagsPage from './pages/TagsPage.jsx';
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
			{
				path: '/tags/:tags',
				element: <TagsPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/create-post',
		element: <CreatePostsPage />,
	},
	{
		path: '/edit-post/:id',
		element: <EditPostPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Toaster position="top-right" />
		<RouterProvider router={router} />
	</>
);

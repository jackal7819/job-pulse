import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Register from './pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <Error />,
	},
	{
		path: 'landing',
		element: <Landing />,
	},
	{
		path: 'register',
		element: <Register />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;

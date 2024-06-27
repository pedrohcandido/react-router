import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import FormPage from './routes/form';
import AnswerListPage from './routes/answerList';

import SlickPage from './routes/slick';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/form",
				element: <FormPage />
			},
			{
				path: "/answerList",
				element: <AnswerListPage />
			},
			{
				path: "/slick",
				element: <SlickPage />
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

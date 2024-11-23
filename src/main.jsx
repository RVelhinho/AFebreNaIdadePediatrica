import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Introduction } from './pages/Introduction/Introduction.jsx';
import { App } from './App.jsx';
import { Learning } from './pages/Learning/Learning.jsx';
import { BaseURL } from './config/url.js';

const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: ``,
                    element: <Introduction />
                },
                {
                    path: `learning`,
                    element: <Learning />
                }
            ]
        }
    ],
    {
        basename: BaseURL
    }
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

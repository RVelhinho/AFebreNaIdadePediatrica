import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
          element: <Introduction />,
        },
        {
          path: `learning/introduction`,
          element: <Learning startPage={'introduction'} />,
        },
        {
          path: `learning/cards-introduction`,
          element: <Learning startPage={'learningIntroduction'} />,
        },
        {
          path: `learning/cards`,
          element: <Learning startPage={'learningCards'} />,
        },
        {
          path: `learning/bibliography`,
          element: <Learning startPage={'bibliography'} />,
        },
      ],
    },
  ],
  {
    basename: BaseURL,
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
// import React from 'react';


import App from './App.jsx';
import About from './pages/AboutPage.jsx';
import Contact from './pages/ContactPage.jsx';
import Portfolio from './pages/PortfolioPage.jsx';
import Resume from './pages/ResumePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },

      {
        path: "/About",
        element: <About />,
      },

      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
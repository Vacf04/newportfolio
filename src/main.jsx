import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Projects from './routes/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/contato",
    element: <Contact />
  },
  {
    path: "/projetos",
    element: <Projects />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

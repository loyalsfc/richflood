import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Consultancy from './pages/Consultancy'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/consultancy',
        element: <Consultancy />
      },
      {
        path: '/project',
        element: <Projects />
      },
      {
        path: '/contact-us',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

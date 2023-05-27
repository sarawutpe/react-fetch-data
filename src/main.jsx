import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <p>404 Not Found!</p>,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Config router */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

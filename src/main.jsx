import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import App from './App'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { HashRouter as Router } from 'react-router-dom';


const router = createHashRouter([
  {
  path: '/',
  element: <App />,
  children: [{
    path: '',
    element: <Home />
  },
{
  path: 'about',
  element:<About />
}, {
  path: 'contact',
  element: <Contact />
}]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

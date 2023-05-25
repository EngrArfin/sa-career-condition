import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Seedetails from './components/SeeDetails/Seedetails';
import ErrorPage from './components/FourOfour/FourOFour';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [    
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('Job.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },
      {
        path: 'seeDetails',
        element: <Seedetails></Seedetails>,
        loader: () => fetch('Job.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  <App></App>
)

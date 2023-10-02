/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contactus from './components/ContactUs/Contactus'
import User from './components/User/User'
import Github from './components/Github/Github'


// const router= createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout />,
//     children:[
//         {
//           path:"",
//           element: <Home />
//         },
//         {
//           path:"about",
//           element: <About />
//         },
//         {
//           path:"contact-us",
//           element: <Contactus />
//         }
//     ]
//   }
// ])


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
     
      <Route path='contact-us' element={<Contactus />} />
      <Route path='user/:userid' element={<User />} />

      <Route path='github' element={<Github />} />

      {/* <Route loader={GetGitHubInfo} path='github' element={<Github />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>,
)

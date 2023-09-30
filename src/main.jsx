import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './Private/PrivateRoute';
import DetailPage from './components/DetailPage';
import AllCourses from './components/AllCourses';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import AddedCarts from './Pages/AddedCarts/AddedCarts';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'detailPage',
        element: <DetailPage></DetailPage>
      },
      {
        path: 'courses',
        element: <AllCourses></AllCourses>
      },
      {
        path: 'AddedCarts',
        element: <AddedCarts></AddedCarts>
      },
      {
        path: "/courses/:id",
        element: <PrivateRoute><DetailPage></DetailPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://online-course-server-gamma.vercel.app/courses/${params.id}`)
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </AuthProviders>
)

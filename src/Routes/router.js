import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ReviewsPage from '../Pages/ReviewsPage/ReviewsPage';
import SignUp from '../Pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              loader: () => fetch('https://videoscript-server-site-new.vercel.app/reviewsLimit'),
              element: <Home></Home>
            },
            {
              path: "/review",
              element: <ReviewsPage></ReviewsPage>
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <SignUp></SignUp>
            }
          ]
    }
])

export default router;
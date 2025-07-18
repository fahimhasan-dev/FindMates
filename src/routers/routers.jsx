import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BrowseListing from "../Pages/BrowseListing";

import AuthLayout from "../layouts/AuthLayout";
import AddToFindRoommate from "../Pages/AddToFindRoommate";
import PrivateRout from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";

import Loading from "../components/Loading";
import PostDetails from "../components/PostDetails";
import MyRoommatePosts from "../Pages/MyRoommatePosts";
import UpdatePostForm from "../Pages/UpdatePostForm";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../Pages/DashboardHome";
import MyProfile from "../components/MyProfile";
import AboutUsPage from "../components/AboutUsPage";


// import PostCardForBL from "../components/PostCardForBL";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/findRoommate",

        element: (
          <PrivateRout>
            <AddToFindRoommate></AddToFindRoommate>
          </PrivateRout>
        ),
      },
    
      {
        path: "/browseListing",
         loader:async () => {
          const res = await fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonsData");
          return res.json();
         } ,
        Component: BrowseListing,
         hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myRoommatePosts",
         loader:  ()=> fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonsData"),
          element: (
          <PrivateRout>
            <MyRoommatePosts></MyRoommatePosts>
          </PrivateRout>
        ),
         hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/postDetails/:id",
        loader: ({params}) =>fetch(`https://assignment-10-server-side-rho-six.vercel.app/parsonData/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRout>
            <PostDetails></PostDetails>
          </PrivateRout>
        ),
      },
      {
        path: "/updatePostForm/:id",
        loader: ({params}) =>fetch(`https://assignment-10-server-side-rho-six.vercel.app/parsonData/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRout>
            <UpdatePostForm></UpdatePostForm>
          </PrivateRout>
        ),
      },
      {
        path: '/aboutUs',
        Component:AboutUsPage,
      }
    ],
  },

  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },

    ],
  },
  {
    path: "/dashboard",
   
  element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children: [
      {
        index: true,
        Component:DashboardHome,
      },
      {
        path: '/dashboard/addPost',
          element: (
          <PrivateRout>
            <AddToFindRoommate></AddToFindRoommate>
          </PrivateRout>
        ),
      },
         {
        path: "/dashboard/MyPosts",
         loader:  ()=> fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonsData"),
          element: (
          <PrivateRout>
            <MyRoommatePosts></MyRoommatePosts>
          </PrivateRout>
        ),
         hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/dashboard/MyProfile',
        element: <PrivateRout>
          <MyProfile></MyProfile>
        </PrivateRout>
      }
      

    ]
},
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

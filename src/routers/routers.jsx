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
      // {
      //   path: "postCardBL",
      //   Component:PostCardForBL,
      // },
      {
        path: "/browseListing",
        loader:()=> fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonsData"),
        Component: BrowseListing,
         hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myRoommatePosts",
         loader:()=> fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonsData"),
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
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

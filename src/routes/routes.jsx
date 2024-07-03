import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogDetails from "../Components/BlogDetails";
import CreateBlog from "../Components/CreateBlog";
import CreateProject from "../Components/CreateProject";
import CreateSkill from "../Components/CreateSkill";
import ProjectDetails from "../Components/ProjectDetails";
import Dashboard from "../Layouts/DashBoard";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
export const router = createBrowserRouter([
      {
            path: "/",
            element: <App></App>,
            children: [
                  {
                        index: true,
                        element: <HomePage></HomePage>,
                  },
                  {
                        path: "/blogs",
                        element: <BlogPage></BlogPage>
                  },
                  {
                        path: "/projects/:id",
                        element: <ProjectDetails></ProjectDetails>
                  },
                  {
                        path: "/blogs/:id",
                        element: <BlogDetails></BlogDetails>
                  },
                  {
                        path: "/login",
                        element: <Login></Login>,
                  }
            ]
      },

      {
            path: "/register",
            element: <Register></Register>
      },
      {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            children: [
                  {
                        path: "createProject",
                        element: <PrivateRouter><CreateProject></CreateProject></PrivateRouter>
                  },
                  {
                        path: "createSkill",
                        element: <PrivateRouter><CreateSkill></CreateSkill></PrivateRouter>
                  },
                  {
                        path: "createBlog",
                        element: <PrivateRouter><CreateBlog></CreateBlog></PrivateRouter>
                  }
            ]
      }
])
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Shared/Details/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,


        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/colleges",
                element: <Colleges />
            },
            {
                path: '/collegedetails/:_id',
                element: <CollegeDetails />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/admissionform/:id",
                element: <PrivateRoute><AdmissionForm /></PrivateRoute>,
                loader:({params})=>fetch(`https://study-camp-server.vercel.app/users/colleges/${params.id}`)
            },
            {
                path: "/mycollege",
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>,
                loader:({params})=>fetch(`https://study-camp-server.vercel.app/users/colleges/${params.id}`)
            },
            {
                path: "/details/:id",
                element:<PrivateRoute><Details/></PrivateRoute>,
                loader:({params}) =>fetch(`http://localhost:5000/colleges/${params.id}`)
              },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    }

]);
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
                path: "/admissionform",
                element: <PrivateRoute><AdmissionForm /></PrivateRoute>
            },
            {
                path: "/mycollege",
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
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
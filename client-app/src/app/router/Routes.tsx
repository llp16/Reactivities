import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetials from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ApplicantList from "../../features/applicants/ApplicantList";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'applicants', element: <ApplicantList/>},
            {path: 'activities/:id', element: <ActivityDetials/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
        ]
    }
]

export const router = createBrowserRouter(routes);
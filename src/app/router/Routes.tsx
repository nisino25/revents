import { createBrowserRouter } from "react-router-dom";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../../features/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";
import App from "../layout/App";
import Scratch from "../scratch/Scratch";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/events', element: <EventDashboard />},
      {path: '/events/:id', element: <EventDetailedPage />},
      {path: '/manage/:id', element: <EventForm />},
      {path: '/createEvent', element: <EventForm />},
      {path: '/scratch', element: <Scratch />},
    ]
  }
])
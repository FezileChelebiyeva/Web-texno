import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import DashBoard from "../pages/admin/dashboard";
import DetailsPage from "../pages/site/details-page";
import HomePage from "../pages/site/home";
import NotFound from "../pages/site/not-found";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <DashBoard />,
      },
    ],
  },
];

export default ROUTES;

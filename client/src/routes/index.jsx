import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import AddSolider from "../pages/admin/add-solider";
import AddSoliderAzTu from "../pages/admin/add-solider-aztu";
import DashBoard from "../pages/admin/dashboard";
import SolidersList from "../pages/admin/soliders";
import SolidersListAzTu from "../pages/admin/soliders-aztu";
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
      {
        path: "solider-list",
        element: <SolidersList />,
      },
      {
        path: "solider-list-aztu",
        element: <SolidersListAzTu />,
      },
      {
        path: "add-solider",
        element: <AddSolider />,
      },
      {
        path: "add-solider-aztu",
        element: <AddSoliderAzTu />,
      },
    ],
  },
];

export default ROUTES;

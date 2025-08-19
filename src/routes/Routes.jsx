import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetails from "../pages/CoffeeDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=> fetch("../categories.json"),
        children:[
          {
            path:"/category/:category",
            element:<CoffeeCards/>,
            loader:()=> fetch ("../coffees.json"),
          }
        ]
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader:()=> fetch ("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader:()=> fetch ("../coffees.json"),
      },
    ],
  },
]);
export default Routes;

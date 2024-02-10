import { createBrowserRouter } from "react-router-dom";
import ForOFor from "../Pages/ForOForPage/ForOFor";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Login from "../Pages/authentication/Login";
import Registration from "../Pages/authentication/Registration";
import Checkout from "../Pages/Checkout/Checkout";
import OrderedProducts from "../Pages/OrderedProducts/OrderedProducts";
import PrivetRout from "./PrivetRout";
import ServiceAppointment from "../Pages/Home/Appoinement/ServiceAppointment";
import AllServices from "../Pages/Home/All Services/AllServices";
import AllProducts from "../Pages/Home/All Products/AllProducts";
import ServiceDetails from "../Components/ServiceDetails";
import ProductDetails from "../Components/ProductDetails";
import ProductAppointment from "../Pages/Home/Appoinement/ProductAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ForOFor />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRout>
            <Checkout />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/order",
        element: (
          <PrivetRout>
            <OrderedProducts />
          </PrivetRout>
        ),
      },
      {
        path: "/serviceAppointment/:id",
        element: (
          <PrivetRout>
            <ServiceAppointment />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/productAppointment/:id",
        element: (
          <PrivetRout>
            <ProductAppointment/>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivetRout>
            <ServiceDetails />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRout>
            <ProductDetails />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path:"/allServices",
        element:<AllServices/>
      },
      {
        path:"/allProducts",
        element:<AllProducts/>
      },
      {},
      {},
      {},
      {},
    ],
  },
]);

export default router;

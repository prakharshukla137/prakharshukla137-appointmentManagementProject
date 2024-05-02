import { createBrowserRouter } from "react-router-dom";
import App from "./Component/App";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Bridal from "./Component/Bridal";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Register from "./Component/Register";
import Admin from "./Component/Admin";
import Payment from "./Component/Payment";
import Services from "./Component/Services";
import ShowUser from "./Component/ShowUser";
import ShowService from "./Component/ShowService";
import AddService from "./Component/AddService";
import Carts from "./Component/Carts";
import Invoice from "./Component/Invoice";
import AddCategories from "./Component/AddCategories";
import Logout from "./Component/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "aboutus",
          element: <AboutUs/>,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "",
            element: <Home />,
        },
        {
            path: "contactus",
            element: <ContactUs/>,
        },
        {
          path: "register",
          element: <Register/>,
      },
        {
            path: "bridal",
            element: <Bridal />,
        },
        {
          path: "invoice",
          element: <Invoice/>,
      },
        {
          path: "admin",
          element: <Admin/>,
          children: [
            {
              path: "showuser",
              element: <ShowUser/>,
            },
            {
              path: "showservice",
              element: <ShowService/>,
            },
            {
              path: "addservice",
              element: <AddService/>,
            },
            {
              path: "addcategory",
              element: <AddCategories/>,
            }
          ]
        },
        {
          path: "payment",
          element: <Payment/>,
        },
        {
          path: "cart",
          element: <Carts/>,
        },
        {
          path: "services/:id",
          element: <Services/>,
        },
        {
          path: "logout",
          element: <Logout/>,
        }
      ],
    },
  ]);
  export default router;
//   export to index.js 
// copy from https://reactrouter.com/en/main/start/tutorial
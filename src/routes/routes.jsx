import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Dasboard from "../pages/admin/Dashboard/Dasboard";
import Products from "../pages/admin/Products/Products";
import Cart from "../pages/site/Cart/Cart";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detail/:id",
        element: <Detail/>
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dasboard />,
      },
      {
        path: "/add",
        element: <Add />,
      }, {
        path: "/products",
        element: <Products />,
      },
      
    ],
  },
];

export default ROUTES;

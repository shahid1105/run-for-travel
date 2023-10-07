import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import AboutInfo from "../Pages/Home/About/AboutInfo";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <AboutInfo></AboutInfo>
        },
      
      ]
    },
  ]);

  export default router;
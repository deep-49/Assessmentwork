import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login"; 
import { Contact } from "./pages/contact";
import { Aboutus } from "./pages/about";
import { AppLayout } from "./components/Layout/AppLayout";
import { Error } from "./pages/error";
const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<Aboutus/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"login",
                element:<Login/>
            },
        ]
    },
    
])

const App = () => {
    return <RouterProvider router={router}></RouterProvider>
  
  }
  export default App;
  
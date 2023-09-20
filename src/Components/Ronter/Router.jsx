import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";



    
        const myCreatedRoute = createBrowserRouter([
            {
              path:'/',
              element: <MainLayout></MainLayout>,
              children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/products",
                    loader:() => fetch('https://dummyjson.com/products'),
                    element:<Products></Products>
                },
                {
                    path:"/products/:id",
                    loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`),
                    element: <Product></Product>
                }
              ]
            }
          
          ])
   


export default myCreatedRoute;
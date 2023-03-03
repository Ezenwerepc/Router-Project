import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import Products from './Pages/Products';
import RootLayout from "./Pages/Root";
import ErrorPage from './Pages/Error'
import ProductDetailPage from "./Pages/ProductDetails";


const router = createBrowserRouter([
  {path: '/',
  element:<RootLayout/>,
  errorElement: <ErrorPage/>,
  children:[
{index: true,element:<HomePage/> },
{path: 'products',element:<Products/>},
{path: 'products/:productId',element:<ProductDetailPage/>},


] },
  
])
function App() {
  
  return <RouterProvider router={router}/>;
}

export default App;
                                      
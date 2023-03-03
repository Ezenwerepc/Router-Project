import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {
 const navigate = useNavigate();
 function navigateHandler (){
  navigate('/products')
 }
 return (
  <div>
 <h1>This is the welcome Page</h1>
 <p>
  Go to &nbsp;&nbsp;&nbsp;<Link to="/products">
  List of Products </Link>
  </p>
  <p>
   <button onClick = {navigateHandler}>Navigate to Products</button>
  </p>
  </div>
 );
}

export default HomePage;
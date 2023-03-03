import { Link } from "react-router-dom";
const PRODUCTS = [
 {id: 'p1', title: 'product 1'},
 {id: 'p2', title: 'product 2'},
 {id: 'p3', title: 'product 3'}
]

const Products = () => {

 
 return (
  <div>
 <h2>This is the Product Page</h2>
 <ul>
   {PRODUCTS.map((product)=>(
    <li key={product.id}>
     <Link to={`/products/${product.id}`}>{product.title}</Link>
    </li>
   ))}
 </ul>
 </div>
 );
}

export default Products;
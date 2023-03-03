import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
const MainHeader = () => {
 return (
  <header className={classes.header}>
   <nav>
    <ul className={classes.list}>
     <li >
      <NavLink to="/" className={({isActive})=> isActive? classes.active:undefined} 
      end
      >Welcome</NavLink>
     </li>
     <li>
      <NavLink to="/products" className={({isActive})=> isActive? classes.active:undefined}>Product</NavLink>
     </li>
    </ul>
   </nav>
  </header>
 );
}

export default MainHeader;
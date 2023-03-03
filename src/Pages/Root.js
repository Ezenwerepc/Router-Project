import { Outlet } from "react-router-dom";
import MainHeader from '../Components/MainHeader';
import classes from '../Pages/Root.module.css';
function RootLayout() {
 return (
  <div>
 <MainHeader/>
 <main className={classes.content}>
 <Outlet/>
 </main>
 
 </div>);
}

export default RootLayout;
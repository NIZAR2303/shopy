import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar(props){

return(

    <nav className="navbar">

         <h3 className="logo">SHOPNOW</h3>

         <div>

         <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>


         </ul>
         </div>

         <div>
            <ul>
            <li>Search</li>
            <li>
               <Link to="/wishlist">
                     ❤️Wishlist ({props.whislistCount})
                 </Link>

            </li>
            <li> 
               <Link to= "/Cart">
                  🛒 Cart ({props.cartCount})</Link>
                  
                  </li>
                


                    <li> <Link to="/login">Login</Link>
                   </li>
            </ul>


         </div>

    </nav>









)


}


export default Navbar
import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from'../Assets/logo.png'
import Cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const[menue,setMenue]= useState("shop");
    const{getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}alt="" />
            <p> ShopHub </p>

        </div>
        <ul className="nav-menue">
        <li onClick={()=>{setMenue("shop")}}> <Link style={{textDecoration:'none'}} to = './'> Shop </Link>{menue==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("mens")}}> <Link style={{textDecoration:'none'}}  to ='./mens'> Men </Link>{menue==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("womens")}}><Link style={{textDecoration:'none'}}  to ='./womens'> Women </Link>{menue==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("kids")}}><Link style={{textDecoration:'none'}}  to ='./kids'>Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("Dashboard")}}><Link style={{textDecoration:'none'}}  to ='./Dashboard'>Dashboard</Link>{menue==="Dashboard"?<hr/>:<></>}</li>
          
      
        </ul>
       
        <div className="nav-login-cart">
       <Link to ='/login'> <button> Login </button> </Link> 
        <Link to ='./cart'> <img src= {Cart_icon} alt="" /> </Link>
        <div className="nav-cart-count"> {getTotalCartItems()} </div>
        
        </div>
        
      
      
    </div>
  )
}

export default Navbar  
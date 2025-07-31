import React from 'react'
import "../Style/Navbar.css"

const Navbar = ({size , setshow}) => {
  return (
    <nav>
    <div className='nav-box'>
        <span className='my-shop' onClick={()=>setshow(true)}>My Shopping</span>
        <div>
            <span className='cart'>
            <i className="fas fa-cart-plus"   onClick={()=>setshow(false)}></i>
            <span>{size}</span>
            </span>
        </div>
    </div>
    </nav>
  )
};
export default Navbar;

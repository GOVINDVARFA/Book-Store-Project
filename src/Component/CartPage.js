import React, { useEffect, useState } from 'react';
import "../Style/CartPage.css";

const CartPage = ({ cart, setcart }) => {
  const [price, setPrice] = useState(0);

  const handleprice=()=>{
    let ans=0
    cart.map((item)=>{
      ans+= item.amount*item.price
    })
    setPrice(ans)
  }
const Remove = (id)=>{
  const filteritem = cart.filter((item)=>
     item.id !== id
 );
 setcart(filteritem)
  }
  useEffect(()=>{
    handleprice()
  })


  return (
    <article className="cart-page">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <img src={item.img} alt={item.title} className="cart-item-img" />
            <p className="cart-item-title">{item.title}</p>
          </div>
          <div className="cart-item-quantity">
            <button className="quantity-btn">+</button>
            <button className="quantity-btn">{item.amount}</button>

            <button className="quantity-btn">-</button>
          </div>
          <div className="cart-item-price">
            <span className="item-price">{item.price}</span>
            <button className="remove-btn" onClick={()=>Remove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <span>Total Price of your Cart</span>
        <span className="total-price-value">Rs {price}</span>
      </div>
    </article>
  );
};

export default CartPage;

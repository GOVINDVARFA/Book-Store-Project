import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Cartpage from './Component/CartPage';

const App = () => {
  const [cart , setcart] = useState([]);
  const [show , setshow] = useState(true)
  const handleChange = (item)=>{
    let ispresent = false;
    cart.forEach((product)=>{
      if(item.id === product.id) 
        ispresent = true;
    });
    if(ispresent)
      return ;
    setcart([...cart,item]);

  };

  return (
    <div>
  <Navbar size = {cart.length} setshow={setshow}/>
  {show ?<Main handleChange={handleChange}/>: <Cartpage cart = {cart} setcart = {setcart}/> }

    </div>
  )
}
export default App;

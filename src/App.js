
import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './Homepage'
import Bar from './Bar';
import Cart from './Cart'


function App() {
  const [cloths, setCloths] = useState([])
  const [search, setSearch] = useState("")
  const [toCart, setToCart] = useState([])
 

  useEffect(()=>{
    const request = async() => {
      let req = await fetch ("http://localhost:3000/clothing")
      let res = await req.json()
      console.log(res)
      setCloths(res)
    }
    request()
  },[])

const addToCart = (cloth) => {
  setToCart([...toCart,cloth])
}
  

  
  
  return (
    
    <div className="App">
      <h1>
      <Bar search={search} setSearch={setSearch}/>
      </h1>
      <h2>
      <Cart toCart={toCart} setToCart={setToCart}/>
      </h2>
      <h3>
      <Homepage cloths ={cloths} search={search} addToCart={addToCart}/>
      </h3>
    </div>
    
  );
}

export default App;

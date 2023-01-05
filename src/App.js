
import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './Components/Homepage'
import Bar from './Components/Bar';
import Cart from './Components/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from './Components/Wishlist';


function App() {
  const [cloths, setCloths] = useState([])
  const [search, setSearch] = useState("")
  const [toCart, setToCart] = useState([])
  const [toWishlist, setToWishlist] = useState([])
 

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

const addToWishlist = (cloth) =>{
  setToWishlist([...toWishlist,cloth])
}
  
  return (
  <Router>
    <div className="App">
      <Routes>
         <Route
          path="/"
          element={
            <>
            <Bar search={search} setSearch={setSearch}/>
            <Homepage cloths ={cloths} search={search} addToCart={addToCart} addToWishlist={addToWishlist}/>
            </>
         }
         />
         <Route
         path="/Cart"
         element={
            <>
            <Bar search={search} setSearch={setSearch}/>
            <Cart toCart={toCart} setToCart={setToCart} />
            </>
         }
          />
          <Route
         path="/Wishlist"
         element={
            <>
            <Bar search={search} setSearch={setSearch}/>
            <Wishlist cloths ={cloths} toWishlist={toWishlist} setToWishlist={setToWishlist}/>
            </>
         }
          />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;

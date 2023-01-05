
import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './Components/Homepage'
import Bar from './Components/Bar';
import Cart from './Components/Cart'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const [cloths, setCloths] = useState([])
  const [search, setSearch] = useState("")
  const [toCart, setToCart] = useState([])
 
  // const Router = createBrowserRouter({
  //   path: "/",
  //   element: <Bar search={search} setSearch={setSearch}/>

  // })

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
      {/* <Router/> */}
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

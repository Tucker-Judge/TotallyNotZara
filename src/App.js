import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './Homepage'
import Bar from './Bar';
import Cart from './Cart'
function App() {
  const [cloths, setCloths] = useState([])
  const [search, setSearch] = useState("")
  const [inCart,setInCart] = useState([])
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
    if(inCart.map(p=>p.id).includes(cloth.id)) return;
    setCloths([...inCart,cloth])
  }
  const filter = cloths.filter((cloth) => {return(
    cloth.name.toLowerCase().includes(search.toLowerCase())
  )})
  return (
    <div className="App">
      <Bar search={search} setsearch={setSearch}/>
      <Cart inCart = {inCart} setCloths={setCloths} setInCart = {setInCart}/>
      <Homepage cloths = {cloths} addToCart={addToCart}/>
    </div>
  );
}
export default App;

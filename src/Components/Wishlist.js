import ClothingCard from "./ClothingCard"


function Wishlist ({toWishlist,setToWishlist}) {
  const removeFromCart = (cloth) => {
      setToWishlist((wishlist) => {
          return[ ...wishlist.filter((c) => { return c.id!==cloth.id})]
      })
  }
   
      return(
          <div className = "container">
              {
              toWishlist.map((cloth) => {
                  return(
                      <div className="card">
                          <img className = "pictureSize" src = {cloth.image} alt = "missing"/>
                          <p> $ {cloth.price}</p>
                          <button onClick = {() => {removeFromCart(cloth)}}> remove from cart </button>
                      </div>
                  )
              })
              }
          </div>
      )
  }
  
export default Wishlist;



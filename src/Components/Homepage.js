import ClothingCard from "./ClothingCard"

function Homepage ({cloths,search,addToCart,addToWishlist}) {
  const filter = cloths.filter((cloth) => {return(
        cloth.name.toLowerCase().includes(search.toLowerCase())
      )})

    return(
      <div className = "container">
        {
    filter.map((cloth) => {
        return(
            <ClothingCard className = "container" cloth = {cloth} addToCart={addToCart} addToWishlist={addToWishlist}/>
        )
    })
  }
    </div>
)}
export default Homepage
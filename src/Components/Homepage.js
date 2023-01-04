import ClothingCard from "./ClothingCard"

function Homepage ({cloths,search,addToCart}) {
  const filter = cloths.filter((cloth) => {return(
        cloth.name.toLowerCase().includes(search.toLowerCase())
      )})

    return(
      <div className = "container">
        {
    filter.map((cloth) => {
        return(
            <ClothingCard className = "container" cloth = {cloth} addToCart={addToCart}/>
        )
    })
  }
    </div>
)}
export default Homepage
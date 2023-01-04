import ClothingCard from "./ClothingCard"
function Homepage ({cloths,addToCart}) {
    return(
    cloths.map((cloth) => {
        return(
            <ClothingCard cloth = {cloth} addToCart={addToCart}/>
        )
    })
)}
export default Homepage
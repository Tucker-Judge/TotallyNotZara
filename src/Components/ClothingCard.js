function ClothingCard({cloth,addToCart}) {
    return(
        <div className = "card">
            <img className = "pictureSize" src = {cloth.image} alt="hey"></img>
            <p> {cloth.name} </p> <br/>
            <p> $ {cloth.price} </p> <br/>
            <p> {cloth.category} </p> <br/>
            <p> number of people that wished this : {cloth.wishlisted}</p> <br/>
            <button> add to wishlist </button>
            <button onClick={()=>{addToCart(cloth)}}> add to cart </button>
        </div>
    )
}
export default ClothingCard
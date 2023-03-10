function ClothingCard({cloth,addToCart,addToWishlist}) {
    return(
        <div className = "card">
            <img className = "pictureSize" src = {cloth.image} alt="hey"></img>
            <p> {cloth.name} </p> 
            <p> $ {cloth.price} </p> 
            <p> {cloth.category} </p> 
            <p> number of people that wished this : {cloth.wishlisted}</p>
            <button onClick={()=>{addToWishlist(cloth)}}> add to wishlist </button>
            <button onClick={()=>{addToCart(cloth)}}> add to cart </button>
        </div>
    )
}



export default ClothingCard
function Cart ({toCart,setToCart}) {
    const removeFromCart = (cloth) => {
        setToCart((cart) => {
            return[ ...cart.filter((c) => { return c.id!==cloth.id})]
        })
    }
     
        return(
            <div className = "container">
                {
                toCart.map((cloth) => {
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
    export default Cart
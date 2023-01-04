function Cart ({inCart, setinCart}) {
    return(
        inCart.map((cloth) => {
            return(
                <div>
                    <img src = {cloth.image} alt = "onwards"></img>
                </div>
            )
        })
    )
}
export default Cart
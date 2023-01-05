
import {useNavigate} from 'react-router-dom'

function Bar ({search,setSearch}){
    let navigate = useNavigate();
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    return(
        <div className = "banner">
            <div className = "logo">
                <img onClick={() => {navigate('/')}} src="https://c8.alamy.com/comp/2B6KHTX/zara-collection-19-logo-2B6KHTX.jpg" alt="Not Zara logo" href="/"/> 
            </div>
            <h1 className = "banner_title"> Totally Not Zara </h1> <br/>
            <label className = "banner_search"></label> <br/>
            <input type = "text" className = "banner_search" value = {search} onChange = {handleSearch} placeholder="Search Clothing... "/> <br/>
            <button onClick={() => {navigate('/Cart')}} className = "Cart"> Cart </button>
            <button onClick={() => {navigate('/Wishlist')}}  className = "Wishlist"> Wishlist </button>

        </div>
        
    )
}

export default Bar


function Bar ({search,setSearch}){

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    return(
        <div className = "banner">
            <div className = "logo">
                <img src="https://c8.alamy.com/comp/2B6KHTX/zara-collection-19-logo-2B6KHTX.jpg" alt="Not Zara logo" href="/"/> 
            </div>
            <h1 className = "banner_title"> Totally Not Zara </h1> <br/>
            <label className = "banner_search"></label> <br/>
            <input type = "text" className = "banner_search" value = {search} onChange = {handleSearch} placeholder="Search Clothing... "/> <br/>
            <button className = "log"> Login </button>
            <button className = "log" >Add to Cart</button>
        </div>
        
    )
}

export default Bar
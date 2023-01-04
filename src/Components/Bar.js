

function Bar ({search,setSearch}){

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    return(
        <div className = "banner">
            <h1 className = "banner_title"> Totally not Zara </h1> <br/>
            <label className = "banner_title"> search clothing </label> <br/>
            <input type = "text" className = "banner_title" value = {search} onChange = {handleSearch}/> <br/>
            <button className = "log"> login </button>
            
        </div>
        
    )
}

export default Bar
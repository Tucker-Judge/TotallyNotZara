function Bar ({search , setSearch}){
    const searching = (event)=> {
        return(
            setSearch(event.target.value)
        )
    }
    return(
        <div className = "banner">
            <h1 className = "banner_title"> Totally not Zara </h1> <br/>
            <label className = "banner_title"> search clothing </label> <br/>
            <input className = "banner_title" value = {search} onChange={searching}></input> <br/>
            <button className = "log"> login </button>
        </div>
    )
}
export default Bar
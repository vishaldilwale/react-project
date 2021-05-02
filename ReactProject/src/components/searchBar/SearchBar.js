import React, { useState } from "react";
import "./searchBar.css";
let SearchBar=()=>{
    let [search,setSearch]=useState(undefined);
    return(
        <div className="w-100 text-center ">
            <div className="searchBarSection">
                <i className="fas fa-search searchIcon"/>
                <input 
                placeholder="artists, products, videos, and more" 
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                className="form-control searchInputField border-0 bg-transparent"/>
                <i onClick={()=>setSearch("")} className="fa fa-times searchCloseIcon"/>
            </div>
        </div>
    )
}
export default SearchBar;
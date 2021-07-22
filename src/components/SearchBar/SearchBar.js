import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getSlots} from "../../store/actions/index"
import './searchBar.css'


function SearchBar({reference, click}){
    const dispatch = useDispatch();
    const [city, setCity] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setCity(e.target.value)
    }
    const handleSearch = async (e) => {
        e.preventDefault();
        dispatch(getSlots(city))
    }

    return(
        <div ref={reference}>
        <h2>Find the worst parking lots from: </h2>
       <form onSubmit={(e) => handleSearch(e)}>
           <input className="input-text" placeholder="City or State" onChange={(e) => handleChange(e)}></input> 
           <br></br>
           <input className="search-button" type="submit" value="Search"></input>
       </form>
       </div>
    )
};


export default SearchBar;
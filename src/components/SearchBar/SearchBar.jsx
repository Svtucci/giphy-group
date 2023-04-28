//TODO imports
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";



function SearchBar() {
    const dispatch = useDispatch();
    const [findGif, setfindGif] = useState('');


    const handleChange = (event) => {
        event.preventDefault();
        setfindGif(event.target.value)
    };

    const submit = () => {
        const action = { type: 'SET_GIF_SEARCH', payload: searchGif }
        dispatch(action);
    };


    //! What will display
    return (

        <>
            <form>
                <label htmlFor="search-input">Search:</label>
                <input type="text" id="search-input" placeholder="Enter your search..." onChange={handleChange} />
                <button type="submit" onClick= {submit}> Submit </button>
            </form>
        </>



    )

}; //End SearchBar

export default SearchBar; 
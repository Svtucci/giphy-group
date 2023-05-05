//TODO IMPORT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FindGif from "./FindGif";

function SearchResults() {

    const allGifs = useSelector(store => store.searchResult);
    const dispatch= useDispatch();

   useEffect (() => {
    // dispatch({type: 'SET_GIF_SEARCH'})
   }, []); 

    // we got an error saying .map was having issues populating 
    return (
        <>
            <div>
                {allGifs.length === 0 ? (
                    <h2>Loading</h2>
                ) : (
                    allGifs.map((gif, i) => {
                        return (
                            <img src={gif.images.downsized_medium.url} />
                        )
                    })
                )
                }
            </div>
        </>
    )

}; // End SearchResults()

export default SearchResults;
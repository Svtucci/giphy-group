//TODO IMPORT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FindGif from "./FindGif";

function SearchResults() {

    const allGifs = useSelector(store => store.searchList);



    // we got an error sayinh .map was having issues populating 
    return (
        <>
            <div>
                <h3>Search Results of Giphys</h3>
                {
                    allGifs && allGifs.map((gif, i) => (
                        <FindGif key={i} gif={gif} />
                    ))
                }
            </div>
        </>
    )

}; // End SearchResults()

export default SearchResults;
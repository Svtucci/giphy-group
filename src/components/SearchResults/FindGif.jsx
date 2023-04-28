import { useDispatch } from "react-redux";
import { useState } from "react";



function FindGif({ gif }) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);


    //const toggleFavorite = (event) => {....}
        //TODO will be adding a conditional and action/dispatch here later

    //TODO add an onclick to the img when we get to adding favorites!!
    //may want to change "downsized_medium.url" to a different display
    
    return (

        <div>
            {
                gif.images && gif.images.original && (
                    <img src={gif.images.original.url} alt={gif.title} />
                )
            }
        </div>
    )
}; // End FindGif()

export default FindGif;
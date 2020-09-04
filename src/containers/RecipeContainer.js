import React from 'react';

function RecipeContainer() {
    
    function searchReceipes() {
        fetch("http://localhost:3000/receipe_call", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                user: localStorage.user_id
            })
        })
    }
    
    
    return(
        <div>
            <h4>Recipe Container</h4>
            <button onClick={searchReceipes}>Search for Recipes</button>
        </div>
    )
}

export default RecipeContainer;
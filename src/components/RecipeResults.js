import React from 'react'

function recipeResults() {
        
    function searchReceipes() {
        fetch("http://localhost:3000/recipe_call", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                user_id: localStorage.user_id
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    
    return(
        <div>
            <button onClick={searchReceipes}>Search for Recipes</button>
            <button>Back to Pantry</button>
        </div>
    )
}

export default recipeResults;
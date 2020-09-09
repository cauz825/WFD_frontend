import React, {useState} from 'react'
import RecipeModal from '../components/RecipeModal'
import {Button} from 'semantic-ui-react'

function RecipeResults() {

    const [recipeResults, setRecipeResults] = useState([])
    const [open, setOpen] = useState(false)
    const [recipe_id, setId] = useState("")
        
    function searchReceipes() {
        fetch("http://localhost:3000/recipe_call", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                user_id: localStorage.user_id
            })
        })
        .then(resp => resp.json())
        .then(data => setRecipeResults(data))
    }

    function openModal(id) {
        setId(id)
        setOpen(true)
    }
    
    return(
        <div>
            <div>
                <ul>
                    {recipeResults ? recipeResults.map(recipe => 
                        <li className={recipe.id}>
                            <h4>{recipe.title}</h4>
                            <img src={recipe.image} alt=""></img>
                            <p>Used Ingredients: {recipe.usedIngredientCount}<br></br>
                            Missing Ingredients: {recipe.missedIngredientCount}
                                <ul>
                                    {recipe.missedIngredients.map(ingr => <li>{ingr.name}</li>)}
                                </ul>
                            <Button onClick={() => openModal(recipe.id)}>Show Recipe</Button>
                            </p>
                        </li>) : null}
                    <br></br>
                        <RecipeModal open={open} recipe_id={recipe_id} />
                </ul>
            </div>
            <Button onClick={searchReceipes}>Search for Recipes</Button>
            <a href='/pantry'><Button>Back To Pantry</Button></a>
        </div>
    )
}

export default RecipeResults;
import React, { useState, useEffect } from 'react'
import RecipeModal from '../components/RecipeModal'
import { Button, Image, Grid, Container } from 'semantic-ui-react'

function RecipeResults() {

    const [recipeResults, setRecipeResults] = useState([])
    const [open, setOpen] = useState(false)
    const [recipe_id, setId] = useState("")

    useEffect(() => {
        searchReceipes()
    }, [])
        
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
        <Container>
            <a href='/pantry'><Button>Back To Pantry</Button></a>
            <Grid celled>
                {recipeResults 
                    ? recipeResults.map(recipe => 
                        <Grid.Row className={recipe.id}>
                            <Grid.Column width={3}>
                                <Image src={recipe.image} alt="" size="large"/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h4>{recipe.title}</h4>
                                <p>Used Ingredients: {recipe.usedIngredientCount}<br></br>
                                Missing Ingredients: {recipe.missedIngredientCount}
                                    <ul>
                                        {recipe.missedIngredients.map(ingr => <li>{ingr.name}</li>)}
                                    </ul>
                                <Button onClick={() => openModal(recipe.id)}>Show Recipe</Button>
                                </p>
                            </Grid.Column>
                        </Grid.Row>)
                    : null}
                    <RecipeModal open={open} recipe_id={recipe_id} />
            </Grid>
        </Container>
    )
}

export default RecipeResults;
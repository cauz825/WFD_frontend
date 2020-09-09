import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'

function PantryForm(props) {

    const [ingr, setIngredient] = useState("")

    function handleIngredientName(e){
        setIngredient(e.target.value)
    }
    
    function newIngredient() {
        fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                ingredient: {name: ingr},
                user: {user_id: localStorage.user_id}
            })
        })
        .then(resp => resp.json())
        .then(data => props.rePull(data))
    }

    function afterSubmit(e) {
        e.preventDefault()
        e.target.reset()
    }
    
    return(
        <Form onSubmit={afterSubmit}>
            <input onChange={handleIngredientName} type="text" placeholder="Ingredient Name" />
            <Button onClick={newIngredient} type="Submit">Add to Inventory</Button>
            <a href='/recipe'><Button>Search For Recipes</Button></a>
        </Form>
    )
}

export default PantryForm;
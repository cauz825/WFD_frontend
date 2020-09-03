import React, {useState} from 'react';

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
        .then(data => createLink(data))
    }

    function createLink(data) {
        fetch("http://localhost:3000/user_ingredients", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                user_id: localStorage.user_id,
                ingredient_id: data.id
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
        <form onSubmit={afterSubmit}>
            <input onChange={handleIngredientName} type="text" placeholder="Add Ingredient" />
            <button onClick={newIngredient} type="Submit">Add to Inventory</button>
        </form>
    )
}

export default PantryForm;
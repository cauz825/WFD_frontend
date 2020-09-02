import React, {useState} from 'react';

function PantryForm() {

    const [ingredient, setIngredient] = useState("")

    function handleIngredientName(e){
        setIngredient(e.target.value)
    }
    
    function newIngredient(e) {
        e.preventDefault()
        fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                ingredient
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    }
    
    return(
        <form>
            <input onChange={handleIngredientName} type="text" placeholder="Add Ingredient" />
            <button onSubmit={newIngredient} type="Submit">Add to Inventory</button>
        </form>
    )
}

export default PantryForm;
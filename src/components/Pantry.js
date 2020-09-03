import React, {useState, useEffect} from 'react';
import PantryForm from '../components/PantryForm'


function Pantry(props) {

    const [userPantry, setUserPantry] = useState([])

    useEffect(initialPull, [])
    
    function initialPull() {
        fetch(`http://localhost:3000/users/${localStorage.user_id}`)
        .then(resp => resp.json())
        .then(userData => 
            {console.log(userData)
            setUserPantry(userData.user_ingredients)})

        console.log("anything")
    }

    function deleteIngredient(e) {
        fetch(`http://localhost:3000/user_ingredients/${e.target.className}`, {
            method:"DELETE"
        })
        .then (resp => resp.json())
        .then(data => {initialPull()})
    }
    
    return(
        <div>
            <ul>
                {userPantry.map(ingr => 
                    <li>
                        {ingr.ingredient.name}<button 
                            onClick={deleteIngredient} 
                            className={ingr.id}>x</button>
                    </li>)}
            </ul>
            <PantryForm rePull={initialPull}/>
            <button>Search For Recipes</button>
        </div>
    )
}

export default Pantry
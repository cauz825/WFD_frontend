import React, {useState} from 'react';
import PantryForm from '../components/PantryForm'


function Pantry(props) {

    const [userIngredients, setUserIngredients] = useState([])
    
    function initialPull() {
        fetch("http://localhost:3000/user_ingredients")
        .then(resp => resp.json())
        .then(data => filterData(data))
    }

    function filterData(data) {
        let filteredData = data.filter(Ingr => Ingr.user_id === parseInt(localStorage.user_id))
    }
    
    return(
        <div>
            <ul>
                {props.currentPantry.map(ing => <li>{ing}</li>)}
            </ul>
            <PantryForm addToPantry={props.addToPantry} />
            <button onClick={initialPull}>Show User's Ingredients</button>
        </div>
    )
}

export default Pantry
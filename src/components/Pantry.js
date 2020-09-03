import React, {useState, useEffect} from 'react';
import PantryForm from '../components/PantryForm'


function Pantry(props) {

    const [userPantry, setUserPantry] = useState([])

    useEffect(initialPull, [])
    
    function initialPull() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(data => filterData(data))
    }

    function filterData(data) {
        let userData = data.filter(User => User.id === parseInt(localStorage.user_id))
        let userPantry = userData[0].ingredients
        setUserPantry(userPantry)
    }

    function deleteIngredient(e) {
        console.log(e.target.className)
    }
    
    return(
        <div>
            <ul>
                {userPantry.map(ingr => 
                    <li>
                        {ingr.name}<button 
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
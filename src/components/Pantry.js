import React, {useState, useEffect} from 'react';
import PantryForm from '../components/PantryForm';
import { Button, List, Grid, Header } from 'semantic-ui-react'


function Pantry() {

    const [userPantry, setUserPantry] = useState([])

    useEffect(initialPull, [])
    
    function initialPull() {
        fetch(`http://localhost:3000/users/${localStorage.user_id}`)
        .then(resp => resp.json())
        .then(userData => setUserPantry(userData.user_ingredients))
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
                <Grid columns={2} divided>
                    <Grid.Column>
                        <Header as='h2'>Current Pantry</Header>
                        <List>
                            {userPantry.map(ingr => 
                                <List.Item>
                                    {ingr.ingredient.name}<button 
                                        onClick={deleteIngredient} 
                                        className={ingr.id}>x</button>
                                </List.Item>)}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2'>Add Ingredients</Header>
                        <PantryForm rePull={initialPull}/>
                    </Grid.Column>
                </Grid>
            </div>
    )
}

export default Pantry
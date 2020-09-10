import React, {useState, useEffect} from 'react';
import PantryForm from '../components/PantryForm';
import { List, Grid, Header } from 'semantic-ui-react'
import PantryImage from '../images/pantry.jpg'
import '../App.css'


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

    const pantryStyle = {
        width: "100%",
        height: "800px",
        backgroundImage: `url(${PantryImage})`
    }

    const pantryContainerStyle = {
        backgroundColor: 'rgba(160, 160, 160, 0.75)',
        paddingLeft: 200
    }
    
    return(
            <div className="background_image" style={pantryStyle}>
                <Grid columns={2} divided verticalAlign='top' style={pantryContainerStyle}>
                    <Grid.Column textAlign="left" width={6}>
                        <br></br>
                        <Header as='h2'>Current Pantry</Header>
                        <List>
                            {userPantry.map(ingr => 
                                <List.Item>
                                    <button color="red" onClick={deleteIngredient} className={ingr.id}>
                                        x
                                    </button> {ingr.ingredient.name}
                                </List.Item>)}
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <br></br>
                        <Header as='h2'>Add Ingredients</Header>
                        <PantryForm rePull={initialPull}/>
                    </Grid.Column>
                </Grid>
            </div>
    )
}

export default Pantry
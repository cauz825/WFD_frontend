import React from 'react';
import PantryForm from '../components/PantryForm'


function Pantry(props) {
    return(
        <div>
            <ul>
                {props.currentPantry.map(ing => <li>{ing}</li>)}
            </ul>
            <PantryForm addToPantry={props.addToPantry} />
        </div>
    )
}

export default Pantry
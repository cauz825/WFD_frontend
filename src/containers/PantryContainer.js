import React from 'react';
import Pantry from '../components/Pantry'

function PantryContainer(props) {
    return(
        <div>
            <h4>Pantry Container</h4>
            <Pantry 
                currentPantry={props.currentPantry}
                addToPantry={props.addToPantry} />
        </div>
    )
}

export default PantryContainer;
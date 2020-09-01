import React from 'react';
import PantryForm from '../components/PantryForm'


function Pantry(props) {
    return(
        <div>
            <ul>
                <li>Test inventory 1</li>
                <li>Test inventory 2</li>
                <li>Test inventory 3</li>
            </ul>
            <PantryForm addToPantry={props.addToPantry} />
        </div>
    )
}

export default Pantry
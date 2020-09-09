import React from 'react';
import Pantry from '../components/Pantry'
import { Container } from 'semantic-ui-react'

function PantryContainer() {
    return(
        <Container>
            <div>
                <Pantry />
            </div>
        </Container>
    )
}

export default PantryContainer;
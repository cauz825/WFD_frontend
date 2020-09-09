import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import SteakImage from '../images/steak_platter.jpg'

function HomePage() {

    const homePageStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url(${SteakImage})`
    }


    return(
        <Container>
           <a href="/login">
            <div style={homePageStyle}>
                <Header as="h1">What's For Dinner</Header>
                <p color="black">Where home cooks can find recipes based on their current ingredients</p>
            </div>
           </a>
        </Container>
    )
}

export default HomePage;
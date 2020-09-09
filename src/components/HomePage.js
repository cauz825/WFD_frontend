import React from 'react'
import { Container, Header, Button, Segment } from 'semantic-ui-react'
import TableImage from '../images/food_table.jpg'
import '../App.css';

function HomePage() {

    const homePageStyle = {
        // width: "100%",
        // height: "600px",
        backgroundImage: `url(${TableImage})`
    }


    return(
        <div className="App" style={homePageStyle}>
        <Segment inverted vertical textAlign="center">
          <Container className="content">
            <Header inverted as="h1">
              What's For Dinner
            </Header>
            <p>
              Welcome to Whats For Dinner, a site for home cooks to discover new recipes based on what's on-hand
            </p>
            <a href='/login'><Button size="huge" primary>Log In</Button></a>
            <a href='signup'><Button size="huge" primary>Sign Up</Button></a>
          </Container>
          <Segment inverted vertical as="footer">
            Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
            by{" "}
            <a href="https://github.com/semantic-ui-forest">
              @Semantic-UI-Forest
            </a>
            .
          </Segment>
        </Segment>
      </div>
        
        
        )
}

export default HomePage;
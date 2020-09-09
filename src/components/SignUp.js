import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import SteakImage from '../images/steak_platter.jpg'



function SignUp() {

    const homePageStyle = {
        // width: "100%",
        // height: "600px",
        backgroundImage: `url(${SteakImage})`
    }
   
    return(
        <div style={homePageStyle}>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment>
                            <Header>Sign Up For Account</Header>
                                <input type="text" placeholder="Email Address" />
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Retype Password" />
                            <Button type="Signup">Sign Up</Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already Have An Account? <a href='/login'>Log In</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SignUp;

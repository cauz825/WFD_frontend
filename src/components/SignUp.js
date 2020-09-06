import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function SignUp() {
    
   
    return(
        <div>
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

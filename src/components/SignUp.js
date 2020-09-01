import React from 'react'

function SignUp() {
    
   
    return(
        <form onSubmit={(e) => this.signUp(e)}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="Submit">Sign Up</button>
        </form>
    )
}

export default SignUp;

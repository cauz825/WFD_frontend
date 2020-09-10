import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {
    render() {
            return(
                <Menu inverted>
                    <a href='/'>
                        <Menu.Item header><Icon name="food" /> What's For Dinner</Menu.Item>
                    </a>
                    <a href="/pantry">
                        <Menu.Item className="pantry" name="Pantry">
                        </Menu.Item>
                    </a>
                    <a href="/recipe">
                        <Menu.Item className="recipe" name="Recipes">
                        </Menu.Item>
                    </a>
                    {/* <a href="/aboutme">
                        <Menu.Item className="aboutMe" name="About Me">
                        </Menu.Item>
                    </a> */}
                    <Menu.Menu position='right'>
                        <a href="/login">
                            <Menu.Item className="login" name={localStorage.user_id ? "Log Out" : "Log In"}>
                                <Button>{localStorage.user_id ? "Log Out" : "Log In"}</Button>
                            </Menu.Item>
                        </a>
                        <a href="/signup">
                            {localStorage.user_id ? null 
                                : <Menu.Item className="signin" name="Sign Up">
                                    <Button primary>Sign Up</Button>
                                </Menu.Item>}
                        </a>
                    </Menu.Menu>
                </Menu>
            )}
        }


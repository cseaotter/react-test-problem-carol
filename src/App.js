import React from 'react';
import {Button} from './Components/Button/Button'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //handler goes here
    handleClick() {
        this.setState(prevState => ({
            greeting: !prevState.greeting
        }));
    }

    render() {
        return (
            <div>
                <p>Greetings!</p>
                <p><Button greeting={this.state.greeting} onClick={this.handleClick}></Button></p>
            </div>
        );
    }
}
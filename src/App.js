import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //handler goes here
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <p>Greetings!</p>
                <p>
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'click me' : 'thanks'}
                    </button>
                </p>
            </div>
        );
    }
}
import React from 'react';

export default class App extends React.Component {
    display() {
        this.props.display();
    }

    render() {
        return <div>
            <button onClick={this.display.bind(this)}>+</button>
        </div>;
    }
}
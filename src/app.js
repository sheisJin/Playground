import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                hello world!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
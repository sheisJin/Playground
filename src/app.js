import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './mixin.scss'
import './reset.scss';
import './base.scss';
import './style.scss';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                hello world!
                <div className="info">aaa</div>
                <div className="alert">aaa</div>
                <div className="success">aaa</div>

                <ul>
                <li>aa</li>
                <li>
                    <ul>
                    <li>22aa</li>
                    <li>22bb</li>
                    </ul>
                </li>
                </ul>

                <ol>
                    <li>33aa</li>
                    <li>33bb</li>
                </ol>

                <code>code</code>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
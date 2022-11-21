import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
import './scss/index.scss';
import Header from './module/_header';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <img src={logo}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
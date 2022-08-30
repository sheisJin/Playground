import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class App extends Component {

    render() {
        return (
            <div className="wrap">
                <h1>PrimeReact</h1>

                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
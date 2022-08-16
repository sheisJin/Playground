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

                <h5>Basic</h5>
                <Button label="Submit" aria-label="Submit"  />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Severities</h5>
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Help" className="p-button-help" />
                <Button label="Danger" className="p-button-danger" />

                <h5>Raised Buttons</h5>
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Help" className="p-button-raised p-button-help" />
                <Button label="Danger" className="p-button-raised p-button-danger" />

                <h5>Rounded Buttons</h5>
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                <Button label="Success" className="p-button-rounded p-button-success" />
                <Button label="Info" className="p-button-rounded p-button-info" />
                <Button label="Warning" className="p-button-rounded p-button-warning" />
                <Button label="Help" className="p-button-rounded p-button-help" />
                <Button label="Danger" className="p-button-rounded p-button-danger" />

                <h5>Text Buttons</h5>
                <Button label="Primary" className="p-button-text" />
                <Button label="Secondary" className="p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-success p-button-text" />
                <Button label="Info" className="p-button-info p-button-text" />
                <Button label="Warning" className="p-button-warning p-button-text" />
                <Button label="Help" className="p-button-help p-button-text" />
                <Button label="Danger" className="p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-text p-button-plain" />

                <h5>Raised Text Buttons</h5>
                <Button label="Primary" className="p-button-raised p-button-text" />
                <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

                <h5>Outlined Buttons</h5>
                <Button label="Primary" className="p-button-outlined" />
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <Button label="Success" className="p-button-outlined p-button-success" />
                <Button label="Info" className="p-button-outlined p-button-info" />
                <Button label="Warning" className="p-button-outlined p-button-warning" />
                <Button label="Help" className="p-button-outlined p-button-help" />
                <Button label="Danger" className="p-button-outlined p-button-danger" />

                <h5>Rounded Icon Buttons</h5>
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />

                <h5>Rounded and Outlined Icon Buttons</h5>
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
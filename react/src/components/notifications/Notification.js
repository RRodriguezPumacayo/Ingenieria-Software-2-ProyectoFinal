import React from 'react';
import $ from 'jquery';
import Events from 'utilities/Events';

const getNotificationClass = (type) => {
    switch (type) {
        case 'success':
            return 'accepted notification';
        case 'error':
            return 'cancel notification';
        case 'warning':
            return 'warning notification';
        case 'information':
            return 'information notification';
        default:
            return '';
    }
};

export default class Notification extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            cssClass: ''
        };

        Events.on('notification', (message, type) => {
            this.setState((prevState) => ({
                text: message,
                cssClass: getNotificationClass(type) || prevState.cssClass
            }), () => this.show());
        });
    }

    componentDidMount() {
        const node = this.displayRef.current;
        $(node).hide();
    }

    show() {
        const node = this.displayRef.current;
        $(node).show();
        setTimeout(() => {
            this.fadeout();
        }, 5000);
    }

    fadeout() {
        const node = this.displayRef.current;
        $(node).fadeOut();
    }

    render() {
        return (
            <button
                ref={this.displayRef}
                onClick={() => this.fadeout()}
                onKeyDown={(event) => {
                    if (event.which === 13 || event.which === 32) {
                        this.fadeout();
                    }
                }}
                className={this.state.cssClass}
            >
                {this.state.text}
            </button>
        );
    }
}

import React from 'react';
import './popup.css';

class Popup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.clickIsExternal(e.target) || this.clickIsOnButton(e.target)) {
            this.props.closePopup();
        }
    }

    clickIsExternal(clickTarget) {
        return clickTarget.className === 'popup';
    }

    clickIsOnButton(clickTarget) {
        return clickTarget.className === 'popup__button';
    }

    render() {
        return this.props.closed ? false : (
            <div className="popup" onClick={this.handleClick}>
                <div className="popup__container">
                    <div className="popup__heading">
                        Swoon Editions
                    </div>
                    <div className="popup__description">
                        Welcome
                    </div>
                    <button className="popup__button">
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default Popup;
import React from 'react';
import Login from "../login/Login";
import Popup from "../popup/Popup";
import Menu from '../menu/Menu';
import Products from '../products/Products';
import './app.css';
import products from './products.json';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.LOGIN = "Login";
        this.PRODUCTS = "Products"
        this.state = {
            page: this.LOGIN,
            popupClosed: false,
            isLoggedIn: false,
            menuItems: [this.LOGIN, this.PRODUCTS]
        };
        this.closePopup = this.closePopup.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    closePopup(e) {
        this.setState({popupClosed: true});
    }

    navigateTo(page) {
        this.setState({page: page})
    }

    setLoggedIn(loggedIn) {
        this.setState({isLoggedIn: loggedIn});
    }
    render() {
        let page = this.selectPageComponent();

        return (
            <div className="app">
                <Popup closed={this.state.popupClosed} closePopup={this.closePopup}/>
                <Menu items={this.state.menuItems} handleItemClick={this.navigateTo}/>
                {page}
            </div>
        );
    }

    selectPageComponent() {
        let page = null;
        if (this.state.page === this.PRODUCTS && this.state.isLoggedIn) {
            page = <Products products={products}/>;
        } else if (this.state.page === this.LOGIN) {
            page = <Login setLoggedIn={this.setLoggedIn} isLoggedIn={this.state.isLoggedIn}/>;
        }
        return page;
    }
}

export default App;
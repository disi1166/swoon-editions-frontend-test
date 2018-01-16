import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import App from './App';

describe('<App />', () => {
    let app;

    beforeEach(() => {
        app = shallow(<App/>);
    });

    describe('closePopup method', () => {
        it('should set state.popup_close to true', () => {
            app.instance().closePopup();

            expect(app.state('popupClosed')).to.be.true;
        });
    });

    describe('navigateTo method', () => {
        it('should set state.page to input', () => {
            let appInstance = app.instance();
            appInstance.navigateTo(appInstance.PRODUCTS);

            expect(app.state('page')).to.equal(appInstance.PRODUCTS);
        });
    });

    describe('setLoggedIn method', () => {
        it('should set state.isLogged to input', () => {
            let appInstance = app.instance();
            appInstance.setLoggedIn(true);

            expect(app.state('isLoggedIn')).to.be.true;
        });
    });

    it('should render <Login> if state.page is not products', () => {
        app.setState({page: app.instance().LOGIN, isLoggedIn: true});
        const login = app.find('Login');

        expect(login.length).to.equal(1);
        expect(login.props().isLoggedIn).to.be.true;
        expect(login.props().setLoggedIn).to.equal(app.instance().setLoggedIn);
    });

    it('should render <Products> if state.page is products and user is logged in', () => {
        app.setState({page: app.instance().PRODUCTS, isLoggedIn: true});
        const products = app.find('Products');
        const login = app.find('Login');

        expect(products.length).to.equal(1);
        expect(login.length).to.equal(0);
    });

    it('should not render <Products> and <Login> if state.page is products and user is logged out', () => {
        app.setState({page: app.PRODUCTS, isLoggedIn: false});
        const products = app.find('Products');
        const login = app.find('Login');

        expect(products.length).to.equal(0);
        expect(login.length).to.equal(0);
    });

    it('should render <Popup> passing state.popupClosed and state.closePopup', () => {
        app.setState({popupClosed: true});
        const popup = app.find('Popup');


        expect(popup.props().closed).to.be.true;
        expect(popup.props().closePopup).to.equal(app.instance().closePopup);
    });

    it('should render <Menu> passing the menu items and navigateTo method', () => {
        app.setState({page: undefined});
        const menu = app.find('Menu');

        expect(menu.length).to.equal(1);
        expect(menu.props().handleItemClick).to.equal(app.instance().navigateTo);
        expect(menu.props().items[0]).to.equal(app.instance().LOGIN);
        expect(menu.props().items[1]).to.equal(app.instance().PRODUCTS);
    });
});

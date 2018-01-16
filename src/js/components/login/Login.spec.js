import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Login from './Login';

describe('<Login />', () => {
    let login;
    let closePopupCalled;

    beforeEach(() => {
        login = shallow(<Login />);
    });
    it('should display input button and anchor', () => {
        const inputElement = login.find('input.login__input');
        const buttonElement = login.find('button.login__button');
        const anchorElement = login.find('.login__anchor');

        expect(inputElement.length).to.equal(1);
        expect(anchorElement.length).to.equal(1);
        expect(buttonElement.length).to.equal(1);
    });

    it('should not display anchor if mode is Sign Up', () => {
        login.setState({mode: "Sign Up"});
        const loggedInElement = login.find('.login__anchor');

        expect(loggedInElement.length).to.equal(0);
    });

    it('should display login message if user logged in', () => {
        login = shallow(<Login isLoggedIn={true}/>);
        const loggedInElement = login.find('.login__logged_in_message');

        expect(loggedInElement.length).to.equal(1);
    });

    it('should not display login message if user not logged in', () => {
        const loggedInElement = login.find('.login__logged_in_message');

        expect(loggedInElement.length).to.equal(0);
    });

    it('should not display error message if validation didn\'t failed', () => {
        const loggedInElement = login.find('.login__error_message');

        expect(loggedInElement.length).to.equal(0);
    });

    it('should display error message email not valid', () => {
        login.setState({invalidEmail: true});
        const loggedInElement = login.find('.login__error_message');

        expect(loggedInElement.length).to.equal(1);
    });

    it('email input value should equal state.email', () => {
        login.setState({email: "test@email.co.uk"});
        const inputElement = login.find('input.login__input');

        expect(inputElement.prop('value')).to.equal("test@email.co.uk");
    });

    describe('method handleInput', () => {
        it('should set state.email to the value in the input field', () => {
            login.instance().inputChanged({target: {value: "test@email.co.uk"}});

            expect(login.state('email')).to.equal('test@email.co.uk');
        });
    });

    describe('method switchModeTo', () => {
        it('should set state.mode to input and remove error message message', () => {
            login.setState({invalidEmail: true});
            login.instance().switchModeTo('Sign Up');

            expect(login.state('mode')).to.equal('Sign Up');
            expect(login.state('invalidEmail')).to.be.false;
        });
    });

    describe('method validate email', () => {
        it('should return false given email is empty', () => {
            login.setState({email: ""});

            expect(login.instance().validateEmail()).to.be.false;
        });

        it('should return false given email is badly formatted', () => {
            login.setState({email: "sdfds.sdfds"});

            expect(login.instance().validateEmail()).to.be.false;
        });

        it('should return false given email is correctly formatted', () => {
            login.setState({email: "test@email.co.uk"});

            expect(login.instance().validateEmail()).to.be.true;
        });
    });
});

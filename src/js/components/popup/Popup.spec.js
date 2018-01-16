import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Popup from './Popup';

describe('<Popup />', () => {
    let popup;
    let closePopupCalled;

    beforeEach(() => {
        closePopupCalled = false;
        popup = shallow(<Popup closed={false} closePopup={() => {closePopupCalled = true}}/>);
    });
    it('should display with heading description and close button', () => {
        const headingElement = popup.find('.popup__heading');
        const descriptionElement = popup.find('.popup__description');
        const buttonElement = popup.find('.popup__button');

        expect(headingElement.length).to.equal(1);
        expect(descriptionElement.length).to.equal(1);
        expect(buttonElement.length).to.equal(1);
    });
    it('should not display after it\'s been closed', () => {
        popup = shallow(<Popup closed={true}/>);
        const headingElement = popup.find('.popup__heading');
        const descriptionElement = popup.find('.popup__description');
        const buttonElement = popup.find('.popup__button');

        expect(headingElement.length).to.equal(0);
        expect(descriptionElement.length).to.equal(0);
        expect(buttonElement.length).to.equal(0);
    });

    describe('handleClick', () => {
        it('should call function closePopup from props.route if click is outside popup', () => {
            popup.instance().handleClick({target: {className: "popup"}});

            expect(closePopupCalled).to.be.true;
        });

        it('should do nothing if click is inside popup container but not on button', () => {
            popup.instance().handleClick({target: {className: "popup__container"}});

            expect(closePopupCalled).to.be.false;
        });

        it('should call function closePopup from props.route if click is inside popup container but not on button', () => {
            popup.instance().handleClick({target: {className: "popup__button"}});

            expect(closePopupCalled).to.be.true;
        });
    });
});

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Menu from './Menu';

describe('<Menu />', () => {
    let menu;

    beforeEach(() => {
        menu = shallow(<Menu items={["Login", "Products"]} />);
    });
    it('should display every item', () => {
        const items = menu.find('.menu__item');

        expect(items.length).to.equal(2);
        expect(items.at(0).text()).to.equal("Login");
        expect(items.at(1).text()).to.equal("Products");
    });
});

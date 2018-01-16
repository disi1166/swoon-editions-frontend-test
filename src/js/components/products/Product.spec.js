import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Product from './Product';

describe('<Product />', () => {
    let product;
    let properties;

    beforeEach(() => {
        properties = {
            "sku": "ottosideboardmangowhite",
            "name": "Otto",
            "description": "Sideboard, Mango Wood & White",
            "image": "https://d1vdyfpzfghmic.cloudfront.net/catalog/product/cache/1/small_image/322x354/602f0fa2c1f0d1ba5e241f914e856ff9/o/t/otto_sideboard_mangowhite_small.jpg",
            "price": 549.00
        };
        let {sku, ...props} = properties;
        product = shallow(<Product {...props}/>);
    });
    it('should display with heading description and close button', () => {
        const nameElement = product.find('.product__name');
        const descriptionElement = product.find('.product__description');
        const priceElement = product.find('.product__price');
        const imageElement = product.find('.product__image');

        expect(nameElement.text()).to.equal(properties.name);
        expect(descriptionElement.text()).to.equal(properties.description);
        expect(priceElement.text()).to.equal(`Price: £${properties.price.toString()}`);
        expect(imageElement.props().src).to.equal(properties.image);
    });
});

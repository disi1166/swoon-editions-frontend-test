import React from 'react';
import './menu.css';

const Menu = ({items, handleItemClick}) => {
    const menuItems = items.map((itemName, i) => {
        return(
            <div key={i}
                className="menu__item"
                onClick={() => handleItemClick(itemName)}>
                {itemName}
            </div>
        );
    });
    return (
        <div className="menu">
            {menuItems}
        </div>
    );
};

export default Menu;
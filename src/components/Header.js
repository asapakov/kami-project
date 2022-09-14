import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Менеджер товаров</h1>
      <hr />
      <div className="links">
        <NavLink to="/products" className="link" exact='true'>
          Товары
        </NavLink>
      
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import Menu from './Menu';
import SearchBar from './SearchBar';
import ProfileFeatures from './ProfileFeatures';

import '../../css/navbar.css';

const Header = () => (
  <nav className="nav">
    <Menu />
    <SearchBar />
    <ProfileFeatures />
  </nav>
);

export default Header;

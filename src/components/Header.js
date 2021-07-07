import React from 'react';
import logo from '../../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <h1>My Simple Dog</h1>
    </header>
  );
}

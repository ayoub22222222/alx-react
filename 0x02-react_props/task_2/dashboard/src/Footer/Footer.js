import './Footer.css';
import logo from '../assets/logo.jpg';
import React from 'react';
import { getFullYear } from '../utils/utils';


function Footer() {
  return (
      <div className="App-footer">
	  <p>Copyright { getFullYear() } - holberton School</p>
      </div>
  );
}

export default Footer;

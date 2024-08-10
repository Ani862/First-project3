import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Contact.css';

function Header() {
    return (
      <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
              
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  
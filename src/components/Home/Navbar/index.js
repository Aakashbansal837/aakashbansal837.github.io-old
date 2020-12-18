import React from "react";
<<<<<<< HEAD
import "../../../styles/index.scss";
import { ReactComponent as Logo } from "../../../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nvbr">
      <div className=" container nvbr-container">
        <Logo className="nvbr-logo" />
        <ul className="nvbr-menu">
          <li>
            <a href="#" className="nvbr-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nvbr-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nvbr-link">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="btn-main">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import './navbar.scss';
import { ReactComponent as Logo } from '../../../images/logo.svg';


const Navbar = () => {
    return (
        <nav class="nvbr">
          <div class=" container nvbr-container">
            <Logo className='nvbr-logo' />
            <ul class="nvbr-menu">
              <li><a href="#" class="nvbr-link">Home</a></li>
              <li><a href="#" class="nvbr-link">About Us</a></li>
              <li><a href="#" class="nvbr-link">Blogs</a></li>
              <li><a href="#" class="btn-main">Log In</a></li>
            </ul>
          </div>
        </nav>
        
    );

};

export default Navbar;

>>>>>>> d44c0cd8099e9d31b621637d3dbb2332447427e2

import React from "react";
import "./Header.css";

import { motion } from "framer-motion";

import { NavLink } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className='header'>
      <Container className>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <h1>Furniture</h1>
              <p>Bulgaria</p>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav_icons'>
              <span className='fav_icon'>
                <i className='ri-heart-line'></i>
                <span className='badge'>2</span>
              </span>
              <span className='cart_icon'>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>2</span>
              </span>

              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={user_icon} alt='' />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

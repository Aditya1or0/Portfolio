import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const [menu, setMenu] = useState("home");

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (newMenu) => {
    setMenu(newMenu);
    closeMenu(); // Close the menu when an item is clicked
  };

  return (
    <div className="navbar" id="home">
      <img className="logo" src={logo} alt="Logo" />
      <img
        onClick={openMenu}
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          onClick={closeMenu}
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
            {menu === "about" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => handleMenuClick("education")}>Education</p>
            {menu === "education" ? (
              <img src={underline} alt="Underline" />
            ) : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuClick("work")}>Projects</p>
            {menu === "work" ? <img src={underline} alt="Underline" /> : null}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

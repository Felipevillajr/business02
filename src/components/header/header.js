import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <div className="header__filter">
        <section className="header__menu">
          <div className="header__menu__left">
            <div className="header__menu__left__logo">LOGO</div>

            <div className="header__menu__left__link">
              <Link to="#">LINK 1</Link>
            </div>
            <div className="header__menu__left__link">
              <Link to="#">LINK 1</Link>
            </div>
            <div className="header__menu__left__link">
              <Link to="#">LINK 1</Link>
            </div>
            <div className="header__menu__left__link">
              <Link to="#">LINK 1</Link>
            </div>
          </div>
          <div className="header__menu__right">
            <input
              type="text"
              className="header__menu__right__searchbar"
              placeholder="Search..."
            ></input>
          </div>
        </section>
      </div>
    </div>
  );
}

export default header;

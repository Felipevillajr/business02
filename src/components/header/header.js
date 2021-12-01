import React from "react";
import "./header.scss";
import banner from "../../images/imaginethat.jpg";

function header() {
  return (
    <div className="header">
      <img className="header__img" src={banner} alt="placeholder"></img>
      <div className="header__filter"></div>
      <h1 className="header__title">X-8</h1>
      <section className="header__menu">
        <h1 className="header__menu__item">home</h1>
        <h1 className="header__menu__item">about</h1>
        <h1 className="header__menu__item">shop</h1>
      </section>
    </div>
  );
}

export default header;

import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Gallery from "../../components/gallery/gallery.js";

export default function home() {
  return (
    <div>
      <div className="home">
        <div className="home__banner">
          <div className="home__banner__text">
            <h1>Title of Text</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed...
            </p>

            <Link to="#">
              <button className="home__banner__text__link">
                This is a Link{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

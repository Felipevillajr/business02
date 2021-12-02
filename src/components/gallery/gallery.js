import React from "react";
import "./gallery.scss";
import image1 from "../../images/spaceman.jpg";
import image2 from "../../images/alimarel-z1VEIQynaL8-unsplash.jpg";
import image3 from "../../images/brock-wegner-oEQfxh7S3u4-unsplash.jpg";
import image4 from "../../images/daniil-onischenko-q6Gwa3fOQ0I-unsplash.jpg";
import image5 from "../../images/majestic-lukas-6lWFuyGPkk0-unsplash.jpg";
import image6 from "../../images/tan-kaninthanond-DUtpKWRsetM-unsplash.jpg";
import image7 from "../../images/wolfgang-hasselmann-dRk71FQbHPA-unsplash.jpg";
import image8 from "../../images/audrey-fretz-9fsr_jov9cM-unsplash.jpg";
import image9 from "../../images/hans-isaacson-84mVbrI-Ccg-unsplash.jpg";
import image10 from "../../images/mark-adriane-bO3S03I2Aw8-unsplash.jpg";
import image11 from "../../images/tamara-jeremic-olfRSlqF9As-unsplash.jpg";

export default function gallery() {
  return (
    <div className="gallery">
      <div className="gallery__title">
        <h1 className="gallery__title__text">Gallery</h1>
      </div>
      <div className="gallery__pictures">
        <img className="gallery__pictures__item" src={image1} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image3} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image4} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image6} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image7} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image8} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image9} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image10} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image11} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image2} alt="Artpiece" />
        <img className="gallery__pictures__item" src={image5} alt="Artpiece" />
      </div>
    </div>
  );
}

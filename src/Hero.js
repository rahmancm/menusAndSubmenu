import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1> Payements infrastructure for the Internet </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nemo
            architecto, minus incidunt vel explicabo, nostrum ut, nisi nulla
            molestias quibusdam aperiam.Eveniet recusandae facere aliquid optio,
            fugiat ea fuga repudiandae.
          </p>
          <button className="btn"> Order Now </button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

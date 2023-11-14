import React from "react";

import style from "./style.scss";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe">
        <div className="subscribe__container">
          <form className="subscribe__form" action="/process">
            <label className="subscribe__label">
              Find out about new promotions first!
            </label>
            <input
              className="subscribe__input"
              type="text"
              placeholder="email@email.com"
            />
            <button className="subscribe__btn">Subscribe </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Subscribe;

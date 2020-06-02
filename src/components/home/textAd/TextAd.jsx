import React from "react";
import "./TextAd.css";

export default function TextAd() {
  return (
    <div>
      <div className="blockTextAdAdvertisingLettering">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">Привет</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">Звони !</li>
              <li className="content__container__list__item">Пиши !</li>
              <li className="content__container__list__item">Заходи !</li>
              <li className="content__container__list__item">Заказывай !</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

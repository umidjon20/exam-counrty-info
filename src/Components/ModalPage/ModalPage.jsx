import { Component } from "react";

import "./ModalPage.scss";

class ModalPage extends Component {
  render() {
    const {
      flags,
      name,
      populition,
      region,
      capital,
      closeModal,
      subregion,
      tld,
      languages,
      currencies,
      borders,
    } = this.props;

    return (
      <div className="modal">
        <div className="modal__page container">
          <div className="countries__details">
            <div className="countriy__img">
              <img src={flags} alt="" />
            </div>
            <div className="countriy__about">
              <div className="countriy__info">
                <strong>{name.common}</strong>
                <div className="details">
                  <div className="info">
                    <li>
                      Native Name:{" "}
                      <span>{Object.values(name.nativeName)[0].common}</span>
                    </li>
                    <li>
                      Population:{" "}
                      <span>{populition.toLocaleString("eng-US")}</span>
                    </li>
                    <li>
                      Region: <span>{region}</span>{" "}
                    </li>
                    <li>
                      Sub Region: <span>{subregion}</span>{" "}
                    </li>
                    <li>
                      Capital: <span>{capital}</span>{" "}
                    </li>
                  </div>
                  <div className="info">
                    <li>
                      Top Level Domain: <span> {tld}</span>
                    </li>
                    <li>
                      Currencies:
                      <span>
                        {Object.values(currencies)
                          .map((value) => {
                            return value.name;
                          })
                          .join(" , ")}
                      </span>
                    </li>
                    <li>
                      Languages:
                      <span>
                        {Object.values(languages)
                          .map((value) => {
                            return value;
                          })
                          .join(" , ")}
                      </span>
                    </li>
                  </div>
                </div>
              </div>
              <div className="countriy__borders">
                {borders && borders.length !== 0 && (
                  <span>
                    Border Countries:
                    {borders.map((border, ind) => {
                      return <li key={ind}>{border}</li>;
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className="close__modal" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="1.41187"
                y="0.00012207"
                width="31.9446"
                height="1.99654"
                transform="rotate(45 1.41187 0.00012207)"
                fill="#151515"
              />
              <rect
                y="22.5883"
                width="31.9446"
                height="1.99654"
                transform="rotate(-45 0 22.5883)"
                fill="#151515"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
export default ModalPage;

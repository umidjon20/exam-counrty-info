import { Component } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "./CountryItem.scss";

class CountryItem extends Component {
  render() {
    const { flags, name, populition, region, capital, countryDetails } =
      this.props;
    return (
      <article onClick={() => countryDetails(name)}>
        <div className="countries__img">
          <img src={flags} alt={name} id="flagsCountr" />
        </div>
        <div className="country_info">
          <h4>{name}</h4>
          <div className="info">
            <li>
              Population: <span> {populition.toLocaleString("eng-US")} </span>
            </li>
            <li>
              Region: <span> {region} </span>
            </li>
            <li>
              Capital: <span> {capital} </span>
            </li>
          </div>
        </div>
      </article>
    );
  }
}

export default CountryItem;

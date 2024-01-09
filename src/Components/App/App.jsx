import { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Header from "../Header/Header";
import Main from "../Home/Home";
import ModalPage from "../ModalPage/ModalPage";
import "./App.scss";

class App extends Component {
  state = {
    countryInfo: null,
  };
  countryDetails = (title) => {
    fetch(
      `https://restcountries.com/v3.1/name/${title}?feilds=borders,region,subregion,capital,tld,currencies,languages,population,flags`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ countryInfo: data });
      });
    document.querySelector(".pagination").style.display = "none";
  };

  closeModal = () => {
    this.setState({ countryInfo: null });
    document.querySelector(".pagination").style.display = "flex";
  };

  render() {
    const { countryInfo } = this.state;
    return (
      <>
        
          <div className="header__main">
            <Header />
            <Main countryDetails={this.countryDetails} />
          </div>

          {countryInfo &&
            countryInfo.map((item,ind) => {
              const {
                flags,
                name,
                population,
                region,
                capital,
                subregion,
                tld,
                borders,
                languages,
                currencies,
              } = item;
              return (
                <ModalPage
                key={ind}
                  countryDetails={this.countryDetails}
                  flags={flags.png}
                  name={name}
                  populition={population}
                  region={region}
                  capital={capital}
                  closeModal={this.closeModal}
                  subregion={subregion}
                  borders={borders}
                  tld={tld}
                  languages={languages}
                  currencies={currencies}
                />
              );
            })}
      </>
    );
  }
}

export default App;

import { Component } from "react";
import CountryList from "../CountryList/CountryList";
import FilterRegion from "../FilterRegion/FilterRegion";
import SearchCountriy from "../SearchCountry/SearchCountry";
import Pagenation from "../Pagenation/Pagenation";

import "./Home.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      loading:true,
      active: false,
      finishIndex: 8,
      allInfo: null,
    };
  }
  
  componentDidMount() {
    fetch(
      `https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ allInfo: data });
        this.showPagenation(data);
      });
      
    }
d
  showCountriesPagenation =  (data) => {
    const { finishIndex } = this.state;
    let finish = finishIndex;
    let arr = [];
    arr = data.slice(0, finish);
    this.setState({ countries: arr, finishIndex: finish + 8 });
    this.setState({loading:false})
  };

  showContinentsName = () => {
    let ul = document.querySelector("ul");
    this.setState((prevState) => {
      return {
        list: (ul.style.display = "flex"),
        active: (prevState.active = true),
      };
    });
    document.querySelector(".btn__remove").style.transform = "rotate(360deg)";
  };

  hideContinentsName = () => {
    let ul = document.querySelector("ul");
    this.setState((prevState) => {
      return {
        list: (ul.style.display = "none"),
        active: (prevState.active = false),
      };
    });
    document.querySelector(".btn__remove").style.transform = "rotate(180deg)";
  };

  showContinentsInfo = (e) => {
    this.setState({ finishIndex: 8 });
    let input = document.querySelector("#search");
    input.value = "";
    input.nextElementSibling.innerText = "";
    if (e.target.innerText !== "All country") {
      fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          this.setState({ allInfo: data });
          this.showPagenation(data);
          // console.log(data)
        });
    } else {
      this.componentDidMount();
    }

    this.setState((prewState) => {
      let ul = document.querySelector("ul");
      return {
        ul: (prewState.ul = e.target.innerText),
        none: (ul.style.display = "none"),
      };
    });
    document.querySelector(".btn__remove").style.transform = "rotate(180deg)";
  };

  searchCountryName = (e) => {
    const {allInfo} = this.state
    let countryName = e.target.value;
    const data = allInfo.filter((val) => {
      const { name } = val;
      const { common } = name;
      if (common.toLowerCase().startsWith(countryName.toLowerCase())) {
        return val;
      }
    });

      this.showPagenation(data)
      this.searchInpValidate(data);

  
  };

  searchInpValidate = (data ) => {
    this.setState({ finishIndex: 8 });
    let input = document.querySelector("#search");
    if(input.length === 0){
      input.nextElementSibling.innerText = ""
      this.showPagenation(data)
    }
    if (data.length === 0) {
      input.nextElementSibling.innerText = "Not found";
    } else {
      input.nextElementSibling.innerText = "";
      
      this.showPagenation(data);
    }
   
  };

  showPagenation = (pagenation) => {
    this.setState({loading:true})
    const { countries }= this.state
    if(countries?.length === pagenation.length){
      document.querySelector('.pagination').style.display = 'none'
    }else if(pagenation.length < 8){
      document.querySelector('.pagination').style.display = 'none'
    }
    else{
      document.querySelector('.pagination').style.display = 'flex'

    }
    this.showCountriesPagenation(pagenation);
   
  };

  render() {
    const { active, ul, countries, allInfo,loading } = this.state;
    const { countryDetails } = this.props;
    return (
      <main className="container">
        <section className="search">
          <SearchCountriy countryName={this.searchCountryName} />
          <div className="select">
            <div
              className="select__nan"
              onClick={
                active === false
                  ? this.showContinentsName
                  : this.hideContinentsName
              }
            >
              <div className="content_color">
                {ul ? ul : "Filter by Region"}
              </div>
              <div className="btn__remove">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
                  />
                </svg>
              </div>
            </div>
            <FilterRegion showContinentsInfo={this.showContinentsInfo} />
          </div>
        </section>

        <CountryList
        loading = {loading}
          ul={ul}
          countries={countries}
          countryDetails={countryDetails}
        />
        <Pagenation
        showPagenation={this.showPagenation}
         allInfo={allInfo} />
      </main>
    );
  }
}

export default Main;

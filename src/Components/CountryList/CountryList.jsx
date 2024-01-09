import { Component } from "react";
import CountryItem from "../CountryItem/CountryItem";
import Loading from "../Loading/Loading";

import './CountryList.scss'
class CountryList extends Component{

  render(){
    const {countries,countryDetails,loading} = this.props
    if(loading){
      return <section className="counter__title">
        <Loading />
      </section>
    }else if(countries && !loading){
      return(
        <section className="counter__title">
         
          {countries && countries.map((item,ind) => {
          const {flags, name, population, region, capital} = item
          return <CountryItem flags = {flags.png} key={ind}
            name = {name.common}
            populition = {population}
            region ={region} 
            capital={capital} 
            countryDetails={countryDetails}
            />
      })}
        </section>
      )
    }
   
  }
}

export default CountryList
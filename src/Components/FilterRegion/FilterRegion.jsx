import  { Component } from 'react'

import "./FilterRegion.scss"
const dropdown = [
  {
  
    title: "Asia"
  },
  {
    
    title: "Africa"
  },
  {
    
    title: "Oceania"
  },
  {
    
    title: "Europe"
  },{
    
    title: "America"
  },
  // {
  //   title:'All country'
  // }
]
class FilterRegion extends Component{

  render(){
    const {showContinentsInfo} = this.props
   const continents = dropdown.map((value,ind) => {
    const {title} = value
    return(
      <li
        key={ind}
        onClick={
          (title)=> showContinentsInfo(title)
        }
      >
        {title}
      </li>
    )
   })

    return(
      <ul>
        {continents}
      </ul>
    )
  }
}

export default FilterRegion;
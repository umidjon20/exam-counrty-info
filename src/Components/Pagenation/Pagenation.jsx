import { Component  } from "react";

import './Pagenation.scss'

class Pagenation extends Component{
    render(){
        
        const { showPagenation,allInfo } = this.props
       
            return(
                <div className="pagination">
                    <button className="next"
                    onClick={()=>showPagenation(allInfo)}
                    >
                        Show more
                    </button>
                </div>
            )
            
        
 
    }
}
export default Pagenation
import { Component } from "react";

import './Loading.scss'

class Loading extends Component{
    render(){
        return(
            <>
            <div className="loading">
                <div className="loader"></div>
            </div>
            </>
        )
    }
}
export default Loading
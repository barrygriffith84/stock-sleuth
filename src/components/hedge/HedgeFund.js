import React, { Component } from 'react'
import { Link } from "react-router-dom"

class HedgeFund extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();
    
render () {

    return(
        <>
         {this.isAuthenticated() ? <Link to="/"  onClick={this.clearStorage}>Logout</Link> : ""}
        <h1>This is Hedge Fund!</h1>
        </>
    )
}

}

export default HedgeFund
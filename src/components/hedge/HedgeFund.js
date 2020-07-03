import React, { Component } from 'react'
import { Link } from "react-router-dom"
import HedgeFundSelect from './HedgeFundSelect'
import APIManager from '../../modules/APIManager';
import HedgeFundTable from './HedgeFundTable'

class HedgeFund extends Component {

    state = {
        hedgeFundArray: [],
    }
    
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();

    selectHedgeFund = (cik) => {
        if(cik !== ""){
        APIManager.getHedgeFund(cik).then((fund) => {
            this.setState({
                hedgeFundArray: fund.results["2020-03-31"]._holdings_,
            })
        })
    } else{
        this.setState({
            hedgeFundArray: [],
        })
    }
}
   
 
    
render () {
    console.log(this.state)
    return(
        <>
         {this.isAuthenticated() ? <Link to="/"  onClick={this.clearStorage}>Logout</Link> : ""}
        <h1>This is Hedge Fund!</h1>
        <HedgeFundSelect SelectFund={this.selectHedgeFund}/>
        {this.state.hedgeFundArray.length > 0 ? (<HedgeFundTable hedgeFundArray={this.state.hedgeFundArray}/>): ""}
        </>
    )
}

}

export default HedgeFund
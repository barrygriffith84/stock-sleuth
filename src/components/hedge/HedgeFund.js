import React, { Component } from 'react'
import { Link } from "react-router-dom"
import HedgeFundSelect from './HedgeFundSelect'
import APIManager from '../../modules/APIManager';
import HedgeFundTable from './HedgeFundTable'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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
            <Grid container spacing={0} direction="row" justify="flex-end" alignItems="center" >
                    <Grid item xs={1} >
                        {this.isAuthenticated() ? <Button variant="outlined" color="primary" onClick={this.clearStorage}>Logout</Button> : ""}
                    </Grid>
                </Grid>

                <Grid container spacing={3} direction="column" justify="center" alignItems="center">
        <h1>Select a Hedge Fund</h1>
        <HedgeFundSelect SelectFund={this.selectHedgeFund}/>
        {this.state.hedgeFundArray.length > 0 ? (<HedgeFundTable hedgeFundArray={this.state.hedgeFundArray}/>): ""}
        </Grid>

        </>
    )
}

}

export default HedgeFund
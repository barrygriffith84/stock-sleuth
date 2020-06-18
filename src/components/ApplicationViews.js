import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home";
import MyPortfolio from "./portfolio/MyPortfolio";
import StockResearch from "./research/StockResearch";
import HedgeFund from "./hedge/HedgeFund";



class ApplicationViews extends Component {


    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route path="/portfolio" render={(props) => {
                    return <MyPortfolio />
                }} />

                <Route path="/research" render={(props) => {
                    return <StockResearch />
                }} />

                <Route path="/hedge" render={(props) => {
                    return <HedgeFund />
                }} />

            </>

        )
    }
}


export default ApplicationViews


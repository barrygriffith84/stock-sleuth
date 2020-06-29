import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home";
import MyPortfolio from "./portfolio/MyPortfolio";
import StockResearch from "./research/StockResearch";
import HedgeFund from "./hedge/HedgeFund";
import Login from "./auth/Login";
import Register from "./auth/Register";


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null;

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Home />;
                    } else {
                        return <Redirect to="/login" />;
                    }

                }} />

                <Route path="/portfolio" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MyPortfolio {...props}/>;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }} />

                <Route path="/research" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <StockResearch {...props}/>;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }} />

                <Route path="/hedge" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <HedgeFund />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }} />



                <Route path="/login" component={Login} />

                <Route path="/register" component={Register} />


            </>

        )
    }
}


export default ApplicationViews


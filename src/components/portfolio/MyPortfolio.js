import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import PortfolioTable from './PortfolioTable'
import { Link } from "react-router-dom"


class MyPortfolio extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();


    state = {
        stockPurchases: [],
        stockSymbols: [],
        username: "",
        userId: null,
    }


    componentDidMount() {

        APIManager.getPortfolio(JSON.parse(localStorage.getItem("credentials")).userId
        ).then((APIPurchases) => {
            //Maps the stock symbols to an array
            const portfolioSymbols = APIPurchases.map((stock) => stock.stockSymbol);
            console.log(portfolioSymbols)

            //Inputs the portfolio symbols into fetch call to get the stock prices from an external API

        })

        // const stockArray = ["IBM","AMZN","GOOG"]

        // APIManager.getPortfolioPrices(stockArray).then((r) => console.log(r))



    }

    render() {

        return (
            <>
                {this.isAuthenticated() ? <Link to="/" onClick={this.clearStorage}>Logout</Link> : ""}
                <h1>{this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}'s Portfolio</h1>
                <div className="test-container">
                    <PortfolioTable purchases={this.state.stockPurchases} />
                </div>
            </>
        )
    }

}

export default MyPortfolio
import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import PortfolioTable from './PortfolioTable'
import { Link } from "react-router-dom"
import NewStockModal from "./NewStockModal"


class MyPortfolio extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();


    state = {
        stockPurchases: [],
        username: "",
        userId: null,
    }


    printPortfolio = () => {
        let portfoltioPurchases = [];
        let portfolioSymbols = [];
        let currentPrices = [];
        let combinedArray = [];


        //Grabs the user's stock purchases from the local JSON server
        APIManager.getPortfolio(JSON.parse(localStorage.getItem("credentials")).userId
        ).then((APIPurchases) => {

            portfoltioPurchases = APIPurchases

            //Maps the stock symbols to an array
            portfolioSymbols = [...new Set(APIPurchases.map((stock) => stock.stockSymbol))];

            this.setState({
                stockPurchases: portfoltioPurchases,
            })
            //Inputs the portfolio symbols into fetch call to get the stock prices from an external API.  Stores the return in the currentPrices array
            APIManager.getPortfolioPrices(portfolioSymbols).then((stocks) => {
                currentPrices = stocks.results


                for (let i = 0; i < portfolioSymbols.length; i++) {
                    let filteredPriceArray = currentPrices.filter((stock) => stock.symbol.toLowerCase() === portfolioSymbols[i])

                    let filteredPortfolioArray = portfoltioPurchases.filter((stock) => stock.stockSymbol === portfolioSymbols[i])

                    filteredPortfolioArray.forEach((purchase) => {
                        purchase.currentPrice = filteredPriceArray[0].lastPrice;
                        combinedArray.push(purchase)
                    })
                }

                this.setState({
                    stockPurchases: combinedArray,
                    username: combinedArray[0].user.username,
                    userId: combinedArray[0].userId
                })
            })




        })
    }

    componentDidMount() {

        this.printPortfolio();

    }

    render() {

        return (
            <>
                {this.isAuthenticated() ? <Link to="/" onClick={this.clearStorage}>Logout</Link> : ""}
                <NewStockModal printPortfolio={this.printPortfolio}/>
                
                <h1>{this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}'s Portfolio</h1>
                <div className="test-container">
                    <PortfolioTable purchases={this.state.stockPurchases} />
                </div>
            </>
        )
    }

}

export default MyPortfolio
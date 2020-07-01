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
        compositePortfolio: [],
        purchasePriceTotal: 0,
        currentPortfolioTotal: 0,
        username: "",
        userId: null,
    }


    printPortfolio = () => {
        let portfoltioPurchases = [];
        let portfolioSymbols = [];
        let currentPrices = [];
        let combinedArray = [];
        let compositeArray = [];
        let purchasePriceTotal = 0;
        let currentTotalPortfolio = 0;

        // Grabs the user's stock purchases from the local JSON server
        APIManager.getPortfolio(JSON.parse(localStorage.getItem("credentials")).userId
        ).then((APIPurchases) => {
            
            portfoltioPurchases = APIPurchases

            //Maps the stock symbols to an array
            portfolioSymbols = [...new Set(APIPurchases.map((stock) => stock.stockSymbol))];
            
            this.setState({
                stockPurchases: portfoltioPurchases,
            })
            // Inputs the portfolio symbols into fetch call to get the stock prices from an external API.  Stores the return in the currentPrices array
            APIManager.getPortfolioPrices(portfolioSymbols).then((stocks) => {
                // console.log(stocks)
                currentPrices = stocks.results

                for (let i = 0; i < portfolioSymbols.length; i++) {
                    let filteredPriceArray = currentPrices.filter((stock) => stock.symbol.toLowerCase() === portfolioSymbols[i])

                    let filteredPortfolioArray = portfoltioPurchases.filter((stock) => stock.stockSymbol === portfolioSymbols[i])

                    filteredPortfolioArray.forEach((purchase) => {
                        purchase.currentPrice = filteredPriceArray[0].lastPrice;
                        combinedArray.push(purchase)
                    })
                }

                for (let i = 0; i < portfolioSymbols.length; i++) {
                    let tempArray = combinedArray.filter((purchase) => purchase.stockSymbol === portfolioSymbols[i])
                    let totalShares = 0; 
                    let totalPrice = 0;
                    let totalCurrentPrice = 0;
                    tempArray.forEach((purchase) => {
                        totalShares += purchase.sharesTotal;
                        totalPrice += purchase.sharesTotal * purchase.purchasePrice;
                        totalCurrentPrice += purchase.sharesTotal * purchase.currentPrice;
                    })
                
                    compositeArray.push(
                        {
                            stockSymbol:  tempArray[0].stockSymbol,
                            currentPrice: tempArray[0].currentPrice,
                            sharesTotal:  totalShares,
                            purchasePriceTotal: totalPrice
                        }
                    )

                    purchasePriceTotal += totalPrice;
                    currentTotalPortfolio += totalCurrentPrice;
                }

                // console.log(combinedArray)
                // console.log(portfolioSymbols)
                // console.log(currentTotalPortfolio)
                // console.log(compositeArray)
                this.setState({
                    stockPurchases: combinedArray,
                    username: combinedArray[0].user.username,
                    userId: combinedArray[0].userId,
                    compositeArray: compositeArray,
                    purchasePriceTotal: purchasePriceTotal,
                    currentPortfolioTotal: currentTotalPortfolio,                    
                })
                console.log(this.state)
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
        <div><p>Your portfolio is currently worth ${this.state.currentPortfolioTotal}</p>
        <p>You current total gain/loss is {this.state.currentPortfolioTotal - this.state.purchasePriceTotal} dollars</p>
                </div>
                <div className="test-container">
                    <PortfolioTable purchases={this.state.stockPurchases} printPortfolio={this.printPortfolio} />
                </div>
            </>
        )
    }

}

export default MyPortfolio
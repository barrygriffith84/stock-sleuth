import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import PortfolioTable from './PortfolioTable'
import { Link } from "react-router-dom"
import NewStockModal from "./NewStockModal"
import CompositeTable from './CompositeTable'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PieChart from './PieChart'

class MyPortfolio extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();

   
      
    

    state = {
        portfolioSymbols: [],
        stockPurchases: [],
        compositePortfolio: [],
        purchasePriceTotal: 0,
        currentPortfolioTotal: 0,
        username: "",
        userId: null,
        ledgerBool: true,
    }

    tableSwitch = () => {

        this.setState({
            ledgerBool: !this.state.ledgerBool,
        })
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

            // Inputs the portfolio symbols into fetch call to get the stock prices from an external API.  Stores the return in the currentPrices array
            APIManager.getPortfolioPrices(portfolioSymbols).then((stocks) => {

                currentPrices = stocks.results

                for (let i = 0; i < portfolioSymbols.length; i++) {
                    let filteredPriceArray = currentPrices.filter((stock) => stock.symbol === portfolioSymbols[i])


                    let filteredPortfolioArray = portfoltioPurchases.filter((stock) => stock.stockSymbol === portfolioSymbols[i])

                    filteredPortfolioArray.forEach((purchase) => {
                        purchase.currentPrice = filteredPriceArray[0].lastPrice;
                        purchase.totalGainLoss = filteredPortfolioArray[0].sharesTotal * filteredPortfolioArray[0].purchasePrice - filteredPortfolioArray[0].sharesTotal * filteredPriceArray[0].lastPrice
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
                            stockSymbol: tempArray[0].stockSymbol,
                            currentPriceTotal: tempArray[0].currentPrice * totalShares,
                            sharesTotal: totalShares,
                            purchasePriceTotal: totalPrice
                        }
                    )

                    purchasePriceTotal += totalPrice;
                    currentTotalPortfolio += totalCurrentPrice;
                }

                this.setState({
                    portfolioSymbols: portfolioSymbols,
                    stockPurchases: combinedArray,
                    username: combinedArray[0].user.username,
                    userId: combinedArray[0].userId,
                    compositePortfolio: compositeArray,
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
                
               
                <Grid container spacing={6} direction="row" justify="flex-end" alignItems="center">
                <Grid item xs={6} >
                    <NewStockModal printPortfolio={this.printPortfolio} />
                    </Grid>
                    <Grid item xs={6} >
                    <PieChart compositePortfolio={this.state.compositePortfolio}/>
                    </Grid>
                <Grid item xs={1} >
                        {this.isAuthenticated() ? <Link to="/" onClick={this.clearStorage}>Logout</Link> : ""}

                    </Grid>
                   
                    </Grid>

                

                    <Grid container spacing={0} direction="column" justify="center" alignItems="center">
                    <Grid item xs={6} >
                    <Container component={Paper} elevation={3} color="secondary">
                        <h1 padding={5}>{this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}'s Portfolio</h1>
                        <div><p>Your portfolio is currently worth ${this.state.currentPortfolioTotal}</p>
                            <p>You current total gain/loss is {this.state.currentPortfolioTotal - this.state.purchasePriceTotal} dollars</p>
                        </div>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                       
                    

                    
                        {this.state.ledgerBool === true ? (<><Button variant="contained" color="primary" onClick={this.tableSwitch} >Switch to Composite View</Button>  <PortfolioTable purchases={this.state.stockPurchases} printPortfolio={this.printPortfolio} /></>) : (<><Button variant="contained" color="primary" onClick={this.tableSwitch}>Switch to Ledger View</Button><CompositeTable purchases={this.state.compositePortfolio} /></>)}
                    </Grid>
                </Grid>





            </>
        )
    }

}

export default MyPortfolio
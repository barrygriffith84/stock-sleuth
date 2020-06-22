import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import PortfolioTable from './PortfolioTable'


class MyPortfolio extends Component {
    
    state = {
        stockPurchases: [],
        stockSymbols: [],
        username: "",
        userId: null,
    }


    componentDidMount() {
        // APIManager.getPortfolio(JSON.parse(localStorage.getItem("credentials")).userId

        // )
        // .then((APIPurchases) => 
        // {   this.setState({
        //     stockPurchases: APIPurchases,
        //     username: APIPurchases[0].user.username,
        //     stockSymbols: APIPurchases.map((stock) => stock.stockSymbol)})
        // })

        const stockArray = ["IBM","AMZN","GOOG"]

        APIManager.getPortfolioPrices(stockArray).then((r) => console.log(r))

        
       
    }

render () {

    return(
        <>
        <h1>{this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}'s Portfolio</h1>
        <div className="test-container">
    <PortfolioTable purchases={this.state.stockPurchases}/>
        </div>
        </>
    )
}

}

export default MyPortfolio
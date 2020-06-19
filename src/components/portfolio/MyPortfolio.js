import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import PortfolioTable from './PortfolioTable'


class MyPortfolio extends Component {
    
    state = {
        stockPurchases: [],
        username: "",
    }


    componentDidMount() {
        APIManager.getPortfolio("1").then((APIPurchases) => 
        { console.log(APIPurchases); this.setState({
            stockPurchases: APIPurchases,
            username: APIPurchases[0].user.username
        })})
       
    }

render () {

    return(
        <>
        <h1>This is {this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}'s portfolio!</h1>
        <div className="test-container">
    <PortfolioTable purchases={this.state.stockPurchases}/>
        </div>
        </>
    )
}

}

export default MyPortfolio
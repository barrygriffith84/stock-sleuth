import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import CompanyProfileList from './CompanyProfileList'
import CompanyEarningsTable from './CompanyEarningsTable'
import StockMetricsList from './StockMetricsList'


class StockDetails extends Component {
    state = {
        symbol: '',
        companyProfile: [],
        companyEarnings: [],
        stockMetrics: {},
    }


 componentDidMount() {
    Promise.all([
        APIManager.getCompanyProfile(this.props.match.params.symbol),
        APIManager.getEarnings(this.props.match.params.symbol),
        APIManager.getStockMetrics(this.props.match.params.symbol)
    ]
    ).then((values) => { console.log("promise",values)  
        this.setState({
        symbol: this.props.match.params.symbol,
        companyProfile: values[0],
        companyEarnings: values[1],
        stockMetrics: values[2].metric,
    })})

 }




    render() {
        console.log("Stock Metrics:", this.state.stockMetrics)
        return(
            <>
            <h1>Stock Details</h1>
            <CompanyProfileList profile={this.state.companyProfile}/>
            <CompanyEarningsTable earnings={this.state.companyEarnings} />
            <StockMetricsList stock={this.state.stockMetrics} />
            </>
        )
    }
}


export default StockDetails
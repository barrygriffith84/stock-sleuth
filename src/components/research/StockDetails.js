import React, { Component } from "react";
import APIManager from "../../modules/APIManager";
import CompanyProfileList from './CompanyProfileList'
import CompanyEarningsTable from './CompanyEarningsTable'
import StockMetricsList from './StockMetricsList'
import "./StockDetails.css"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



class StockDetails extends Component {
    

    state = {
        symbol: '',
        companyProfile: [],
        companyEarnings: [],
        stockMetrics: {},
        widgetURL: "",
       
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
        widgetURL: values[0].exchange === "NEW YORK STOCK EXCHANGE, INC." ? (`https://wallmine.com/widgets/chart/NYSE:${this.props.match.params.symbol}`) : values[0].exchange.includes("NASDAQ") ? (`https://wallmine.com/widgets/chart/NASDAQ:${this.props.match.params.symbol}`) : (`https://wallmine.com/widgets/chart/NYSEMKT:${this.props.match.params.symbol}`)
     
    })})

 }




    render() {
        
        return(
            <>
            
             <Grid container spacing={5} direction="column" justify="center" alignItems="center">
             <h1>Stock Details</h1>
             
        <style>.stock-widget width: 100; height: 500px</style>
            <iframe src={this.state.widgetURL} async title="test" allowtransparency='true' scrolling='no' className="stock-widget" ></iframe>
           
            <Grid item xs={10} >
            <CompanyEarningsTable earnings={this.state.companyEarnings} />
            </Grid>
            <Grid container spacing={5} direction="row" justify="center" alignItems="center">
            
            <Grid item xs={5} >
            <StockMetricsList stock={this.state.stockMetrics} />
            </Grid>
            
           

              <Grid item xs={5} >
            <CompanyProfileList profile={this.state.companyProfile}/>
            </Grid>
            </Grid>
            </Grid>
            </>
        )
    }
}


export default StockDetails
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import APIManager from '../../modules/APIManager';
import SearchList from './SearchList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class StockResearch extends Component {

    state = {
        userInput: "",
        searchResults: [],
        loadingStatus: false,
        clickStatus: false,
    }

    isAuthenticated = () => localStorage.getItem("credentials") !== null;

    clearStorage = () => localStorage.clear();

    findStocks = (e) => {
        this.setState({ loadingStatus: true });
        const searchInput = this.state.userInput;

        if (this.state.userInput === ""){
            alert("Please enter a search value")
        
    } else{
        APIManager.symbolSearch(searchInput).then((companies) => {
            console.log(companies)
            this.setState({
                searchResults: companies.bestMatches,
                clickStatus: true,
            })
        })
    }
    };

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };



    render() {

        return (
            <>
           <Grid container spacing={0} direction="row" justify="flex-end" alignItems="center" >
                    <Grid item xs={1} >
                        {this.isAuthenticated() ? <Button variant="outlined" color="primary" onClick={this.clearStorage}>Logout</Button> : ""}
                    </Grid>
                </Grid>

             <Grid container spacing={3} direction="row" justify="center" alignItems="center">
              
                
                <div className="stocks-container">
               
                    {/* The search field */}
                 
             
                 <div>
                        <input type="text" placeholder="Find Stocks" required className="form-control"  onChange={this.handleFieldChange} id="userInput" value={this.state.userInput} /> <Button size="small" variant="outlined" color="primary" className="stock-search-btn" onClick={() => { this.findStocks() }}>Search</Button>
                        </div>
                  
                 


                    

                    <Grid item xs={16} >
                    {/* The search results.  A conditional is used to print a message if the search button has been click and the search results are empty */}
                    <div className="stock-list-container">
                            {this.state.searchResults.length === 0 && this.state.clickStatus === true ? ('Sorry, there are no results') : this.state.searchResults.length > 0 ? (<SearchList searchResults={this.state.searchResults} />) : ""
                        }
                        
                    </div>
                    </Grid>

                    


                </div>
                </Grid>
           
               
            </>
        )
    }

}

export default StockResearch
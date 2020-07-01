import React, { Component } from 'react'
import { Link } from "react-router-dom"
import APIManager from '../../modules/APIManager';
import SearchList from './SearchList';


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
                {this.isAuthenticated() ? <Link to="/" onClick={this.clearStorage}>Logout</Link> : ""}
                <div className="stocks-container">

                    {/* The search field */}
                    <div className="stocks-search-container">
                        <input type="text" placeholder="Find Stocks" required className="form-control" onChange={this.handleFieldChange} id="userInput" value={this.state.userInput} />
                        <button className="stock-search-btn" onClick={() => { this.findStocks() }}>Search</button>
                    </div>

                    {/* The search results.  A conditional is used to print a message if the search button has been click and the search results are empty */}
                    <div className="stock-list-container">
                            {this.state.searchResults.length === 0 && this.state.clickStatus === true ? ('Sorry, there are no results') : this.state.searchResults.length > 0 ? (<SearchList searchResults={this.state.searchResults} />) : ""
                        }
                        
                    </div>

                </div>

            </>
        )
    }

}

export default StockResearch
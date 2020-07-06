import React, { Component } from 'react'
import { Link } from "react-router-dom"
import APIManager from '../../modules/APIManager';


class Home extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();

   

    render() {
        return (
            <>
            {this.isAuthenticated() ? <Link to="/"  onClick={this.clearStorage}>Logout</Link> : ""}
            <div>
            <h1>Welcome to Stock Sleuth</h1>
            <p>Track stock prices and changes to your stock portfolio in <strong>My Portfolio</strong></p>
            <p>Use <strong>Stock Research</strong> to find information on different stocks</p>
            <p>Find investment ideas by seeing the stock holdings from top-performing hedge funds in <strong>Hedge Funds</strong></p>
            </div>
            </>
        )
    }
}

export default Home
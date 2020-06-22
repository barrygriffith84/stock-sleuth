import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Home extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    clearStorage = () => localStorage.clear();

    render() {
        return (
            <>
            {this.isAuthenticated() ? <Link to="/"  onClick={this.clearStorage}>Logout</Link> : ""}
            <div>
            <h1>This is the home page!</h1>
            </div>
            </>
        )
    }
}

export default Home
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'




class NavBar extends Component {
    render() {
        return (
            
            <header >
                <h1 className="site-title">Stock Sleuth<br />
                </h1>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/portfolio">My Portfolio</Link></li> 
                        <li><Link className="nav-link" to="/research">Research Stocks</Link></li>
                        <li><Link className="nav-link" to="/hedge">Hedge Funds</Link></li>
                    </ul>
                </nav>
            </header>
        )
        }
    }


        export default NavBar
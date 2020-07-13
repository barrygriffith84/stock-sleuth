import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import Button from '@material-ui/core/Button';


class NewStockForm extends Component{
    state = {
        symbol: "",
        purchasePrice: null,
        numberShares: null,
        purchaseDate: "",
        loadingStatus: false,
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    createNewStock = evt => {
        evt.preventDefault();
        if (this.state.symbol === "" || this.state.purchasePrice === "" || this.state.numberShares === "" || this.state.purchaseDate === "") {
            window.alert("Please enter a value for all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const newStock = {
                stockSymbol: this.state.symbol.toUpperCase(),
                purchasePrice: parseInt(this.state.purchasePrice),
                sharesTotal: parseInt(this.state.numberShares),
                date: this.state.purchaseDate,
                userId: JSON.parse(localStorage.getItem("credentials")).userId
            };

            APIManager.postNewStock(newStock).then(() => {this.props.printPortfolio()}).then(() => {this.props.handleClose()})
    }
}


    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="symbol"
                        placeholder="Stock Symbol"
                        />
                        <label htmlFor="symbol">Stock Symbol</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="purchasePrice"
                        placeholder="Purchase Price"
                        />
                        <label htmlFor="purchasePrice">Purchase Price</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="numberShares"
                        placeholder="Number of Shares"
                        />
                        <label htmlFor="numberShares">Number of Shares</label>
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="purchaseDate"
                        placeholder="Date of Purchase"
                       
                        />
                        <label htmlFor="purchaseDate">Date of Purchase</label>
                    </div>
                    <div className="alignRight">
                        <Button
                        type="button"
                        variant="contained" 
                        color="primary"
                        size="small"
                        disabled={this.state.loadingStatus}
                        onClick={this.createNewStock}
                        >Submit</Button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}
    



export default NewStockForm
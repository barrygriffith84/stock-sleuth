import React, { Component } from "react";
import APIManager from "../../modules/APIManager";


class StockEditForm extends Component {

    state = {
        symbol: '',
        purchaseDate: '',
        numberShares: '',
        purchasePrice: '',
        loadingStatus: true,
    }

    handleFieldChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };


      updateExistingStock = (e) => {
          e.preventDefault();
          this.setState({ laodingStatus: true});
          const editedStock = {
              id: parseInt(this.props.id),
              stockSymbol: this.state.symbol,
              date: this.state.purchaseDate,
              sharesTotal: parseInt(this.state.numberShares),
              purchasePrice: parseFloat(this.state.purchasePrice),
              userId: this.state.userId
          }
APIManager.updateStockPurchase(editedStock).then(() => 
          this.props.printPortfolio(),
          this.props.handleClose()
)

      }



      componentDidMount() {
          APIManager.getStockPurchase(this.props.id)
          .then((stock) => {
              this.setState({
                  symbol: stock.stockSymbol,
                  purchaseDate: stock.date,
                  numberShares: stock.sharesTotal,
                  purchasePrice: stock.purchasePrice,
                  userId: stock.userId,
                  loadingStatus: false,
              })
          })
      }

      render() {
        return (
          <>
            <form>
              <fieldset>
                <div className="formgrid">
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="symbol"
                    value={this.state.symbol}
                  />
                  <label htmlFor="symbol">Stock Symbol</label>
    
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="purchaseDate"
                    value={this.state.purchaseDate}
                  />
                  <label htmlFor="purchaseDate">Date of Purchase</label>
              
                    
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="numberShares"
                    value={this.state.numberShares}
                  />
                  <label htmlFor="numberShares">Number of Shares</label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="purchasePrice"
                    value={this.state.purchasePrice}
                  />
                  <label htmlFor="purchasePrice">Purchase Price</label>
                </div>
                
                <div className="alignRight">
                  <button
                    type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.updateExistingStock}
                    className="btn btn-primary"
                  >
                    Submit Edit
                  </button>
                </div>
              </fieldset>
            </form>
          </>
        );
      }
    }
    

    export default StockEditForm
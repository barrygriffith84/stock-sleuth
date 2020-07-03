import APIKeys from './APIKeys'

const APIManager = {

    symbolSearch(companyName) {
        return fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${APIKeys.alphaKey}`).then((r) => r.json())
    },

    getPortfolio(userId) {
        return fetch(`http://localhost:5002/purchases?userId=${userId}&_expand=user`).then((r) => r.json())
    },

    getPortfolioPrices(stockArray) {
        return fetch(`https://marketdata.websol.barchart.com/getQuote.json?apikey=${APIKeys.barchartKey}&symbols=${stockArray}&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate`).then((r) => r.json())
    },

    //Used for logging in.  Returns a user based on an email and password.
    filteredGetUsers(email, password) {
        return fetch(`http://localhost:5002/users?email=${email}&password=${password}`).then((r) => r.json())
    },

    getAllUsers() {
        return fetch(`http://localhost:5002/users`).then((r) => r.json())
    },

    //Passes in a user object and posts it to the JSON server
    postUser(newUser) {
        return fetch(`http://localhost:5002/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },

    postNewStock(stockObject) {
        return fetch(`http://localhost:5002/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stockObject),
        }).then(data => data.json())
    },

    deleteStockPurchase(id) {
        return fetch(`http://localhost:5002/purchases/${id}`, {
            method: "DELETE",
        }).then(data => data.json())
    },

    updateStockPurchase(editedStock) {
        return fetch(`http://localhost:5002/purchases/${editedStock.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedStock),
        }).then((r) => r.json())
    },

    getStockPurchase(id) {
        return fetch(`http://localhost:5002/purchases/${id}`).then((r) => r.json())
    },

    getCompanyProfile(symbol) {
        return fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${APIKeys.finnhub}`).then((r) => r.json())
    },

    getEarnings(symbol) {
        return fetch(`https://finnhub.io/api/v1/stock/earnings?symbol=${symbol}&token=${APIKeys.finnhub}`).then((r) => r.json())
    },

    getStockMetrics(symbol) {
        return fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=price&token=${APIKeys.finnhub}`).then((r) => r.json())
    },

    getStockNews(symbol) {
        // Sets the to and from (to date minus one month) dates for the fetch call
        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 1);
        const toDateString = `${toDate.getFullYear()}-${("0" + toDate.getMonth()).slice(-2)}-${("0" + toDate.getDate()).slice(-2)}`
        const fromDateString = `${fromDate.getFullYear()}-${("0" + fromDate.getMonth()).slice(-2)}-${("0" + fromDate.getDate()).slice(-2)}`
        console.log(toDateString)
        console.log(fromDateString)

        return fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDateString}&to=${toDateString}&token=${APIKeys.finnhub}`).then((r) => r.json())
    },

    getHedgeFund(cik) {
        return fetch(`https://jivedata.com/13F?cik=${cik}&length=1&detail=true`).then((r) => r.json())
    }


}


export default APIManager
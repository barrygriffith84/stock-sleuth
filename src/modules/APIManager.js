import APIKeys from './APIKeys'

const APIManager = {

    symbolSearch(companyName) {
        return fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${APIKeys.alphaKey}`).then((r) =>  r.json() )
    },

    getPortfolio(userId) {
        return fetch(`http://localhost:5002/purchases?userId=${userId}&_expand=user`).then((r) => r.json())
    },

    getPortfolioPrices(stockArray) {
        return fetch(`https://marketdata.websol.barchart.com/getQuote.json?apikey=7c6ba6236e0b3e86299bb364c745ac21&symbols=${stockArray}&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate`).then((r) => r.json())
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
}





}


export default APIManager
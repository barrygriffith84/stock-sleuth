import APIKeys from './APIKeys'

const APIManager = {
    
    symbolSearch(companyName) {
        return fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${APIKeys.alphaKey}`).then((r) => {r.json()})
    },

    getPortfolio(userId) {
        return fetch(`http://localhost:5002/purchases?userId=${userId}&_expand=user`).then((r) => r.json())
    },
    
    getPortfolioPrices(stockArray) {
        return fetch(`https://marketdata.websol.barchart.com/getQuote.json?apikey=7c6ba6236e0b3e86299bb364c745ac21&symbols=${stockArray}&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate`).then((r) => r.json())
    }

}


export default APIManager
# Stock Sleuth

## Overview
Stock Sleuth is an investing app for people interested in learning stock trading in a simulated environment.  The **My Portfolio** page allows you to post and track stocks.  You can use the **Stock Research** to look up publicly-traded companies and find different company and pricing information.  Also take a look at the **Hedge Fund** page where you can examine the stock holdings of some of the top-performing hedge funds that trade on US markets.

## Video Walkthrough
https://www.youtube.com/watch?v=8ITCrvrkRXQ&feature=emb_title

## !!! You need to sign up for multiple API Keys.  I can send the keys to any employer that contacts me !!!
### Keys you will need:
1.  https://www.alphavantage.co/
2.  https://www.barchart.com/ondemand/api
3.  https://finnhub.io/

## Installation Instructions
1.  Clone down the repository
3.  Open the APIManager.js file and paste your keys in on lines 6, 14, 68, 72, 76, and 89   
2.  In the root folder of the project run **npm-install**
3.  While in the root folder run **npm install react-chartjs-2**
4.  Install JSON-Server by running **npm i json-server**
4.  In a seperate gitbash window, navigate to the API folder and run **json-server -p 5002 -w stock.json**
5.  In the root folder start the app by running **npm start**

## Walkthrough
 Register an account and log in
 
### Homepage
<img src="https://user-images.githubusercontent.com/62182071/103853413-f960c400-507b-11eb-8cfa-46f98b85a242.png">

### My Portfolio
<img src="https://user-images.githubusercontent.com/62182071/106316045-20a15000-623a-11eb-9bc8-363f362fa883.png">

In the my stocks page you can track stock prices.  Click the new stock add the symbol, number of shars, price, and date to begin tracking a new stock.  The My Stocks page offers to different table views.  The default view is the Ledger View which tracks the price of a single share of each stock you have stored.  Click on the Composite View to see the total price of all the shares you own in a stock.

### Stock Research
<img src="https://user-images.githubusercontent.com/62182071/103853477-24e3ae80-507c-11eb-9fc0-bc0adf7a5eec.png">

Enter the name of a publicly traded company into the search bar and click on a results to see pricing, EPS, and company information about a stock.

### Hedge Funds
<img src="https://user-images.githubusercontent.com/62182071/103853529-4ba1e500-507c-11eb-92cc-342e756eef21.png">

Select a hedge fund from the drop-down list to see the quarterly stock holdings from one of the top performing hedge funds from last year. 





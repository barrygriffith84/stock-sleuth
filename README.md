# Stock Sleuth

## Overview
Stock Sleuth is an investing app for people interested in learning stock trading in a simulated environment.  The **My Portfolio** page allows you to post and track stocks.  You can use the **Stock Research** to look up publicly-traded companies and find different company and pricing information.  Also take a look at the **Hedge Fund** page where you can examine the stock holdings of some of the top-performing hedge funds that trade on US markets.

## Installation Instructions
###*** You need to sign up for multiple API Keys for my project to work.  I can send the keys to any employer that contacts me ****
1.  Clone down the repository
2.  In the root folder of the project run **npm-install**
3.  While in the root folder run **npm install react-chartjs-2**
4.  Install JSON-Server by running **npm i json-server**
4.  In a seperate gitbash window, navigate to the API folder and run **json-server -p 5002 -w stock.json**
5.  In the root folder start the app by running **npm start**

## How to Use
Register an account and log in.

### My Stocks
In the my stocks page you can track stock prices.  Click the new stock add the symbol, number of shars, price, and date to begin tracking a new stock.  The My Stocks page offers to different table views.  The default view is the Ledger View which tracks the price of a single share of each stock you have stored.  Click on the Composite View to see the total price of all the shares you own in a stock.

### Stock Research
Enter the name of a publicly traded company into the search bar and click on a results to see pricing, EPS, and company information about a stock.

### Hedge Funds
Select a hedge fund from the drop-down list to see the quarterly stock holdings from one of the top performing hedge funds from last year. 





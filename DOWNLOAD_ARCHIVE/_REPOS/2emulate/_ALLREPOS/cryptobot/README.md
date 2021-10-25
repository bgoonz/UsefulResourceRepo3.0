# Cryptobot

:moneybag: :robot: Cryptocurrency trading bot for multiple platforms and coins (gdax/coinbase & dollar/bitcoin/ethereum/litecoin)

This is a multi-currency trading bot. It's primary purpose was to automate trading cryptocurrency, however it can be use to trade forex, stocks and index funds once the API integration is available.

# Architecture

This program is divided in multiple modules:
  - **Provider**: implements the provider interface to be able to talk to different market exchanges. It needs exchange API keys, ticker data websocket, REST API to create orders and get funds.
  - **Ticker**: connects to providers (exchanges/brokers) and listen to market ticks using websockets. It receive orders through the REST API. It executes orders when price goes beyond or under certain limit. It also stores ticks/orders on DB.
  - **Analyzer**: takes aggregated data from database and runs indicators and strategies to find entry/exit oportunities.
  - **Simulator**: it simulates a broker and calculates profit and losses. It uses the real data from DB to replay it on *Ticker* and *Analyzer*.
  - **Web**: api & web interface to visualize current orders, market ticks, history of profit and loss. API is used to tran

You can run everything in one system. But for maximum performance, it is recommended to do the following split:
  - Mongo: (RAM: 1 GB / 1 CPU / 20GB HDD)
  - Ticker & RabbitMQ (RAM: 0.5 GB / 1 CPU)
  - Analyzer: (RAM: 0.5 GB / 1 CPU)
  - Web (RAM: 0.5 GB / 1 CPU)


## Web

We uses [Techan.js](http://techanjs.org/) (based on D3) to visualize data. The plot has the following features:
  - Arrows: to indicate trades (buy vs sell & short & long) - http://bl.ocks.org/andredumas/3c0eefdd77a6380b1a35
  - Zoom & Pan: see http://bl.ocks.org/andredumas/edf630690c10b89be390

# Strategies

There are multiple strategies and depending on what your goals are you might choose one of the following.

## Buy low and sell high

This strategy applies for everything. However, it is specially useful when trading currencies. The market is very volatile so you want to ensure you buy to the lowest price and sell high. It's up to you to choose the time range when this is going to happen (1h, 1d, or 1y).

Trading frequency: seconds/days/weeks/months

## Arbitrage

Cryptocurrency exchanges have different prices sometimes, so you can use that for your advantage:
1. You can buy from the exchange with the lowest price and sell that amount in the exchange with highest price.
2. You can buy long from the one the exchange with the lowest price and sell short on the exchange with the highest price. This requires margin account on at least one of the accounts and protects you against market fluctuations and avoid sending funds from one account to the other.

Trading frequency: seconds/days/weeks/months

## High Frequncey Trading

TBD

Trading frequency: seconds

## Buy and hold

It's very hard to time the market even with automated tools like this. So, one strategy that can work for you is buying and holding. This espcially useful when you know the main trend is upward. Let's say you bet in the BTC market going up over the years. In that case, you can buy and hold. This will also avoid you trading fees, commisions and capital gains taxes (if applies).

Trading frequency: months/years/decades

# Technical Analysis

There is a lot of indicators to choose from. You can build an strategy by combining one or more indicators and defining a entry and exit strategy.

---

# Notes

- CLI tool that runs in the background
- produces logs and also has a command colored logs stdout
- unit test for all functions
- every function is documented
- integration test to test strategies with real market data
- try to avoid takers side (market orders) and favor makers side (limit and stop orders)

# Questions

- How's price set on the market? If somebody set a sell price that is in the range of a buy order do both get matched even if the current market price hasn't reach that yet?


# Dependencies

```
npm install pm2 -g

pm2 start --name="ticker" ./cli.js -- ticker
pm2 ls
pm2 stop
```

# Possible deps

```
var z = require('zero-fill')
  , n = require('numbro')

        cols.push(z(8, n(s.period.macd_histogram).format('+00.0000'), ' ')[color])
        cols.push(z(8, n(s.period.overbought_rsi).format('00'), ' ').cyan)
```


### Disclaimer

__USE THE SOFTWARE AT YOUR OWN RISK. YOU ARE RESPONSIBLE FOR YOUR OWN MONEY. PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.__

__THE AUTHORS AND ALL AFFILIATES ASSUME NO RESPONSIBILITY FOR YOUR TRADING RESULTS.__
